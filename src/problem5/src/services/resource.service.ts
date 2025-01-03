import { ResourceRepository } from '../repositories/resource.repository';
import { CreateResourceDto } from '../dtos/create-resource.dto';
import { UpdateResourceDto } from '../dtos/update-resource.dto';
import { QueryResourceDto } from '../dtos/query-resource.dto';
import { Resource } from '../models/resource.entity';
import { PaginatedResult } from '../interfaces/pagination.interface';

export class ResourceService {
    private repository: ResourceRepository;

    constructor() {
        this.repository = new ResourceRepository();
    }

    async create(createDto: CreateResourceDto): Promise<Resource> {
        const resource = this.repository.create(createDto);
        return await this.repository.save(resource);
    }

    async findAll(queryDto: QueryResourceDto): Promise<PaginatedResult<Resource>> {
        return await this.repository.findAllWithPagination(queryDto);
    }

    async findOne(id: number): Promise<Resource> {
        const resource = await this.repository.findOne({ where: { id } });
        if (!resource) {
            throw new Error('Resource not found');
        }
        return resource;
    }

    async update(id: number, updateDto: UpdateResourceDto): Promise<Resource> {
        const resource = await this.findOne(id);
        this.repository.merge(resource, updateDto);
        return await this.repository.save(resource);
    }

    async remove(id: number): Promise<void> {
        const resource = await this.findOne(id);
        await this.repository.remove(resource);
    }
}
import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { Resource } from '../models/resource.entity';
import { QueryResourceDto } from '../dtos/query-resource.dto';
import { PaginatedResult } from '../interfaces/pagination.interface';

export class ResourceRepository extends Repository<Resource> {
    constructor() {
        super(Resource, AppDataSource.manager);
    }

    async findAllWithPagination(queryDto: QueryResourceDto): Promise<PaginatedResult<Resource>> {
        const { page = 1, limit = 10, category, sortBy, sortOrder } = queryDto;
        const skip = (page - 1) * limit;

        const queryBuilder = this.createQueryBuilder('resource');

        if (category) {
            queryBuilder.where('resource.category = :category', { category });
        }

        queryBuilder
            .orderBy(`resource.${sortBy}`, sortOrder)
            .skip(skip)
            .take(limit);

        const [resources, total] = await queryBuilder.getManyAndCount();

        return {
            data: resources,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        };
    }
}
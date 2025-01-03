import { Request, Response, NextFunction } from 'express';
import { ResourceService } from '../services/resource.service';
import { CreateResourceDto } from '../dtos/create-resource.dto';
import { UpdateResourceDto } from '../dtos/update-resource.dto';
import { QueryResourceDto } from '../dtos/query-resource.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException, NotFoundException } from '../errors/http-exception';
import { ResponseWrapper } from '../utils/response.wrapper';

export class ResourceController {
    private service: ResourceService;

    constructor() {
        this.service = new ResourceService();
    }

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const dto = plainToClass(CreateResourceDto, req.body);
            const errors = await validate(dto);
            
            if (errors.length > 0) {
                throw new ValidationException(errors);
            }

            const result = await this.service.create(dto);
            res.status(201).json(
                ResponseWrapper.success(
                    result,
                    'Resource created successfully',
                    201
                )
            );
        } catch (error) {
            next(error);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const queryDto = plainToClass(QueryResourceDto, req.query);
            const errors = await validate(queryDto);
            
            if (errors.length > 0) {
                throw new ValidationException(errors);
            }

            const result = await this.service.findAll(queryDto);
            res.json(
                ResponseWrapper.paginate(
                    result.data,
                    result.page,
                    result.limit,
                    result.total,
                    'Resources retrieved successfully'
                )
            );
        } catch (error) {
            next(error);
        }
    }

    async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const result = await this.service.findOne(id);
            res.json(
                ResponseWrapper.success(
                    result,
                    'Resource retrieved successfully'
                )
            );
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const dto = plainToClass(UpdateResourceDto, req.body);
            const errors = await validate(dto);
            
            if (errors.length > 0) {
                throw new ValidationException(errors);
            }

            const result = await this.service.update(id, dto);
            res.json(
                ResponseWrapper.success(
                    result,
                    'Resource updated successfully'
                )
            );
        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            await this.service.remove(id);
            res.status(204).json(
                ResponseWrapper.success(
                    null,
                    'Resource deleted successfully',
                    204
                )
            );
        } catch (error) {
            next(error);
        }
    }
}
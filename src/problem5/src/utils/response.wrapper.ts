import { ApiResponse } from '../interfaces/response.interface';

export class ResponseWrapper {
    static success<T>(data: T, message: string = 'Success', status: number = 200, metadata?: any): ApiResponse<T> {
        return {
            status,
            message,
            data,
            metadata
        };
    }

    static error(message: string = 'Error', status: number = 500): ApiResponse<null> {
        return {
            status,
            message,
            data: null
        };
    }

    static paginate<T>(
        data: T[],
        page: number,
        limit: number,
        total: number,
        message: string = 'Success'
    ): ApiResponse<T[]> {
        return {
            status: 200,
            message,
            data,
            metadata: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        };
    }
}
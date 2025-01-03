import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { HttpException } from '../errors/http-exception';
export const errorHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(error.stack);

  if (error instanceof HttpException) {
      res.status(error.status).json({
          status: error.status,
          message: error.message,
          errors: 'errors' in error ? error.errors : undefined
      });
      return;
  }

  res.status(500).json({
      status: 500,
      message: 'Internal server error'
  });
};
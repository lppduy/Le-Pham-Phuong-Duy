export class HttpException extends Error {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
      super(message);
      this.status = status;
      this.message = message;
  }
}

export class NotFoundException extends HttpException {
  constructor(message: string = 'Resource not found') {
      super(404, message);
  }
}

export class BadRequestException extends HttpException {
  constructor(message: string = 'Bad request') {
      super(400, message);
  }
}

export class ValidationException extends HttpException {
  public errors: any[];

  constructor(errors: any[]) {
      super(400, 'Validation failed');
      this.errors = errors;
  }
}
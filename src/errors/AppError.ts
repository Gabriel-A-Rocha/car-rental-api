export class AppError extends Error {
  public readonly statusCode: number;
  public readonly message: string;

  constructor(statusCode = 400, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export default class ApiError extends Error {
  public error: string;
  public status: number;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.error = this.constructor.name;
    this.status = statusCode;
  }

  toJSON() {
    return {
      error: this.error,
      status: this.status,
      reason: this.message,
    };
  }
}

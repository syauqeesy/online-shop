class HttpException extends Error {
  public readonly statusCode: number;
  public readonly data: unknown;

  constructor(message: string, statusCode: number = 500, data: unknown = null) {
    super(message);

    this.statusCode = statusCode;

    this.data = data;
  }
}

export { HttpException };

class HttpException extends Error {
  public readonly statusCode: number = 500;
  public readonly data: unknown = null;

  constructor(message: string, statusCode: number, data: unknown) {
    super(message);

    this.statusCode = statusCode;

    if (data) {
      this.data = data;
    }
  }
}

export { HttpException };

class HttpException extends Error {
  public readonly statusCode: number = 500;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
  }
}

export { HttpException };

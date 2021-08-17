import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `Requesting: ${req.originalUrl} with ${req.method} method from ${req.ip} address.`,
    );
    next();
  }
}

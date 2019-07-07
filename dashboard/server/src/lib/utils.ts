import { NextFunction, Request, RequestHandler, Response } from 'express'

export const catchErrors = (fn: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction
) => fn(req, res, next).catch(next)

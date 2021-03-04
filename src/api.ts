import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import createConnection from './database';

import { ApiError } from './errors/ApiError';
import { router } from './routers';

createConnection()

const api = express();

api.use(express.json())

api.use(router)

api.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if ( error instanceof ApiError ) {
    return response.status(error.statusCode).json({
      message: error.message
    })
  }

  return response.status(500).json({
    status: error,
    message: `Internal server error ${error.message}`
  })
})



export { api }
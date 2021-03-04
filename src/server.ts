import dotenv from 'dotenv'
dotenv.config()

import { api } from './api'

let serverPort = undefined;

process.env.SERVER_PORT ? serverPort = process.env.SERVER_PORT : serverPort = 3000

api.listen(serverPort, () => console.log(`Server is running on http://localhost:${serverPort}`))

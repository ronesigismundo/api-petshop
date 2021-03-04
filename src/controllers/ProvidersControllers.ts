import { Request, Response} from 'express'
import { getCustomRepository } from "typeorm"
import * as yup from 'yup'

import { ProvidersRepository } from "../repositories/ProvidersRepository"
import { ApiError } from '../errors/ApiError'


class ProvidersControllers {

  async create (request: Request, response: Response) {

    const { company, category, email} = request.body

    const schema = yup.object().shape({
      company: yup.string().required(),
      category: yup.string().required(),
      email: yup.string().email().required()  
    })

    try {
      await schema.validate(request.body, { abortEarly: false})      
     } catch (error) {
       throw new ApiError(error)
     }

    const providersRepository = getCustomRepository(ProvidersRepository);

    const provider = providersRepository.create({
      company,
      category,
      email
    })

    await providersRepository.save(provider)

    return response.status(201).json(provider)

    
  }

  async show (request: Request, response: Response) {
    const providersRepository = getCustomRepository(ProvidersRepository);

    const all = await providersRepository.find();

    return response.status(200).json(all)
    
  }
}

export { ProvidersControllers }
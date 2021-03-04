import { EntityRepository, Repository } from "typeorm";
import { Providers } from '../models/Providers'

@EntityRepository(Providers)
class ProvidersRepository extends Repository<Providers> {}

export { ProvidersRepository }
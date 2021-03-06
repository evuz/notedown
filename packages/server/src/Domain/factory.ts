import { MongooseUserRepository } from './Repositories/User/MongooseUserRepository'
import { Register } from './Services/User/Register'
import { Login } from './Services/User/Login'
import { Domain } from '../Domain'
import { GeneratePhrase } from './Services/User/GeneratePhrase'
import { StartDB } from './Services/StartDB'
import { MongooseDatabase } from './Adapters/Mongoose/MongooseDatabase'
import { config } from '../config'
import { jwtEncoder } from './Adapters/Encoder/jwtEncoder'

export function domainFactory() {
  const repositories = {
    user: new MongooseUserRepository()
  }

  const adapters = {
    db: new MongooseDatabase(config),
    encoder: jwtEncoder({ secret: config.secret })
  }

  const generatePhraseSrv = new GeneratePhrase(repositories.user)

  const services = {
    startDB: new StartDB(adapters.db),
    register: new Register(repositories.user),
    login: new Login(repositories.user, adapters.encoder),
    generatePhrase: generatePhraseSrv
  }

  return new Domain({
    useCases: {
      register: services.register,
      login: services.login,
      generatePhrase: services.generatePhrase,
      startDB: services.startDB
    }
  })
}

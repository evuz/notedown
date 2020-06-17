import { MongooseUserRepository } from './Repositories/User/MongooseUserRepository'
import { Register } from './Services/User/Register'
import { Login } from './Services/User/Login'
import { Domain } from '../Domain'
import { GeneratePhrase } from './Services/User/GeneratePhrase'

export function domainFactory() {
  const config = {
    secret: process.env.JWT_SECRET
  }

  const repositories = {
    user: new MongooseUserRepository()
  }

  const generatePhraseSrv = new GeneratePhrase(repositories.user)

  const services = {
    register: new Register(repositories.user),
    login: new Login(repositories.user, config),
    generatePhrase: generatePhraseSrv
  }
  return new Domain({
    useCases: {
      register: services.register,
      login: services.login,
      generatePhrase: services.generatePhrase
    }
  })
}

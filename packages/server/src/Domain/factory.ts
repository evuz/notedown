import { MongooseUserRepository } from './Repositories/User/MongooseUserRepository'
import { Register } from './Services/User/Register'
import { Login } from './Services/User/Login'
import { Domain } from '../Domain'

export function domainFactory() {
  const repositories = {
    user: new MongooseUserRepository()
  }

  const services = {
    register: new Register(repositories.user),
    login: new Login(repositories.user)
  }
  return new Domain({
    useCases: {
      register: services.register,
      login: services.login
    }
  })
}

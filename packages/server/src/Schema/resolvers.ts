import { UserAdapter } from '../Domain/Adapters/Mongoose/Entities/User.adapter'
import { IDomain } from '../Domain/domain'

type Context = {
  domain: IDomain
}

export const resolvers = {
  users() {
    return UserAdapter.find()
  },
  register(user, { domain }: Context) {
    return domain.getUseCase('register').execute(user)
  },
  login(params, { domain }: Context) {
    return domain.getUseCase('login').execute(params)
  },
  generatePhrase(params, { domain }: Context) {
    return domain.getUseCase('generatePhrase').execute(params)
  }
}

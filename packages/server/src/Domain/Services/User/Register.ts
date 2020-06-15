import { UserRepository } from '../../Repositories/User/UserRepository'
import { User, IUser } from '../../Entities/User'

export class Register {
  constructor(private repository: UserRepository) {}

  execute(user: IUser) {
    return this.repository.register(new User(user))
  }
}

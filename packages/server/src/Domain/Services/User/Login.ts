import { UserRepository } from '../../Repositories/User/UserRepository'
import { IUser } from '../../Entities/User'

export class Login {
  constructor(private repository: UserRepository) {}

  execute(user: Partial<IUser>) {
    return this.repository.find(user)
  }
}

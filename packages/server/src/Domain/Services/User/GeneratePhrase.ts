import { IUser } from '../../Entities/User'
import { UserRepository } from '../../Repositories/User/UserRepository'
import { randomPhrase } from '../../../Helpers/randomPhrase'

type GeneratePhraseExec = {
  email: IUser['email']
}

export class GeneratePhrase {
  constructor(private repository: UserRepository) {}

  async execute({ email }: GeneratePhraseExec) {
    let user = await this.repository.find({ email })
    const password = randomPhrase()

    user = await this.repository.update(user, { password })
    return user.id
  }
}

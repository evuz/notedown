import { UserRepository } from '../../Repositories/User/UserRepository'
import { IUser } from '../../Entities/User'
import { Encoder } from '../../Adapters/Encoder/Encoder'

type LoginExec = {
  id: IUser['id']
  password: string
}

export class Login {
  constructor(private repository: UserRepository, private encoder: Encoder) {}

  async execute(params: LoginExec) {
    const user = await this.repository.find(params)

    if (!user.password || user.password !== params.password) {
      throw Error('Unauthorize')
    }
    await this.repository.update(user, { password: undefined })

    const token = await this.encoder.encode({ user: user.id, iat: Date.now() })
    return { user, token }
  }
}

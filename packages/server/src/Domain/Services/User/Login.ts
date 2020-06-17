import jwt from 'jsonwebtoken'

import { UserRepository } from '../../Repositories/User/UserRepository'
import { IUser } from '../../Entities/User'

type LoginExec = {
  id: IUser['id']
  password: string
}

export class Login {
  get jwtSecret() {
    if (!this.config.secret) {
      throw Error('JWTSecret is needed')
    }
    return this.config.secret
  }

  constructor(private repository: UserRepository, private config: any) {}

  async execute(params: LoginExec) {
    const user = await this.repository.find(params)
    if (!user.password || user.password !== params.password) {
      throw Error('Unauthorize')
    }

    const token = jwt.sign({ user: user.id, iat: Date.now() }, this.jwtSecret)
    return { user, token }
  }
}

import { IUser, User } from '../../Entities/User'

export interface UserRepository {
  register(user: User): Promise<User>
  find(params: Partial<IUser>): Promise<User>
}

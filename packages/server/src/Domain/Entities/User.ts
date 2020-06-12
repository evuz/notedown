import { Entity } from '../../Helpers/Entity'

export interface IUser {
  id: any
  firstName: string
  lastName: string
  email: string
  registerDate: number
}

export interface User extends IUser {}
export class User extends Entity<IUser> {}

import { UserRepository } from './UserRepository'
import { IUser, User } from '../../Entities/User'
import { UserAdapter } from '../../Adapters/Mongoose/Entities/User.adapter'

function mongooseToEntity(user: any) {
  return new User({
    id: user._id.toString(),
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    registerDate: user.registerDate,
    password: user.password
  })
}

export class MongooseUserRepository implements UserRepository {
  register(user: User) {
    const userAdapter = new UserAdapter({
      ...user.toJSON(),
      registerDate: Date.now()
    })
    return userAdapter.save().then(() => mongooseToEntity(userAdapter))
  }

  find({ id, ...params }: Partial<IUser>) {
    if (id) {
      return UserAdapter.findById(id).then(user => mongooseToEntity(user))
    }
    return UserAdapter.findOne(params).then(user => mongooseToEntity(user))
  }

  update(user: User, update: Partial<IUser>) {
    return UserAdapter.updateOne({ _id: user.id }, update).then(() =>
      Object.assign({}, user, update)
    )
  }
}

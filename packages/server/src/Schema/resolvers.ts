import { UserAdapter } from '../Domain/Adapters/Mongoose/Entities/User.adapter'

export const resolvers = {
  users() {
    return UserAdapter.find()
  },
  user({ id }) {
    return UserAdapter.findById(id)
  },
  register({ firstName, lastName, email }) {
    const user = new UserAdapter({
      firstName,
      lastName,
      email,
      registerDate: Date.now()
    })
    return user.save().then(() => user)
  }
}

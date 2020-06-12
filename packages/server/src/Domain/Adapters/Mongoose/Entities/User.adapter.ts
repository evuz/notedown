import mongoose, { Schema } from 'mongoose'

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  registerDate: { type: String, required: true },
})

export const UserAdapter = mongoose.model('User', UserSchema)

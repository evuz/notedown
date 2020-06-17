import mongoose from 'mongoose'

import { config } from './config'

export function startDB() {
  return mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
}

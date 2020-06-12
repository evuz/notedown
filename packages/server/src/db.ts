import mongoose from 'mongoose'

import { config } from './config'

export function db() {
  return mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

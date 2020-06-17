import mongoose from 'mongoose'

import { Database } from '../Database'

export class MongooseDatabase implements Database {
  constructor(private config: any) {}

  start() {
    return mongoose.connect(this.config.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  }
}

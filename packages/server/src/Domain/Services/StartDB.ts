import { Database } from '../Adapters/Database'

export class StartDB {
  constructor(private db: Database) {}

  execute() {
    return this.db.start()
  }
}

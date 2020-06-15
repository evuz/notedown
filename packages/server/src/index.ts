/* eslint-disable no-console */
import { startServer } from './server'
import { startDB } from './db'
import { domain } from './Domain/domain'

Promise.all([startServer(domain.getInstance()), startDB()])
  .then(([server]) => {
    console.log(`Server listening on ${(<any>server.server.address()).port}`)
  })
  .catch(error => {
    console.error(error)
  })

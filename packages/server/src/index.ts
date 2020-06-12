/* eslint-disable no-console */
import { server } from './server'
import { db } from './db'

Promise.all([server(), db()])
  .then(([s]) => {
    console.log(`server listening on ${(<any>s.server.address()).port}`)
  })
  .catch(error => {
    console.error(error)
  })

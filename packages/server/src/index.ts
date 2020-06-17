/* eslint-disable no-console */
import { startServer } from './server'
import { domain } from './Domain/domain'

const domainInstance = domain.getInstance()

Promise.all([
  startServer(domainInstance),
  domainInstance.getUseCase('startDB').execute()
])
  .then(([server]) => {
    console.log(`Server listening on ${(<any>server.server.address()).port}`)
  })
  .catch(error => {
    console.error(error)
  })

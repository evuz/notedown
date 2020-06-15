import { singleton } from '../Helpers/Singleton'
import { domainFactory } from './factory'

export type IDomain = ReturnType<typeof domainFactory>
export const domain = singleton(domainFactory)

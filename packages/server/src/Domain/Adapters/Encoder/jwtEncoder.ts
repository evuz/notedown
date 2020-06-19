import jwt from 'jsonwebtoken'

import { Encoder, EncodeOptions } from './Encoder'

type Params = {
  secret: string
}

export function jwtEncoder({ secret: defaultSecret }: Params): Encoder {
  function encode(
    payload: object,
    { secret = defaultSecret, ...options }: EncodeOptions = <any>{}
  ) {
    return new Promise<string>((resolve, reject) => {
      jwt.sign(payload, secret, options, (err, token) => {
        if (err) {
          return reject(err)
        }
        resolve(token)
      })
    })
  }

  function decode(token: string, secret = defaultSecret) {
    return new Promise<object>((resolve, reject) => {
      jwt.verify(token, secret, (err, payload) => {
        if (err) {
          return reject(err)
        }
        resolve(payload)
      })
    })
  }

  return {
    encode,
    decode
  }
}

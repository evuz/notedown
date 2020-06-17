import jwt from 'jsonwebtoken'

import { Encoder, EncodeOptions } from './Encoder'

export function jwtEncoder(): Encoder {
  function encode(payload: object, secret: string, options?: EncodeOptions) {
    return new Promise<string>((resolve, reject) => {
      jwt.sign(payload, secret, options, (err, token) => {
        if (err) {
          return reject(err)
        }
        resolve(token)
      })
    })
  }

  function decode(token: string, secret: string) {
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

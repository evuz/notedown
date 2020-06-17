export type EncodeOptions = {
  expiresIn: string
}

export interface Encoder {
  encode(
    payload: object,
    secret: string,
    options?: EncodeOptions
  ): Promise<string>
  decode(token: string, secret: string): Promise<object>
}

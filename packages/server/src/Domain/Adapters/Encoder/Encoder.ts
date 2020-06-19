export type EncodeOptions = {
  expiresIn?: string
  secret?: string
}

export interface Encoder {
  encode(payload: any, options?: EncodeOptions): Promise<string>
  decode(token: string, secret?: string): Promise<any>
}

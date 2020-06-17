export const config = {
  port: +process.env.PORT || 3001,
  db: process.env.MONGODB || 'mongodb://localhost:27017/api',
  secret: process.env.JWT_SECRET
}

import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const url = `mongodb+srv://pdantch:${process.env.DB_PWD}@cluster0.apmhfye.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const connect = async () => {
  return await mongoose.connect(url)
}

const disconect = async () => {
  return await mongoose.disconnect()
}

const database = {
  connect,
  disconect
}

export default database
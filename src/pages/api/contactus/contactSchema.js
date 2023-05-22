import mongoose from 'mongoose'

const ContactSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true, unique: true }
})

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema)

export default Contact
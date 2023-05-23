import mongoose from 'mongoose'

const Contact = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true, unique: true }
})

const ContactSchema = mongoose.models.Contact || mongoose.model('Contact', Contact)

export default ContactSchema
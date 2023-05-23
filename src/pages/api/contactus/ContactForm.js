import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const contactData = { name, email, text }

    try {
      const response = await axios.post('/api/contactus/Contact', contactData)
      console.log('Form submitted:', response)

      setShowMessage(true)

    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="container">
      {showMessage ? (
        <div className="message">
          <p>Thank you for your message! {name}</p>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="textarea"
            placeholder="Message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="button" type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

export default ContactForm

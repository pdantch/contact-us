import ContactController from './ContactController';

export default async function handler(req, res) {
	let responseBody = ''
	let statusCode = 200
	try {
		const data = await ContactController.createContact(req.body)
		responseBody = { message: `${process.env.MSG_APPRECIATE1} ${data.name} ${process.env.MSG_APPRECIATE2}` }
	} catch (err) {
		console.log(err)
		statusCode = 501
		if (err.message === process.env.ERROR_DUPLICATE) {
			responseBody = { error: err.message }
			statusCode = 400
		} else {
			responseBody = { error: process.env.ERROR_SAVE }
		}
	}
	res.status(statusCode).json(responseBody)
}
import contactController from './contactController';

export default async function handler(req, res) {
	let message = ''
	let cod = 200
	try {
		const data = await contactController.createContact(req.body)
		message = { message: `${process.env.MSG_APPRECIATE1} ${data.name} ${process.env.MSG_APPRECIATE2}` }
	} catch (err) {
		console.log(err)
		cod = 501
		if (err.message === process.env.ERROR_DUPLICATE) {
			message = { error: err.message }
			cod = 400
		} else {
			message = { error: process.env.ERROR_SAVE }
		}
	}
	res.status(cod).json(message)
	res.end()
}
import database from '@/database/database';
import Contact from './contactSchema';

/**
 * Crud with CREATE, READ, UPDATE, ACTIVATE and DESACTIVATE
 */
const createContact = async (queryContact) => {
  database.connect();
  try {
    const existingContact = await Contact.findOne({ text: queryContact.text });

    if (existingContact) {
      throw new Error(process.env.ERROR_DUPLICATE);
    }

    const newContact = new Contact(queryContact);
    const response = await newContact.save();
    return response;
  } catch (error) {
    throw error;
  }
};

const contactController = {
  createContact
};

export default contactController;
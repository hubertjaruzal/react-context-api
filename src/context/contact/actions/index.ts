import { AddContactAction, DeleteContactAction } from '../types';
import { ADD_CONTACT, DELETE_CONTACT } from '../constants';

const addContact = (name: string, id: number): AddContactAction => ({
  type: ADD_CONTACT,
  payload: { name, id },
});

const deleteContact = (id: number): DeleteContactAction => ({
  type: DELETE_CONTACT,
  payload: { id },
});

export { addContact, deleteContact };
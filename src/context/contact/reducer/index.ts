import { State, Action } from '../types';
import { ADD_CONTACT, DELETE_CONTACT } from '../constants';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      const filteredContacts = state.contacts.filter(contact => contact.id !== action.payload.id);
      return {
        contacts: filteredContacts,
      };
    default:
      return state;
  }
}
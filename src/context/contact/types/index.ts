import { ADD_CONTACT, DELETE_CONTACT } from '../constants';

export interface State {
  contacts: Array<Contact>;
}

export type Contact = {
  id: number;
  name: string;
}

export type AddContactAction = {
  type: typeof ADD_CONTACT;
  payload: Contact;
}

export type DeleteContactAction = {
  type: typeof DELETE_CONTACT;
  payload: {
    id: number;
  };
}

export type Action = AddContactAction | DeleteContactAction;

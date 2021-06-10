import React, { useReducer, createContext, Dispatch, ReactNode } from 'react';
import { reducer } from './reducer';
import { State, Action } from './types';

const initialState: State = {
  contacts: []
}

export const ContactContext = createContext<[state: State, dispatch: Dispatch<Action>]>([initialState, () => undefined]);

interface Props {
  children: ReactNode;
}

const ContactContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactContextProvider;

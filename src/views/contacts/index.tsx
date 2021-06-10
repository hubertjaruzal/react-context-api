import ContactsList from './list';
import ContactContextProvider from '../../context/contact';
import { useScreenSize } from '../../utils/hooks/screenSize';

const Contacts = () => {
  const screenSize = useScreenSize();
  return (
    <ContactContextProvider>
      <ContactsList />
      <span style={{ margin: '10px 0' }}>Screen size: {screenSize}</span>
    </ContactContextProvider>
  );
}

export default Contacts;

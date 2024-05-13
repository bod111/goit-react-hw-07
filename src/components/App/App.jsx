import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;

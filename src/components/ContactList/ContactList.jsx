import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  console.log("ContactList ~ contacts:", contacts);

  return (
    <ul className={css.contacts}>
      {contacts.map((contact) => {
        return (
          <li className={css.contact} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}

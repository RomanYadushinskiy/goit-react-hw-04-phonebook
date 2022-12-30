import PropTypes from 'prop-types';
import './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
            
      {contacts.map(( {name, number, id }) => {
        return (
          <li key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  contactDelete: PropTypes.func,
};


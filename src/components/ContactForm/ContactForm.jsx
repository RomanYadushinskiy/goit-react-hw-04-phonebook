// import React, { Component } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
      <form onSubmit={handleSubmit}>
        <label>
          <div>Name</div>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <div>Number</div>
          <input
            type='tel'
            name='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
          />
        </label>
        <button type='submit'>Add contact</button>
      </form>
    );
};


// export class ContactForm extends Component {

//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({[name]: value});
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           <div>Name</div>
//           <input
//             type='text'
//             name='name'
//             value={name}
//             onChange={this.handleInputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label>
//           <div>Number</div>
//           <input
//             type='tel'
//             name='number'
//             value={number}
//             onChange={this.handleInputChange}
//             pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
//             title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//             required
//           />
//         </label>
//         <button type='submit'>Add contact</button>
//       </form>
//     );
//   }
// };

ContactForm.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

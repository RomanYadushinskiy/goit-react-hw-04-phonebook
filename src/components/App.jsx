import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList}  from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }; 

  formSubmitHandler = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.state.contacts.find(item => (item.name.toLowerCase() === contact.name.toLowerCase()
    || item.number === contact.number))
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  getChangeFilter = data => {
    this.setState({ filter: data.target.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return (
      contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ));
  };
         
deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
      const { filter } = this.state;
    return (
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={filter} getChangeFilter={this.getChangeFilter} />
        <ContactList
          contacts={this.filterContacts()}
          onDelete={this.deleteContact} />
      </div>
    );
    
  };
};



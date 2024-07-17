import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsAsync } from '../../Service/Action/contectAction';
import ContactItem from '../ContectItem/ContectItem';
import './ContectList.css';

const ContectList = () => {
  const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contactReducer.contacts);

  useEffect(() => {
    dispatch(getContactsAsync());
  }, [dispatch]);

  return (
    <div className="contact-list-container mt-5">
      <div className="contact-list-header">
        <p className='display-6'>Contacts</p>
        <span>({contacts.length})</span>
      </div>
      <table className="contact-list table table-hover ">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContectList;

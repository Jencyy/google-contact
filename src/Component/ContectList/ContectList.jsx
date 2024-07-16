import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsAsync } from '../../Service/Action/contectAction';
import ContactItem from '../ContectItem/ContectItem';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contactReducer.contacts);

    useEffect(() => {
        dispatch(getContactsAsync());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row">

            <table className="contact-list tablex table-striped">
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
        </div>
    );
};

export default ContactList;

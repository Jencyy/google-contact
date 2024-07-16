import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactAsync } from '../../Service/Action/contectAction';
import { useNavigate } from 'react-router';

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deleteContactAsync(contact.id));
    };

    const handleEdit = () => {
        navigate(`/edit-contact/${contact.id}`, { state: { contact } });
    };

    return (
        <tr className="contact-item actions">
            <td>
                {
                    contact.avatar==''? <p>no img</p> : <img src={contact.avatar} alt={contact.name} className="avatar" />
                }
               
            </td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.address}</td>
            <td>{contact.notes}</td>
            <td>
                <button className="btn-edit" onClick={handleEdit}>Edit</button>
                <button className="btn-delete" onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    );
};

export default ContactItem;

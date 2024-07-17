import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactAsync } from '../../Service/Action/contectAction';
import { useNavigate } from 'react-router';
import './ContectItem.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteContactAsync(contact.id));
  };

    const handleEdit = () => {
        navigate(`/edit/${contact.id}`, { state: { contact } });
    };

  return (
    <tr className="contact-item">
      <td>
        {contact.avatar ? <img src={contact.avatar} alt={contact.name} className="avatar" /> : <p>No image</p>}
      </td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.address}</td>
      <td>{contact.notes}</td>
      <td>
                <FaEdit className="icon-edit " onClick={handleEdit} />
        <FaTrash className="icon-delete" onClick={handleDelete} />
      </td>
    </tr>
  );
};

export default ContactItem;

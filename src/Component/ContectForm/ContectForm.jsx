import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactAsync, uploadImg } from '../../Service/Action/contectAction';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({ existingContact }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [contact, setContact] = useState(existingContact || {
        avatar: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: ''
    });
    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleImg = async (e) => {
        const file = e.target.files[0];
        setUploading(true);
        try {
            const url = await dispatch(uploadImg(file));
            setContact(prevContact => ({ ...prevContact, avatar: url }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
        setUploading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContactAsync(contact));
        navigate('/');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="avatar" className="form-label">Avatar</label>
                            <input type="file" className="form-control" id="avatar" aria-describedby="avatarHelp" onChange={handleImg} />
                            <div id="avatarHelp" className="form-text">Upload an image for your avatar.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={contact.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={contact.email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="phone" name="phone" onChange={handleChange} value={contact.phone} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea className="form-control" id="address" rows="3" name="address" onChange={handleChange} value={contact.address}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="notes" className="form-label">Notes</label>
                            <textarea className="form-control" id="notes" rows="3" name="notes" onChange={handleChange} value={contact.notes}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={uploading}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

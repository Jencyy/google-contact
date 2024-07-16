import React from 'react';
import './App.css'
import Header from './Component/Header/Header';
import ContactForm from './Component/ContectForm/ContectForm';
import { Route, Routes } from 'react-router';
import ContactList from './Component/ContectList/ContectList';
import ContactFormEdit from './Component/ContectFormEdit/ContectFormEdit';


const App = () => {
    return (<>
    
        <Header />
        <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/create" element={<ContactForm />} />
            <Route path="/edit-contact/:id" element={<ContactFormEdit />} />
            {/* <Route path="/edit/:id" element={<EditForm />} /> */}
        </Routes>
    </>
    );
};

export default App;

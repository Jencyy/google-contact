
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/SideBar/Sidebar';
import ContactList from './Component/ContectList/ContectList';
import ContactFormEdit from './Component/ContectFormEdit/ContectFormEdit';
import ContactForm from './Component/ContectForm/ContectForm';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className="app">
                <Header toggleSidebar={toggleSidebar} />
                <div className="app-body">
                    <Sidebar isOpen={sidebarOpen} />
                    <main className={`app-main ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                        <Routes>
                            <Route path="/" element={<ContactList />} />
                            <Route path="/create" element={<ContactForm />} />
                            <Route path="/edit/:id" element={<ContactFormEdit />} />
                     
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    );
}

export default App;

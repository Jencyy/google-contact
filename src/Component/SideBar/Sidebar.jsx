import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faHistory, faUsers, faTools, faDownload, faTrash, faTag } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
    return (
        <Nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <Nav.Item>
                <Nav.Link as={Link} to="/create" className="sidebar-link">
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Create Contact
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/" className="sidebar-link">
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    Contacts
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/frequent" className="sidebar-link">
                    <FontAwesomeIcon icon={faHistory} className="me-2" />
                    Frequent
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/other" className="sidebar-link">
                    <FontAwesomeIcon icon={faUsers} className="me-2" />
                    Other Contacts
                </Nav.Link>
            </Nav.Item>
            <div className="sidebar-section">
                <Nav.Item>
                    <Nav.Link as={Link} to="/merge" className="sidebar-link">
                        <FontAwesomeIcon icon={faTools} className="me-2" />
                        Merge and Fix
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/import" className="sidebar-link">
                        <FontAwesomeIcon icon={faDownload} className="me-2" />
                        Import
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/bin" className="sidebar-link">
                        <FontAwesomeIcon icon={faTrash} className="me-2" />
                        Bin
                    </Nav.Link>
                </Nav.Item>
            </div>
            <div className="sidebar-section">
                <Nav.Item>
                    <Nav.Link as={Link} to="/labels" className="sidebar-link">
                        <FontAwesomeIcon icon={faTag} className="me-2" />
                        Labels
                    </Nav.Link>
                </Nav.Item>
            </div>
        </Nav>
    );
};

export default Sidebar;

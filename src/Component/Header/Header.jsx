// import React from 'react';
// import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';

// const Header = ({ toggleSidebar }) => {
//   return (
//     <Navbar bg="light" expand="lg" className="header-navbar fixed-top">
//       <Button variant="outline-primary" className="ms-2" onClick={toggleSidebar}>
//         <FaBars />
//       </Button>
//       <Navbar.Brand as={Link} to="/" className="ms-4">Contacts</Navbar.Brand>
//       <Form className="d-flex ms-auto me-4">
//         <FormControl
//           type="search"
//           placeholder="Search"
//           className="me-2"
//           aria-label="Search"
//         /> 
//         <Button variant="outline-success">Search</Button>
//       </Form>
//     </Navbar>
//   );
// };

// export default Header;
import React from 'react'
import { Button, Row } from 'react-bootstrap';
import { FiMenu } from "react-icons/fi";

import { IoSearch } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoApps } from "react-icons/io5";

import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';



function Header({ toggleSidebar }) {

  const Navigate = useNavigate()

  return (
    <>

      <div className=' header-navbar fixed-top bg-light'>
        <Row>
          <div className='d-flex align-items-center justify-content-between '>
            <div className='d-flex align-items-center px-2'>
              <div className='p-3'>
                <Button variant="outline-primary" className="ms-2" onClick={toggleSidebar}>
                  <FaBars />
                </Button>
              </div>
              <div className='Logo-user d-flex align-items-center'>
                <img src='https://www.gstatic.com/images/branding/product/2x/contacts_2022_48dp.png' alt="logoimg" height={40} />
                <span className='fs-4 px-2'>Contacts</span>
              </div>

            </div>


            <div className='w-50 bg-serach py-1 rounded-2 px-0'>
              <div className='w-50 bg-serach rounded-2'>
                <form action="#" className='d-flex align-items-center'>
                  <div className='px-2'>
                    <IoSearch className='fs-4' />
                  </div>
                  <div className='px-2 w-100' >
                    <input type="text" className='w-100 border-0 py-2 bg-serach' placeholder='Search...' />
                  </div>
                </form>
              </div>
            </div>

            <div>

              <div className=''>
                <button className='border-0 bg-header fs-4 p-2 bg-white'>
                  <MdHelpOutline />
                </button>
                <button className='border-0 bg-header fs-4   p-2 bg-white'>
                  <IoSettingsOutline />
                </button>
                <button className='border-0 bg-header fs-4  p-2 bg-white'>
                  <IoApps />
                </button>


              </div>

            </div>

          </div>
        </Row>
      </div>

    </>
  )
}

export default Header

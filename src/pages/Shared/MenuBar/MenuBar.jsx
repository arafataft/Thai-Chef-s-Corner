/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const MenuBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar className='container p-2' expand='sm'>
        <Navbar.Brand>
          <Link to='/' className='mx-3 text-black text-decoration-none fw-bolder'>
            Thai Chef Recipe
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <Link
              to='/'
              className={`mx-3 text-decoration-none ${isActiveLink('/') ? 'fw-bold' : ''}`}>
              Home
            </Link>

            <Link
              to='/blog'
              className={`mx-3 text-decoration-none ${isActiveLink('/blog') ? 'fw-bold' : ''}`}>
              Blog
            </Link>
          </Nav>
          {user ? (
            <div className='d-flex'>
              <div data-toggle='tooltip' title={user.displayName}>
                <Image src='https://picsum.photos/200' roundedCircle height={25} />
              </div>
              <Button onClick={handleLogout} variant='primary' className='ms-1'>
                Logout
              </Button>
            </div>
          ) : (
            <Link to='/login'>
              <Button variant='primary'>Login</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

  function isActiveLink(path) {
    return location.pathname === path;
  }
};

export default MenuBar;

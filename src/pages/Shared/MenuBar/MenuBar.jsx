/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div>
            <Navbar className='container p-2' expand="sm">
                <Navbar.Brand ><Link to="/" className="mx-3 text-black text-decoration-none">Thai Chef Recipe</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/" className="mx-3 text-decoration-none">Home</Link>
                        <Link to='/blog' className="mx-3 text-decoration-none">Blog</Link>
                    </Nav>
                    <div data-toggle='tooltip' title='hhhhhh'><Image src='https://picsum.photos/200' roundedCircle height={25} /></div>
                    <Button variant="primary">Login</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MenuBar;
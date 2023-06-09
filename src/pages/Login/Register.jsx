/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [reset,setReset]=useState();
    const [Error,setError]=useState(null);
    const Navigate=useNavigate();

    
    // handle the form submission when user clicks the Register button
    const handleRegister = event => {
        
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // check if the password is at least 6 characters long
        if (password.length < 6) {
            setError('Password should be at least 6 characters long');
            return;
        }

        // call the createUser function with the user's email, password, name, and photo
        createUser(email, password,name,photo)
            .then(() => {
                alert('Registration successful! Please Login');
                setError('');
                Navigate('/login');
            })
            .catch(error => {
                setError(error.code);
            })
            setReset(form.reset());
    }

    // define a function to reset the form
    const reform=()=>reset;
    

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>

                    
                <Button onClick={reform} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-danger">
                    {setError&&<p>{Error}</p>}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;
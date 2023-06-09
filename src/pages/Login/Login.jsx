/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const provider1 = new GithubAuthProvider();
    const [Error, setError] = useState(null);


    // Handle login with Google
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                navigate(from);
                setError(null);
            })
            .catch(error => console.error(error.message))
    }
    // Handle login with GitHub
    const handleGitHubLogin = () => {
        signInWithPopup(auth, provider1)
            .then(() => {
                navigate(from);
                setError(null);
            })
            .catch(error => console.error(error.message))
    }
    // hooks
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    // Handle login
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from);
                setError('')
            })
            .catch(error => {
                if (error.code === "auth/user-not-found") {
                    setError("User not found");
                } else if (error.code === "auth/wrong-password") {
                    setError("Invalid password");
                } else {
                    setError(error.message);
                }
            })
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>

                <Form.Text className="text-danger">
                    {setError && <p>{Error}</p>}
                </Form.Text>
            </Form>
            <Button onClick={handleGoogleLogin} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button onClick={handleGitHubLogin} variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
        </Container>
    );
};

export default Login;
import React, {Component, Fragment, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {Button, Form} from "react-bootstrap";
function ForgotPassword(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const handlePasswordReset = async (e) => {
    e.preventDefault();
        try {
            const auth = getAuth();
            console.log(auth,email);
            await sendPasswordResetEmail(auth, email) .then(() => {
                console.log('Password reset email sent successfully')
                navigate('/login')
            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });


        } catch (error) {

        }
    }
    return (
            <div>
                <Form className="mt-4 container p-3 mx-auto shadow-lg d-flex flex-column border border-3" style={{ maxWidth: '450px' }} onSubmit={handlePasswordReset}>
                    <h1 className="text-center">Forgot Password</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Write your email ..." onChange={e => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Button className="text-center" variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </div>
        )
}
export default ForgotPassword;

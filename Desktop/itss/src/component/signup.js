import { useState } from "react";
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [mess, setMess] = useState('');
    const [confirm, setConfirm] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    //handle sign up firebase
    const AuthSignIn = async (e) => {
        e.preventDefault();
        //check pass work is match
        if (pass !== confirm) {
            setMess('Password do not match !');
            setShow(true);
            return;
        }
        try {
            await auth.createUserWithEmailAndPassword(email, pass);
            await auth.currentUser.updateProfile({
                displayName: name
            })
            setMess('Sign up success !');
            navigate('/dashboard');
        }
        catch (err) {
            setMess('Failed to sign up !');
        }
        setShow(true);
    }
    return (
        <div>
            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="text-center">{mess}</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Form className="mt-4 container p-3 mx-auto shadow-lg d-flex flex-column border border-3" style={{ maxWidth: '450px' }} onSubmit={AuthSignIn}>
                <h1 className="text-center">Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" placeholder="Write your name ..." onChange={e => setName(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Write your email ..." onChange={e => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Write your password ..." onChange={e => setPass(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Confirm password ..." onChange={e => setConfirm(e.target.value)} required />
                </Form.Group>
                <Button className="text-center" variant="primary" type="submit">
                    Sign up
                </Button>
                <p className="text-center">
                    Have account? <Link to='/login'>Log in</Link>
                </p>
            </Form>
        </div>
    );
}
export default SignUp;

import { useEffect, useState } from "react";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard(){
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        //Check user is logined
        auth.onAuthStateChanged((user)=>{
            if(user!=null){
                setName(user.displayName);
                setMail(user.email);
            }
            else{
                navigate('/login');
            }
        })
    })
    //handle sign out event
    const LogOut = async()=>{
        await auth.signOut();
    }
    return (
        <div>
            <Card className="text-center shadow-lg m-auto mt-5" style={{maxWidth:'500px'}}>
                <Card.Header>Dashboard</Card.Header>
                <Card.Body>
                    <Card.Title>Hello, {name}. </Card.Title>
                    <Card.Text>
                        Email: {mail}
                    </Card.Text>
                </Card.Body>
                <Button onClick={LogOut} className="w-50 m-auto mb-2" variant="secondary">Log Out</Button>
                <Card.Footer></Card.Footer>
            </Card>
        </div>
    );
}
export default Dashboard;

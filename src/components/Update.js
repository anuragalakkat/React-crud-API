import React, { useState, useEffect} from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [name, setBookName] = useState('');


useEffect(() => {
        setID(localStorage.getItem('ID'));
        setBookName(localStorage.getItem('Book Name'));
        
}, []);

const [id, setID] = useState(null);

const updateAPIData = () => {
    axios.put(`http://localhost:5000/api/books/${id}`, 
    {
         name
    })
}



    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Enter the Book Name</label>
                    <input placeholder='Book Name' value={name} onChange={(e) => setBookName(e.target.value)}/>
                </Form.Field>
               
                <Button onClick={updateAPIData} type='submit'>Update</Button>
            </Form>
        </div>
    )
}
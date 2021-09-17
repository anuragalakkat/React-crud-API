import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {
    const [name, setBookName] = useState('');

    const postData = () => {
        axios.post("http://localhost:5000/api/books/", {
            name
        })
    }
        
    return (
        <div>
  <Form className="create-form">
    <Form.Field>
      <label>Book Name</label>
      <input placeholder='Enter the book name here' onChange={(e) => setBookName(e.target.value)}/>
    </Form.Field>
    
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
  </div>
)
}
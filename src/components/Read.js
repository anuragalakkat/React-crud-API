import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Read() {

    const [APIData, setAPIData] = useState([]);

    
useEffect(() => {
    axios.get("http://localhost:5000/api/books")
    .then((response) => {
        setAPIData(response.data);
    })
}, [])

const setData = (data) => {
    let { id, name } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Book Name", name);
 }

 const onDelete = (id) => {
    axios.delete(`http://localhost:5000/api/books/${id}`)
    .then(() => {
        getData();
    })
}

const getData = () => {
    axios.get(`http://localhost:5000/api/books`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}




    return (
        <div>
        <Table singleLine>
                <Table.Header>
                    <Table.Row> 
                        <Table.HeaderCell>Book Name</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>

                    
                </Table.Header>
                
                    
                <Table.Body>
                {APIData.map((data) => {
                return (
                    <Table.Row>
                        <Table.Cell>{data.name}</Table.Cell>

                        <Link to='/update'>
                        <Table.Cell> 
                        <button onClick={() => setData(data)}>Update</button>
                        </Table.Cell>
                        </Link>

                        <Table.Cell>
                        <button onClick={() => onDelete(data.id)}>Delete</button>
                        </Table.Cell>

                    </Table.Row>
                    )})}
                </Table.Body>
                
            </Table>
        </div>
    )
}
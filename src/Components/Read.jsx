import React,{useEffect,useState} from 'react';
import { Table,Button } from 'semantic-ui-react'
import axios from 'axios';
import {Link} from 'react-router-dom'
   
// const baseURL="https://660a3bc60f324a9a288461b3.mockapi.io/fakeData"
const setData=(data)=>{          //creating ids for updating the data
    let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
}

export default function Read() {
    const[APIDtata,setAPIData]=useState([]);    //array for storing incoming data,APIData state to store incoming data
    useEffect(()=>{      //need data when applicaton loads so using usestate
            axios.get(`https://660a3bc60f324a9a288461b3.mockapi.io/fakeData`)  //send get request to the API
              .then((response)=>{      //.then() callback to getback all of the requested data
                setAPIData(response.data);
              })
    },[])

    const onDelete=(id)=>{
        axios.delete(`https://660a3bc60f324a9a288461b3.mockapi.io/fakeData/${id}`)
          .then(()=>{
           getData();
          })
    }
    const getData=()=>{
        axios.get(`https://660a3bc60f324a9a288461b3.mockapi.io/fakeData`)
          .then((getData)=>{
            setAPIData(getData.data);
          })
    }
    return (
        <div className='main'style={{ marginTop: 20 }}>
            <Table singleLine>
                <Table.Header >
                    <Table.Row className="create-form">
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                     
                    </Table.Row>
                </Table.Header>
                   
                <Table.Body>
                    {APIDtata.map((data)=>{  
                        return(
                        <Table.Row>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell> 
                    <Link to ='/update'>     {/* when we click the button it should be redirect to update page so we are wraping the table cell to the link  */ }
                            <Table.Cell>
                                <Button onClick={()=>setData(data)}>Update</Button>  {/* setData for */ }
                            </Table.Cell>
                            <Table.Cell>
                                <Button onClick={()=>onDelete(data.id)}>Delete</Button>
                            </Table.Cell>
                            </Link>                   
                    </Table.Row>
                    
                        )
                    })}
                </Table.Body>
            </Table>

        </div>
    )
}
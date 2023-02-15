import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {

    //const [id,setId]=useState('')
    const [empname,setEmpname]=useState('')
    const [age,setAge]=useState('')
    const [designation,setDesignation]=useState('')
    const [salary,setSalary]=useState(0)

    let history=useNavigate()
    
    const handleData=(e)=>{
        e.preventDefault();
        let ids = uuid()
        console.log(ids);

        let uniqueId=ids.slice(0,8)
        console.log(uniqueId);

        Employee.push({ // add data to employee array
            id:uniqueId,
            empname:empname,
            age:age,
            designation:designation,
            salary:salary

        })
        history('/')

    }

  return (
    <div>
        <h1 className='text-center mt-4 mb-4 '>Add Employee Details</h1>
    <Row className='m-0'>
        <Col lg={4} md={6} className='p-0'>
            <img className='mt-5 p-5' alt='employee'  style={{width:'30em'}} src='https://cdn-icons-png.flaticon.com/512/609/609211.png'/>
        </Col>

        <Col lg={8} md={6} className='p-0'>
        <Form className='border border-4 p-4 mt-4 me-4 ms-5 mb-3'>
            <h4 className='text-center  text-primary'>Add your details ⇩</h4>

            <Form.Group className="mb-3">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control  type="text" placeholder="Enter employee name"
                 //value={empname} 
                 onChange={(e)=>setEmpname(e.target.value)} required 
                 />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter employee name" 
                //value={age}
                 onChange={(e)=>setAge(e.target.value)} required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control type="text" placeholder="Enter your designation"
                 //value={designation} 
                 onChange={(e)=>setDesignation(e.target.value)} required
                 />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Form.Control type="text" placeholder="Enter your salary"
                 //value={salary} 
                 onChange={(e)=>setSalary(e.target.value)} required
                 />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I Agree" />
            </Form.Group>
            <Button onClick={(e)=>handleData(e)} style={{padding:'.5em 1em'}} variant="primary" type="submit">
                Add
            </Button>
        </Form>
        </Col>
    </Row>
    </div>
  )
}

export default Add
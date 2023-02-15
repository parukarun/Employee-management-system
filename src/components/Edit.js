import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {

    const [id,setId]=useState('')
    const [empname,setEmpname]=useState('')
    const [age,setAge]=useState('')
    const [designation,setDesignation]=useState('')
    const [salary,setSalary]=useState(0)

    useEffect(()=>{
        setId(localStorage.getItem("ID"));
        setEmpname(localStorage.getItem("NAME"));
        setAge(localStorage.getItem("AGE"));
        setDesignation(localStorage.getItem("DESIGNATION"));
        setSalary(JSON.parse(localStorage.getItem("SALARY")));

    },[])

    console.log(id);
    console.log(empname);

    //idex value of array of employee
    var index=Employee.map(item=>item.id).indexOf(id)
    console.log(index);

    let history=useNavigate()

    const handleUpdate=(e)=>{
        e.preventDefault()
        console.log(e); //event
        let emp=Employee[index]
        console.log(emp); //data

        emp.empname=empname
        emp.age=age
        emp.designation=designation
        emp.salary=salary

        console.log(emp);
        history('/')
        
    }

  return (
    <>
    <h1 className='text-center mt-4 mb-4 '>Update Employee Details</h1>
    <Row className='m-0'>
        <Col lg={4} md={6} className='p-0'>
            <img className='mt-5 p-5' alt='employee'  style={{width:'30em'}} src='https://cdn-icons-png.flaticon.com/512/609/609211.png'/>
        </Col>

        <Col lg={8} md={6} className='p-0'>
        <Form className='border border-4 p-4 mt-4 me-4 ms-5 mb-3'>
            <h4 className='text-center  text-primary'>Update your details ⇩</h4>

            <Form.Group className="mb-3">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control  type="text" placeholder="Enter employee name" value={empname} onChange={(e)=>setEmpname(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter employee name" value={age} onChange={(e)=>setAge(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control type="text" placeholder="Enter your designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Form.Control type="text" placeholder="Enter your salary" value={salary} onChange={(e)=>setSalary(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I Agree" />
            </Form.Group>
            <Button onClick={(e)=>handleUpdate(e)} style={{padding:'.5em 1em'}} variant="primary" type="submit">
                Update
            </Button>
        </Form>
        </Col>
    </Row>
    </>
  )
}

export default Edit
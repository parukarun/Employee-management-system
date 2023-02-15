import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import {FaEdit } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import {FaTrashAlt,FaUserPlus} from "react-icons/fa"
import { Link,useNavigate } from 'react-router-dom';

function Home() {

    const history = useNavigate();
    const handleDelete=(id)=>{
        
        alert('Are you sure you want to delete')
        console.log(Employee.map((item)=>item.id).indexOf(id)); // index of array
        let index = Employee.map((item)=>item.id).indexOf(id)
        console.log(index);
        Employee.splice(index,1)
        console.log(Employee);
        history('/')
    }

    const handleEdit=(id,empname,age,designation,salary)=>{

        localStorage.setItem("ID",id);
        localStorage.setItem("NAME",empname);
        localStorage.setItem("AGE",age);
        localStorage.setItem("DESIGNATION",designation);
        localStorage.setItem("SALARY",JSON.stringify(salary));
        
    }
  return (
    <div style={{paddingLeft:'5em',paddingRight:'5em',paddingTop:'3em'}} >
        <h1 className='text-center mb-4'>Employee Management System</h1>
        <p className='ps-4 pe-4 mb-4'>An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions.</p>
        <Link to={'/add'}>
            <Button  style={{padding:'.5em 1em'}}  className='btn btn-success mb-3'>Add<FaUserPlus/></Button>
        </Link>
        
        <Table striped bordered hover variant="primary" style={{ border:'2px solid',padding:'1em'}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>User Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th style={{width:'9.4em'}}>Action</th>
        </tr>
      </thead>
      <tbody>
       {
       
         Employee && Employee.length>0 ?
         
         Employee.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.empname}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>
                    <Link to={'/edit'}>
                    <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)} style={{padding:'.5em 1em'}}><FaEdit/></Button>
                    </Link>&nbsp; &nbsp; 
                    
                    <Button onClick={()=>handleDelete(item.id)} style={{padding:'.5em 1em'}} className='btn btn-danger'><FaTrashAlt/></Button>
                    
                </td>
            </tr>
         ))
         :"No data available"
       }
       
        
      </tbody>
    </Table>
    </div>
  )
}

export default Home
import React, { useState } from 'react'

import Form from './Form';
import Formdetail from './Formdetail';
import '../Form.css';

const Index = () => {
    const [tel,setTel]=useState()
    const [name,setName]=useState()
    const [age,setAge]=useState()
    const [year,setYear]=useState()
    const [email,setEmail]=useState()
        
    const handleSubmit=(e)=>{
        e.preventDefault()
        setName(e.target.name.value)
        setTel(e.target.tel.value)
        setAge(e.target.age.value)
        setYear(e.target.year.value)
        setEmail(e.target.email.value)
    };

  return (
    <div className='container'>
    <Form handleSubmit={handleSubmit}/>
    <Formdetail name={name} tel={tel} age={age} year={year} email={email}/>
    </div>
  )
};

export default Index
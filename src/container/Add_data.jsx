import React, { useState } from 'react'
import "./Add_data.css"
import axios from 'axios'
const Add_data = () => {
  const [id,setId]=useState("")
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [number,setNumber]=useState("")
  const [city,setCity]=useState("")
  const [post,setPost]=useState("")
  const header={"Access-Control-Allow-Origin":"*"};
  const handlerOnClick=()=>{
              axios.post('https://678b2dd51a6b89b27a29b886.mockapi.io/Employee_management_app',{
                Employee_Id:id,
                Name:name,
                Email:email,
                Number:number,
                City:city,
                Employee_Post:post,
                header
              });
            }
  
  
  return (
    <div className='main_container'>
              <h1 className='heading'>Add Your Employee Data </h1>
            <div className="field_box">
            <div className="field_container">
                      <h4> ID :</h4>
                    <input type='text' className='Field' 
                    placeholder='Enter employee Id' onChange={(e)=>{setId(e.target.value)}}/>
                  </div>
                  <div className="field_container">
                      <h4> Name :</h4>
                    <input type='text' className='Field'
                     placeholder='Enter employee Name' onChange={(e)=>{setName(e.target.value)}}/>
                  </div>
                  <div className="field_container">
                      <h4> Email :</h4>
                    <input type='email' className='Field' 
                    placeholder='Enter employee Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                  </div>
                  <div className="field_container">
                      <h4> Mobile no:</h4>
                    <input type='Number' className='Field' 
                    placeholder='Enter employee Mobile no'onChange={(e)=>{setNumber(e.target.value)}}/>
                  </div>
                  <div className="field_container">
                      <h4> City :</h4>
                    <input type='text' className='Field' 
                    placeholder='Enter employee City' onChange={(e)=>{setCity(e.target.value)}}/>
                  </div>
                  <div className="field_container">
                      <h4> Post :</h4>
                      <select className='Field' onChange={(e)=>{setPost(e.target.value)}}>
                      <option>Select Your Employee Post</option>
                      <option value="CEO">CEO </option>
                      <option value="Manager">Manager</option>
                      <option value="HR">HR</option>
                      <option value="Employee">Employee</option>
                      </select>
                  </div>
                  <div className="btn_box">
                    <button className='btn' onClick={handlerOnClick}>Add Data </button>

                  </div>
            </div>
    </div>
  )
}

export default Add_data


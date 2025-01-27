import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Edite_data = () => {
    const [id,setId]=useState()
const [userId,setUserId]=useState()
const [userName,setUserName]=useState()
const [userEmail,setUserEmail]=useState()
const [userNumber,setUserNumber]=useState()
const [userCity,setUserCity]=useState()
const [userPost,setUserPost]=useState()
useEffect(()=>{
    setUserId(localStorage.getItem("Id"))
    setUserName(localStorage.getItem("Name"))
    setUserEmail(localStorage.getItem("Email"))
    setUserNumber(localStorage.getItem("Number"))
    setUserCity(localStorage.getItem("City"))
    setUserPost(localStorage.getItem("Post"))
    setId(localStorage.getItem("id"))

},[])   
const UpDateHeandler=()=>{
            console.log(userId)
        axios.put(`https://678b2dd51a6b89b27a29b886.mockapi.io/Employee_management_app/${id}`,{
            Employee_Id:userId,
            Name:userName,
             Email:userEmail,
             Number:userNumber,
             City:userCity,
             Employee_Post:userPost
           }
        )       
} 
return (
    <div className='main_container'>
       <h1 className='heading'>Update Your Employee Data </h1>
            <div className="field_box">
            <div className="field_container">
                      <h4> ID :</h4>
                    <input type='text' className='Field' 
                    placeholder='Enter employee Id' value={userId} 
                    onChange={(e)=>setUserId(e.target.value)} />
                    
                  </div>
                  <div className="field_container">
                      <h4> Name :</h4>
                    <input type='text' className='Field'
                     placeholder='Enter employee Name'  value={userName}
                     onChange={(e)=>setUserName(e.target.value)} />
                  </div>
                  <div className="field_container">
                      <h4> Email :</h4>
                    <input type='email' className='Field' 
                    placeholder='Enter employee Email' value={userEmail}
                    onChange={(e)=>setUserEmail(e.target.value)}  />
                  </div>
                  <div className="field_container">
                      <h4> Mobile no:</h4>
                    <input type='Number' className='Field' 
                    placeholder='Enter employee Mobile no' value={userNumber}
                    onChange={(e)=>setUserNumber(e.target.value)} />
                  </div>
                  <div className="field_container">
                      <h4> City :</h4>
                    <input type='text' className='Field' 
                    placeholder='Enter employee City' value={userCity}
                    onChange={(e)=>setUserCity(e.target.value)} />
                  </div>
                  <div className="field_container">
                      <h4> Post :</h4>
                      <select className='Field' onChange={(e)=>{setUserPost(e.target.value)}}>
                      <option>Select Your Employee Post</option>
                      <option value="CEO">CEO </option>
                      <option value="Manager">Manager</option>
                      <option value="HR">HR</option>
                      <option value="Employee">Employee</option>
                      </select>
                  </div>
                  <div className="btn_box">
                    <button className='btn' onClick={UpDateHeandler()}>Update Data </button>
                  </div>
            </div>
    </div>
  )
}

export default Edite_data

import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router'

const UpData_Data = () => {
    const [data,setData]=useState([])
    function FindData(){
        axios.get('https://678b2dd51a6b89b27a29b886.mockapi.io/Employee_management_app')
        .then((res)=>{
              setData(res.data)
        })
      
    }
      useEffect(()=>{
        FindData()
      },[data])
      const DeleteBtnHeadler=(id)=>{
        axios.delete(`https://678b2dd51a6b89b27a29b886.mockapi.io/Employee_management_app/${id}`)
        
      }
      const onClickHeadler=(Employee_Id,Name,Email,Number,City,Employee_Post,id)=>{
            localStorage.setItem("Id" ,Employee_Id)
            localStorage.setItem("Name",Name)
            localStorage.setItem("Email",Email)
            localStorage.setItem("Number",Number)
            localStorage.setItem("City",City)
            localStorage.setItem("Post",Employee_Post)
            localStorage.setItem("id",id)

      }
  return (
    <div>
       <h1 className='heading-box'>Updata Employee Data </h1>

          <table className='main_table'>
          <thead>
                  <tr>
                    <th className='th_box'> Employee_Id </th>
                    <th className='th_box'> Name </th>
                    <th className='th_box'> Email </th>
                    <th className='th_box'> Number </th>
                    <th className='th_box'> City </th>
                    <th className='th_box'> Employee_Post </th>
                   
                  </tr>
                 </thead>   
                 {
                data.map((item)=>{
                  return(
                    <>
                    <tbody>
                      <tr>
                        <th className='tdBox'>{item.Employee_Id}</th>
                        <th className='tdBox'>{item.Name}</th>
                        <th className='tdBox'>{item.Email}</th>
                        <th className='tdBox'>{item.Number}</th>
                        <th className='tdBox'>{item.City}</th>
                        <th className='tdBox'>{item.Employee_Post}</th>
                        <button className='DBtn' onClick={()=>DeleteBtnHeadler(item.id)}>Delete</button>
                       <Link to="/EditeData"> <button className='UBtn'
                        onClick={()=>onClickHeadler(item.Employee_Id,item.Name,item.Email,
                        item.Number,item.City,item.Employee_Post,item.id)}>Update</button></Link>
                       
                      </tr>
                    </tbody>
                    </>
                  )
                })
             }              
          </table>
    </div>
  )
}

export default UpData_Data


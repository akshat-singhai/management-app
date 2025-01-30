import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Show_data.css'
const show_data = () => {
  const [data,setData]=useState([]);
    const getData=()=>{
    axios.get('https://678b2dd51a6b89b27a29b886.mockapi.io/Employee_management_app')
    .then((res)=>{
      setData(res.data) 
 
    });
   
  } 
  useEffect(()=>{
    getData()
  },[])
 
  return (
    <div className='diBox'>
       <h1 className='heading-box'>Current Employee Data  List</h1>
          <table className='main_table'>
                 <thead>
                  <tr >
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
                      <tr key={item.id}>             
                        <th className='tdBox'>{item.Employee_Id}</th>
                        <th className='tdBox'>{item.Name}</th>
                        <th className='tdBox'>{item.Email}</th>
                        <th className='tdBox'>{item.Number}</th>
                        <th className='tdBox'>{item.City}</th>
                        <th className='tdBox'>{item.Employee_Post}</th>
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

export default show_data


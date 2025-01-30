import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

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
      },[])
      const DeleteBtnHeadler=(id)=>{
        axios.delete(`https://678b2dd51a6b89b27a29b886.mockapi.io/Employee_management_app/${id}`)
        toast.error("Data is Delete",{
          theme: "colored"
        });
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
      <ToastContainer />
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
                      <tr key={item.id}>
                        <td className='tdBox'>{item.Employee_Id}</td>
                        <td className='tdBox'>{item.Name}</td>
                        <td className='tdBox'>{item.Email}</td>
                        <td className='tdBox'>{item.Number}</td>
                        <td className='tdBox'>{item.City}</td>
                        <td className='tdBox'>{item.Employee_Post}</td>
                        <td className='btnBox'><button className='DBtn' onClick={()=>DeleteBtnHeadler(item.id)}>Delete</button> 
                        <Link to="/EditeData"> <button className='UBtn'
                        onClick={()=>onClickHeadler(item.Employee_Id,item.Name,item.Email,
                        item.Number,item.City,item.Employee_Post,item.id)}>Update</button></Link></td> 
                       
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


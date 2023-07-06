import React, { useEffect } from 'react'
import { buy_course } from '../../../call_apis'
import { message } from 'antd'
const user = localStorage.getItem('user')
const parse = JSON.parse(user)
const course_id = window.location.pathname.split('/')[2]
const BuyCourse = ()=>{

 const enroll = async()=>{
   await buy_course(course_id,parse.user_id)
    .then(res=>{
       console.log("Enrolled Successfully")
    })
    .catch(err=>{
        console.log(err.message)
       

    })
  }
useEffect(()=>{
    enroll()
   
},[])

return <div>
    <center style={{marginTop:120}}>
        <h1>You have Successfully Enrolled Course</h1>
        <button onClick={()=>{
        window.location = "http://localhost:3000/course/"+course_id

        }} style={{borderWidth:1,borderColor:'#50C878',padding:15,borderRadius:5,justifyContent:'center',alignItems:'center',width:200,backgroundColor:'#50C878',marginTop:50}}>
            <b style={{color:'white'}}>That's Great</b>
        </button>
    </center>
</div>
}
export default BuyCourse
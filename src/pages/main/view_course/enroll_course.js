import CheckoutForm from "./checkoutForm";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { base_url } from "../../../base_url";
import { useEffect,useState } from "react";
import { message } from "antd";
import { get_main_website_view_course } from "../../../call_apis";
import { useRef } from "react";
const user = localStorage.getItem('user');
const parse = JSON.parse(user)
const stripePromise = loadStripe('pk_test_51Li9vSLrpfnp4zWJSER4O48PXEo5KbbN0a9Re1pAtbUnwkq0Z326X4lR3vx0iH0Edy064XgMNS29nyKAqcYIwWNj00mO5ifGxz');
const course_id = window.location.pathname.split('/')[2];


const EnrollCourse = () => {
   
   const [clientSecret,setClientSecret] = useState("")
   const [course_price,setCoursePrice] = useState('')

  const get_course_details = async()=>{
    if(user){
      await get_main_website_view_course(course_id,true,parse.user_id)
      .then(async(res)=>{
        console.log(res.course[0].course_price)

       await setCoursePrice(res.course[0].course_price)
       
      await get_client_secret(res.course[0].course_price)
       
       

      })
      .catch(err=>{
        console.log(err)
      })
    }else{
      await get_main_website_view_course(course_id,false,null)
      .then(async(res)=>{
        console.log(res.course[0].course_price)
       await setCoursePrice(res.course[0].course_price)
        
      await get_client_secret(res.course[0].course_price)
      
        

      })
      .catch(err=>{
        console.log(err)
      })
    }
  
  }
   const get_client_secret =(amount)=>{
    let formData = new FormData()
    formData.append('amount',amount*100)
    fetch(`${base_url}/create-payment-intent`,{
        method:'POST',
        body:formData
    })
    .then(res=>res.json())
    .then((data)=>{
         setClientSecret(data.client_secret)
    })
    }


    useEffect(()=>{
        
        get_course_details()

        
        
        if(!user){
            message.error("Please Login")
            window.location = '/login'
            return
        }
    },[])



    
    return <>
   {course_price? <Elements  stripe={stripePromise} options={ {
        mode: 'payment',
        currency: 'usd',
        amount:course_price*100,
       
        automatic_payment_methods: {
            enabled: true,
        }          
       
      }}>
      <CheckoutForm client_secret={clientSecret} course_id={course_id}/>
    </Elements>:null}
    </>

  }

export default EnrollCourse
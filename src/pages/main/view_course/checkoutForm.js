import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { buy_course } from '../../../call_apis';
import { message } from 'antd';
const user = localStorage.getItem('user')
const parse = JSON.parse(user)

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      
      event.preventDefault();
  
      if (!stripe || !elements) {
     
        return;
      }
      elements.submit()
       await stripe.confirmPayment({
       
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret:props.client_secret,
        
        confirmParams: {
          
            return_url:`http://localhost:3000/buy_course/${props.course_id}`,
        },
      })
      .then((result)=>{
        if (result.error) {
          // Show error to your customer (for example, payment details incomplete)
  
          message.error(result.error.message)
          console.log('error message: ',result.error.message);
        } else {
          console.log("Hello tehre")
        }
      })
  
     
    };
   
  return (
  
   
    <form style={{width:'60%',marginLeft:'12%',marginTop:50}} onSubmit={handleSubmit}>
      <PaymentElement />
      <br />
      <button  disabled={!stripe} className='btn btn-primary'>Submit</button>
    </form>
  

  );
};

export default CheckoutForm;
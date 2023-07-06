import { message } from 'antd';
import React from 'react';
import { login_user, register_user } from '../../../call_apis';

export default class Login extends React.Component {
   state = {
    email: '',
    password: ''
   }


   validate = ()=>{
    const { email, password } = this.state;
    if(email.length<1){
      message.error("Email is required")
      return false
    }

    if(password.length<1){
      message.error("Password is required")
      return false
    }
    return true;
   }


   login = async()=>{
    const validate = this.validate()

    if(validate){
      await login_user(this.state.email,this.state.password)
      .then(res=>{
        if(res.is_loggedin){
          message.success(res.status)
          localStorage.setItem('user',JSON.stringify(res.user))
          window.location = "/"
        }else{
          message.error(res.status)
        }
      })
      .catch(err=>{
        message.error("Something went wrong")
      })
    }
   }
    render(){
        return(
            <section  className="pt-90 pb-120 gray-bg">
            <div className="container">
              <div className="col-lg-7">
                <div className="contact-from mt-30">
                <div className="section-title">
                    
                      <h3>Login</h3>
                    </div>
                  {/* section title */}
                  <div className="main-form pt-45">
                   
                      <div className="row">
                      
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                              onChange={(val)=>this.setState({email:val.target.value})}
                              type="email"
                              placeholder="Email"
                             
                            />
                           
                          </div>
                          {/* singel form */}
                        </div>


                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                              onChange={(val)=>this.setState({password:val.target.value})}
                              
                              type="password"
                              placeholder="Password"
                             
                            />
                           
                          </div>
                          {/* singel form */}
                        </div>
                     

                      


                   
                        <p className="form-message" />
                        <div className="col-md-12">
                          <div className="singel-form">
                            <button onClick={this.login} type="submit" className="main-btn">
                              Login
                            </button>
                          </div>
                          {/* singel form */}
                        </div>

                       

                        <a href='/register' className='ml-3 mt-4'>Don't Have Any Account?Want to Register</a>
                      </div>
                      {/* row */}
                  
                  </div>
                  {/* main form */}
                </div>
                {/*  login from */}
              </div>
            </div>
            {/* container */}
          </section>
        )
    }
}
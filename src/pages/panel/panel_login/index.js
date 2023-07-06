import React from "react";
import { login_to_panel } from "../../../call_apis";
import {message} from 'antd'
const teacher = localStorage.getItem('teacher')
const admin = localStorage.getItem('admin')

export default class PanelLogin extends React.Component{
  state = {
    email:'',
    password:''
  }
  isLoggedin = ()=>{
    if(admin || teacher){
      message.warning("You are already loggedin")
      if(teacher){
        window.location = "/panel/teacher/"
      }else{
        window.location = "/panel/admin/"

      }
    }
  }

  componentDidMount(){
    this.isLoggedin()
  }
  handlePanelLogin = async()=>{

    await login_to_panel(this.state.email,this.state.password)
    .then(res=>{
      if(res.is_logged_in){
        if(res.user.is_admin == 1){
          message.success("Logged in successfully to admin panel")
          localStorage.setItem('admin',JSON.stringify(res.user))
          setTimeout(()=>{
            window.location = "/panel/admin"

          },50)
        }else{
          message.success("Logged in successfully to teacher panel")
          localStorage.setItem('teacher',JSON.stringify(res.user))
          setTimeout(()=>{
            window.location = "/panel/teacher/"

          },50)

        }
      }else{  
        message.error(res.status)
      }
    })
    .catch(err=>{
      console.log(err)
      message.error("Something Went Wrong")
    })
    
  }
    render(){
        return(
            <section  className="pt-90 pb-120 gray-bg">
            <div className="container">
              <div className="col-lg-7">
                <div className="contact-from mt-30">
                <div className="section-title">
                    
                      <h3>Panel Login</h3>
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
                            <button onClick={this.handlePanelLogin} type="submit" className="main-btn">
                              Login
                            </button>
                          </div>
                          {/* singel form */}
                        </div>

                       

                       
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
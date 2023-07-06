import React from 'react'
import SideBar from '../../../../components/panel/admin/sidebar'
import { message } from 'antd'
import { get_admin_details, update_admin_details } from '../../../../call_apis'
const admin = localStorage.getItem('admin')
const parse = JSON.parse(admin)
export default class Account extends React.Component{

  state = {
    email:'',
    name:'',
    password:""
  }
  isLoggedin = ()=>{
    console.log(parse)
    if(!admin){
      message.error("You should be logged as admin to be able to access")
      window.location = "/panel/login"
    }
  }

  get_admin_details = async()=>{
    
    await get_admin_details(parse.panel_userid)
    .then(res=>{
      this.setState({email:res.data.email,name:res.data.name})
    })
    .catch(err=>{
      message.error("Something Went wrong")
    })
      
  }

  UpdateAdmin = async()=>{
   
    if(this.state.name.length<1 || this.state.email.length<1 || this.state.password.length<1){
      message.error("All the fields are required")
      return 
    }
    await update_admin_details(parse.panel_userid,this.state.email,this.state.password,this.state.name)
    .then(res=>{
      if(res.is_updated){
        message.success("Updated Successfully")
      }
    })
    .catch(err=>{
      message.error("Something Went wrong")
    })
  }

  componentDidMount(){
    this.isLoggedin()
    this.get_admin_details()
  }
    render(){
        return (
            <>
            <SideBar />
            <section  className="pt-90 pb-120 gray-bg">
            <div className="container">
              <div className="col-lg-7">
                <div className="contact-from mt-30">
                <div className="section-title">
                    
                      <h3>Account</h3>
                    </div>
                  {/* section title */}
                  <div className="main-form pt-45">
                   
                      <div className="row">
                      
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                              value={this.state.email}
                              type="email"
                              placeholder="Email"
                              onChange={(val)=>this.setState({email:val.target.value})}
                            />
                           
                          </div>
                          {/* singel form */}
                        </div>


                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                              value={this.state.name}
                              onChange={(val)=>this.setState({name:val.target.value})}
                              type="text"
                              placeholder="Name"
                             
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
                            <button onClick={this.UpdateAdmin} type="submit" className="btn btn-primary">
                              Update
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
          </>
        )
    }
}
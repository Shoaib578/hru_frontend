import React from "react";
import SideBar from "../../../../components/panel/teacher/sidebar";
import { message } from "antd";
import { get_teacher_details, update_teacher_account } from "../../../../call_apis";
const teacher = localStorage.getItem('teacher')
const parse = JSON.parse(teacher)
export default class TeacherAccount extends React.Component{

  state = {
    name: '',
    email: '',
    title:'',
    description:'',
    password:''
    
  }

  getTeacherDetails = async()=>{
    await get_teacher_details(parse.panel_userid)
    .then(res=>{
      this.setState({name:res.data.name, email:res.data.email,title:res.data.title,description:res.data.description})
    })
    .catch(err=>{
      message.error("Something Went Wrong")
    })
  }


  UpdateTeacherDeetails = async()=>{
    if(this.state.name.length<1 || this.state.email.length<1 || this.state.password<1){
      message.error("All the fields are required")
      return
    }
    await update_teacher_account(parse.panel_userid,this.state.email,this.state.password,this.state.title,this.state.description,this.state.name)
    .then(res=>{
      if(res.is_updated){
        message.success("Account Updated Successfully")
      }else{
        message.error(res.status)
      }
    })
    .catch(err=>{
      message.error("Something Went Wrong")
    })
  }

    componentDidMount(){
      if(!teacher){
        message.error("You should be logged in as teacher to be able to access")
        window.location = "/panel/login"
      }else{
        this.getTeacherDetails()
      }
    }
    render(){
        return(
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
                              onChange={(val)=>{this.setState({name:val.target.value})}}
                              type="text"
                              value={this.state.name}
                              placeholder="Full Name"
                             
                            />
                           
                          </div>
                          {/* singel form */}
                        </div>


                      <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                              onChange={(val)=>{this.setState({title:val.target.value})}}
                              value={this.state.title}
                              type="text"
                              placeholder="Title"
                             
                            />
                           
                          </div>
                          {/* singel form */}
                        </div>
                      
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                              onChange={(val)=>{this.setState({email:val.target.value})}}
                              value={this.state.email}
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




                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <textarea
                              onChange={(val)=>{this.setState({description:val.target.value})}}
                              
                                value={this.state.description}
                              placeholder="Description..."
                             
                            />
                           
                          </div>
                          {/* singel form */}
                        </div>
                     

                      


                   
                        <p className="form-message" />
                        <div className="col-md-12">
                          <div className="singel-form">
                            <button onClick={this.UpdateTeacherDeetails} type="submit" className="btn btn-primary">
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
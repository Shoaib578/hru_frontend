import { message } from "antd";
import React from "react";
import ReactFileReader from 'react-file-reader';
import { register_user } from "../../../call_apis";
const user = localStorage.getItem('user')
export default class Register extends React.Component {
    state = {
      name:'',
      email:'',
      password:'',
      image:'',
      profile_image:{
            name:'',
            base64:''
        }
    }
    handleChangePicture = (file)=>{
        if(file.fileList){
            this.setState({profile_image:{
                name:file.fileList[0].name,
                base64:file.base64
            },image:file.fileList[0]})

        }
    }

    validate = ()=>{
      if(!this.state.name){
       message.error("Name is required")
        return false
      }
      if(!this.state.email){
        message.error("Email is required")

        return false
      }
      if(!this.state.password){
        message.error("Password is required")

        return false
      }
     
      return true
      
    }

    register = async()=>{
      const validate = this.validate()

      if(validate){
        await register_user(this.state.email,this.state.password,this.state.name)
        .then(res=>{
          if(res.is_registered){
            message.success("Registered successfully.Now you can login")
          }else{
            message.error(res.status)
          }
        })
        .catch(err=>{
          message.error("Something went wrong")
        })
      }
    }
    
    componentDidMount(){
      if(user){
        window.location = "/"
      }
    }
    render(){
        return(
            <section  className="pt-90 pb-120 gray-bg">
            <div className="container">
              <div className="col-lg-7">
                <div className="contact-from mt-30">
                <div className="section-title">
                    
                      <h3>Register</h3>
                    </div>
                  {/* section title */}
                  <div className="main-form pt-45">
                    {/* <center>
                    <ReactFileReader fileTypes={[".png",".jpg",'jpeg']} base64={true} multipleFiles={false} handleFiles={this.handleChangePicture}>

                    <img onClick={this.handleChangePicture}  src={this.state.profile_image.base64?this.state.profile_image.base64:"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} style={{width:130,height:120,borderRadius:'100%',cursor:'pointer'}}/>
                    </ReactFileReader>
                    </center> */}
                    <br />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="singel-form form-group">
                            <input
                              name="name"
                              type="text"
                              placeholder="Full name"
                             onChange={(val)=>{
                              this.setState({name:val.target.value})
                             }}
                            />
                           
                          </div>
                          {/* singel form */}
                        </div>
                        <div className="col-md-6">
                          <div className="singel-form form-group">
                            <input
                              type="email"
                              onChange={(val)=>{
                                this.setState({email:val.target.value})
                               }}
                              placeholder="Email"/>
                          
                          </div>
                          {/* singel form */}
                        </div>
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                               onChange={(val)=>{
                                this.setState({password:val.target.value})
                               }}
                              type="password"
                              placeholder="Password"
                             
                            />
                           
                          </div>
                          {/* singel form */}
                        </div>
                       

                       


                   
                        <p className="form-message" />
                        <div className="col-md-12">
                          <div className="singel-form">
                            <button onClick={this.register} type="submit" className="main-btn">
                              Register
                            </button>
                          </div>
                          {/* singel form */}
                        </div>

                       

                        <a href='/login' className='ml-3 mt-4'>Already Have An Account? Want to Login</a>
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
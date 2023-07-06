import { message } from "antd";
import React from "react";
import ReactFileReader from 'react-file-reader';
import { send_application } from "../../../call_apis";

export default class CareerWithUs extends React.Component{
    state = {
        
        resume:{
          name:'',
          base64:''
        },
        email:'',
        resume_file:""
    }
    handleFileChange = (file)=>{
        if(file.fileList){
            this.setState({resume:{
                name:file.fileList[0].name,
                base64:file.base64
            },resume_file:file.fileList[0]})

        }
    }




    SendApplication = async()=>{
      if(this.state.email.length<1 || this.state.resume_file.length<1){
        message.error("Email and Resume is required")
        return
      }
      await send_application(this.state.email,this.state.resume_file)
      .then(res=>{
        message.success("Application Has Been Sent")
      })
      .catch(err=>{
        message.error("Something Went Wrong")
      })
    }
    render(){
        return (
            <section  className="pt-90 pb-120 gray-bg">
            <div className="container">
              <div className="col-lg-7">
                <div className="contact-from mt-30">
                <div className="section-title">
                    
                      <h3>Career With Us</h3>
                    </div>
                  {/* section title */}
                  <div className="main-form pt-45">
                   
                      <div className="row">
                      
                        


                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                              onChange={(val)=>this.setState({email:val.target.value})}
                              type="email"
                              placeholder="Enter Your Email"
                             
                            />
                           
                          </div>
                          {/* singel form */}
                        </div>
                     

                        <div className="col-md-12" >
                          <div className="singel-form form-group">
                          <ReactFileReader fileTypes={[".pdf",".csv"]} base64={true} multipleFiles={false} handleFiles={this.handleFileChange}>
                         
                         
                            <button type="submit" style={{width:'100%'}} className="main-btn">
                              Choose Your Resume
                            </button>
                        
                       
                        </ReactFileReader>
                          </div>
                          {/* singel form */}
                        </div>

                        {this.state.resume.base64?<iframe style={{width:'100%',height:300}} className="ml-3 mt-4" src={this.state.resume.base64}/>:null}


                   
                        <p className="form-message" />
                        <div className="col-md-12">
                          <div className="singel-form">
                            <button onClick={this.SendApplication} type="submit" className="main-btn">
                              Submit
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
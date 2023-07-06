import { message } from "antd";
import React  from "react";
import { change_password } from "../../../call_apis";
const user = localStorage.getItem("user")
const parse = JSON.parse(user)

export default class ChangePassword extends React.Component{
  state = {
    old_password:"",
    new_password:''
  }

  ChangePassword =async ()=>{
    const {old_password,new_password} = this.state

    if(old_password.length<1 || new_password.length<1){
      message.error("Old and new password is required")
      return 
    }


    await change_password(parse.user_id, old_password, new_password)
    .then((res=>{
      if(res.is_updated){
        message.success("Password Has Been Updated Successfully")
      }else{
        message.error(res.status)
      }
    }))
    .catch(err=>{
      message.error("Something Went Wrong")
    })

  }

  componentDidMount(){
    if(!user){
      window.location = "/login"
    }
  }
    render(){
        return(
            <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Old Password</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                  <input type='password' className='form-control' onChange={(val)=>{
                    this.setState({old_password:val.target.value})
                  }} placeholder='Old Password'/>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">New Password</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              <input type='password'
              onChange={(val)=>{
                this.setState({new_password:val.target.value})
              }}
              className='form-control' placeholder='New Password'/>

              </div>
            </div>
           
        
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button
                  className="btn btn-info "
                 onClick={this.ChangePassword}
                 
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )
    }
}
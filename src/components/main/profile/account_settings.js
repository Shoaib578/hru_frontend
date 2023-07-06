import React from "react";
import { get_user_details, update_user_details } from "../../../call_apis";
import { message } from "antd";
const user = localStorage.getItem('user')
const parse = JSON.parse(user)
export default class AccountSettings extends React.Component{
  state = {
    user:"",
    name:"",
    email:"",
    phone_no:"",
    address:"",
    stripe_id:""

  }



  GetUserDetails = async()=>{
    await get_user_details(parse.user_id)
    .then(res=>{
      this.setState({
              email:res.data.email,
              name:res.data.name,
              phone_no:res.data.phone_no,
              address:res.data.address,
              stripe_id:res.data.stripe_id
            })
    })
    .catch(err=>{
      message.error("Something went wrong")
    })
  }
  UpdateUser = async()=>{
    const {email,name,phone_no,address,stripe_id} = this.state
    await update_user_details(parse.user_id,name,email,address,phone_no,stripe_id)
    .then(res=>{
      if(res.is_updated){
        message.success("Details Updated Successfully")
        this.GetUserDetails()
      }else{
        message.error("Something went wrong")
      }
    })
  }
  componentDidMount(){
    if(user){
      this.GetUserDetails()

    }else{
      window.location = "/login"
    }
  }
    render(){
        return(
            <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                  <input type='text' className='form-control' placeholder='Full Name' onChange={(val)=>{
                this.setState({name:val.target.value})
              }} value={this.state.name}/>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              <input className='form-control' type='email' placeholder='Email' onChange={(val)=>{
                this.setState({email:val.target.value})
              }} value={this.state.email}/>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              <input className='form-control'
              onChange={(val)=>{
                this.setState({phone_no:val.target.value})
              }}
              type='phone' placeholder='Phone Number' value={this.state.phone_no}/>

              </div>
            </div>
           
           
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              <input className='form-control' type='text' onChange={(val)=>{
                this.setState({address:val.target.value})
              }} placeholder='Address' value={this.state.address}/>

              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Stripe Account ID</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              <input className='form-control' type='text' onChange={(val)=>{
                this.setState({stripe_id:val.target.value})
              }} value={this.state.stripe_id} placeholder='Stripe Account ID'/>

              </div>
            </div>


            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button
                  className="btn btn-info "
                  onClick={this.UpdateUser}
                 
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )
    }
}
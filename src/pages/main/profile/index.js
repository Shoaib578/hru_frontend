import React from 'react'
import './style.css'
import AccountSettings from '../../../components/main/profile/account_settings'
import Wallet from '../../../components/main/profile/wallet'
import ChangePassword from '../../../components/main/profile/change_password'
import FavoriteCourses from '../../../components/main/profile/favorite_courses'


export default class Profile extends React.Component{
    state = {
        active_tab:'account_settings'
    }

    current_active_tab_class = (tab_class,default_class)=>{
        if(this.state.active_tab == tab_class){
            return `active ${default_class}`
        }else{
            return default_class
        }
    }

    logout = async()=>{
     await localStorage.removeItem('user')
      window.location = "/login"
    }


    Current_active_tab = ()=>{
        if(this.state.active_tab == "account_settings"){
            return <AccountSettings />
        }else if(this.state.active_tab == "wallet"){
            return <Wallet />
        }else if(this.state.active_tab == "change_password"){
            return <ChangePassword />
        }
    }

    render(){
        return(
            <div className="container">
            <div className="main-body">
            
            
              {/* /Breadcrumb */}
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Admin"
                          className="rounded-circle"
                          width={150}
                        />
                        <div className="mt-3">
                          
                        
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li  style={{cursor:'pointer'}} onClick={()=>this.setState({active_tab:'account_settings'})} className={this.current_active_tab_class('account_settings','list-group-item d-flex justify-content-between align-items-center flex-wrap')}>
                        <h6 className="mb-0">
                        <i class="fa fa-user" style={{fontSize:28}}></i>
                          &nbsp; &nbsp;Account Settings  
                        </h6>
                        <span className="text-secondary"></span>
                      </li>


                      <li style={{cursor:'pointer'}} onClick={()=>this.setState({active_tab:'wallet'})} className={this.current_active_tab_class('wallet','list-group-item d-flex justify-content-between align-items-center flex-wrap')}>
                        <h6 className="mb-0">
                        <i class="fa fa-money" style={{fontSize:28}}></i>
                          &nbsp;  &nbsp;Wallet  
                        </h6>
                        <span className="text-secondary"></span>
                      </li>

                   


                      <li style={{cursor:'pointer'}} onClick={()=>this.setState({active_tab:'change_password'})} className={this.current_active_tab_class('change_password','list-group-item d-flex justify-content-between align-items-center flex-wrap')}>
                        <h6 className="mb-0">
                        <i class="fa fa-key" style={{fontSize:28}}></i>
                          &nbsp;  &nbsp;Change Password  
                        </h6>
                        <span className="text-secondary"></span>
                      </li>


                      <li style={{cursor:'pointer'}} onClick={this.logout} className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                        <i class="fa fa-sign-out" style={{fontSize:28}}></i>
                          &nbsp;  &nbsp;Logout  
                        </h6>
                        <span className="text-secondary"></span>
                      </li>
                     
                     
                 
                    </ul>
                  </div>
                </div>




                <div className="col-md-8 " style={{backgroundColor:this.state.active_tab == "favorite_courses"?'#F0F0F0':'white',borderRadius:10}}>
                  <div className="card mb-3 ml-2"  style={{backgroundColor:this.state.active_tab == "favorite_courses"?'#F0F0F0':'white',borderRadius:10}}>
                   <this.Current_active_tab />
                  </div>
             
                </div>




              </div>
            </div>
          </div>
          

        )
    }
}
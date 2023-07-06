import React from "react";
import SideBar from "../../../../components/panel/admin/sidebar";
import { delete_user, get_all_users } from "../../../../call_apis";
import { message } from "antd";
import { base_url } from "../../../../base_url";

export default class User extends React.Component{
    state = {
        users:[]
    }
    getAllUsers = async()=>{
        await get_all_users()
        .then(res=>{
            this.setState({users:res.data})
        })
        .catch(err=>{
            message.error("Something Went Wrong")
        })
    }


    componentDidMount(){
      
        this.getAllUsers()
    }
    render(){
        return(
            <div>
                <SideBar />

            
<main className="main-content border-radius-lg ">
 
  <div className="container-fluid py-4">
   
    
  <div className="row mt-4">
    
  <div className="col-lg-12">
  <div className="card z-index-2">
  <div className="container-fluid py-4">




    <div className="row">
        <div className="col-12">
        <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
           
            
            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Users-{this.state.users.length}</h6>

            </div>

            </div>
            <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                <thead>
                    <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                       
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Full Name
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Email
                    </th>
                   
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Registerd date
                    </th>



                    <th className="text-secondary opacity-7" />
                    <th className="text-secondary opacity-7" />

                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((index,user)=>{
                       
                    
                    return <tr key={index}>
                  


                    <td>
                    <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{user.name}</h6>
                           
                        </div>
                    </td>

                    <td>
                    <p className="text-xs text-secondary mb-0">
                            {user.email}
                    </p>
                    </td>
                  
                  
                    <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                       {new Date(user.created_at).toDateString()}
                        </span>
                    </td>

                 

                

                    <td className="align-middle">
                        <a
                        href="#"
                        className="text-secondary font-weight-bold text-xs"
                        onClick={async()=>{
                            await delete_user(user.user_id)
                            .then(res=>{
                                if(res.is_deleted){
                                    message.success("User Deleted Successfully")
                                }else{
                                    message.error(res.status)
                                }
                            })
                            .catch(err=>{
                                message.error("Something went wrong")
                            })
                        }}
                        >
                        Delete
                        </a>
                    </td>
                    </tr>
                 })}
                    
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    </div>
 
 
    </div>
    </div>
    </div>
    </div>
    </div>
</main>

            </div>
        )
    }
}
import React from 'react'
import SideBar from '../../../../components/panel/admin/sidebar'
import { accept_or_reject_application, get_all_applications } from '../../../../call_apis'
import { message } from 'antd'
import { base_url } from '../../../../base_url'

export default class TeacherApplications extends React.Component {
    state = {
        applications:[]
    }


    GetAllApplications = async()=>{
        await get_all_applications()
        .then(res=>{
            this.setState({applications:res.data})
        })
        .catch(err=>{
            message.error("Something Went Wrong")
        })
    }

    componentDidMount(){
        this.GetAllApplications()
    }


    render(){
        return(
            <div >
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
                            <h6 className="text-white text-capitalize ps-3">Applications-{this.state.applications.length}</h6>
            
                        </div>
            
                        </div>
                        <div className="card-body px-0 pb-2">
                        <div className="table-responsive p-0">
                            <table className="table align-items-center mb-0">
                            <thead>
                                <tr>
                              
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    Email
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                    CV
                                </th>
                               
                               
            
                                <th className="text-secondary opacity-7" />
                                <th className="text-secondary opacity-7" />
            
                                </tr>
                            </thead>
                            <tbody>
                                
                                {this.state.applications.map((application,index)=>{
                                    
                               
                                
                                return <tr>
                              
            
            
            
                                <td>
                                <p className="text-xs text-secondary mb-0">
                                      {application.email}
                                </p>
                                </td>
                              
                              
                              
            
                                <td className="text-xs text-secondary mb-0">
                                    <a
                                    href={`${base_url}/static/uploads/${application.resume}`}
                                    className="text-secondary font-weight-bold text-xs"
                                   
                                    >
                                    View
                                    </a>
                                </td>
            
                                <td className="align-middle">
                                    <button
                                
                                    className="btn btn-primary"
                                    onClick={async()=>{
                                       await accept_or_reject_application(application.application_id)
                                       .then(res=>{
                                        message.success("Operation successfully")
                                       })
                                       .catch(err=>{
                                        message.error("Something Went Wrong")
                                       })
                                    }}
                                    >
                                    Remove
                                    </button>
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
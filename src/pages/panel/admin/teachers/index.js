import React from 'react'
import SideBar from '../../../../components/panel/admin/sidebar'
import ReactFileReader from 'react-file-reader';
import { message } from 'antd';
import { add_teacher, delete_panel_user, get_all_teachers } from '../../../../call_apis';
import { base_url } from '../../../../base_url';


export default class Teachers extends React.Component{
    state = {
      name:'',
      title:'',
      email:'',
      password:'',
      phone:'',
      address:'',
      description:'',
      image:'',
      profile_image:{
            name:'',
            base64:''
      },
      teachers:[]
    }
    handleChangePicture = (file)=>{
        if(file.fileList){
            this.setState({image:file.fileList[0],profile_image:{
                name:file.fileList[0].name,
                base64:file.base64
            }})

        }
    }

    handleAddTeacher = async()=>{
      if(this.state.email.length<1 || this.state.name.length<1 || this.state.password.length<1){
       alert("please enter email,password and name")
        return
      }
      let data = {
        email:this.state.email,
        password:this.state.password,
        name:this.state.name,
        title:this.state.title,
        phone:this.state.phone,
        address:this.state.address,
        description:this.state.description,
        profile_picture:this.state.image
      }
      await add_teacher(data)
      .then(res=>{
        console.log(res)
        if(res.is_added){
        alert(res.status)

          alert("Teacher Added successfully")
          this.GetAllTeachers()
        }else{
        alert(res.status)

        
        }
      })
      .catch(err=>{
     
        alert("Something Went Wrong")
      })
    }

    GetAllTeachers = async()=>{
      await get_all_teachers()
      .then(res=>{
        this.setState({teachers:res.data})
      })
      .catch(err=>{
        message.error("Something Went Wrong")
      })
    }

    componentDidMount(){
      this.GetAllTeachers()
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
            <button className='float-right btn btn-success mt-3 mr-3' data-toggle="modal" data-target="#exampleModal">Add</button>
            
            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Teachers-{this.state.teachers.length}</h6>

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
                        Employed
                    </th>

                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Courses
                    </th>

                    <th className="text-secondary opacity-7" />
                    <th className="text-secondary opacity-7" />

                    </tr>
                </thead>
                <tbody>
                  {this.state.teachers.map((data,index)=>{
                    return  <tr key={index}>
                    <td>
                        <div className="d-flex px-2 py-1">
                        <div>
                            <img
                            src={`${base_url}/static/uploads/${data.profile_picture}`}
                            className="avatar avatar-sm me-3 border-radius-lg"
                            alt="user1"
                            />
                        </div>
                       
                        </div>
                    </td>


                    <td>
                    <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{data.name}</h6>
                           
                        </div>
                    </td>

                    <td>
                    <p className="text-xs text-secondary mb-0">
                            {data.email}
                    </p>
                    </td>
                  
                  
                    <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                        {new Date(data.created_at).toDateString()}
                        </span>
                    </td>

                    <td className="align-middle text-center">
                        <a
                        href={`/panel/admin/teacher/${data.panel_userid}/courses`}
                        className="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                        >
                        View
                        </a>
                    </td>

                  
                    <td className="align-middle">
                        <a
                        href='#'
                        onClick={()=>{
                          delete_panel_user(data.panel_userid)
                          .then(res=>{
                            if(res.is_deleted){
                              this.GetAllTeachers()
                            }
                          })
                          .catch(err=>{
                            message.error("Something Went Wrong")
                          })
                        }}
                        className="text-secondary font-weight-bold text-xs"
                       
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

{/* Modal */}
<div class="modal fade" id="exampleModal" tabindex="-1"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Teacher</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="main-form pt-45">
                    <center>
                    <ReactFileReader fileTypes={[".png",".jpg",'jpeg']} base64={true} multipleFiles={false} handleFiles={this.handleChangePicture}>

                    <img onClick={this.handleChangePicture}  src={this.state.profile_image.base64?this.state.profile_image.base64:"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} style={{width:130,height:120,borderRadius:'100%',cursor:'pointer'}}/>
                    </ReactFileReader>
                    </center>
                    <br />
                      <div className="row">
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                              name="name"
                              onChange={(val)=>this.setState({name:val.target.value})}
                              className='form-control'
                               style={{backgroundColor:'gray',paddingLeft:10}}
                              type="text"
                              placeholder="Your name"
                              data-error="Name is required."
                              required="required"
                            />
                            <div className="help-block with-errors" />
                          </div>
                          {/* singel form */}
                        </div>


                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                               className='form-control'
                               style={{backgroundColor:'gray',marginTop:10,paddingLeft:10}}
                              type="text"
                              onChange={(val)=>this.setState({title:val.target.value})}

                              placeholder="Title"
                             
                            />
                           
                          </div>
                          </div>
                      
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                               className='form-control'
                               style={{backgroundColor:'gray',marginTop:10,paddingLeft:10}}
                              type="email"
                              onChange={(val)=>this.setState({email:val.target.value})}

                              placeholder="Email"
                             
                            />
                           
                          </div>
                          </div>


                          <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                               className='form-control'
                               style={{backgroundColor:'gray',marginTop:10,paddingLeft:10}}
                              type="password"
                              onChange={(val)=>this.setState({password:val.target.value})}

                              placeholder="Password"
                             
                            />
                           
                          </div>
                          </div>



                          {/* singel form */}
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                              className='form-control'
                              style={{backgroundColor:'gray',marginTop:10,paddingLeft:10}}
                              onChange={(val)=>this.setState({phone:val.target.value})}

                              type="phone"
                              placeholder="Phone"
                             
                            />
                           
                          </div>
                          {/* singel form */}
                        </div>

                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <input
                             className='form-control'
                             style={{backgroundColor:'gray',marginTop:10,paddingLeft:10}}
                             onChange={(val)=>this.setState({address:val.target.value})}

                              type="text"
                              placeholder="Address"
                             
                            />
                           
                          </div>
                          {/* singel form */}
                        </div>



                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <textarea
                               className='form-control'
                               style={{backgroundColor:'gray',marginTop:10,paddingLeft:10}}
                              type="text"
                              onChange={(val)=>this.setState({description:val.target.value})}

                              placeholder="Description....."
                             
                            />
                           
                          </div>
                          </div>

                   

                       

                      
                      </div>
                      {/* row */}
                  
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" onClick={this.handleAddTeacher} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



</div>
        )
    }
}
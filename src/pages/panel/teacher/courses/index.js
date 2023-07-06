import React from "react";
import ReactFileReader from 'react-file-reader'
import SideBar from "../../../../components/panel/teacher/sidebar";
import { add_course, delete_course, get_teacher_courses, view_course } from "../../../../call_apis";
import { message } from "antd";
import { base_url } from "../../../../base_url";



const teacher = localStorage.getItem('teacher');
const parse = JSON.parse(teacher)
let active_course_id = React.forwardRef('')
export default class TeacherCourses extends React.Component {
    state = {
        course_thumbnail:{
            name:'',
            base64:''
        },
        image:'',
        courses:[],
        title:'',
        course_description:'',
        course_category:'',
        course_price:0
    }

    handleChangePicture = (file)=>{
        if(file.fileList){
            this.setState({course_thumbnail:{
                name:file.fileList[0].name,
                base64:file.base64
            },image:file.fileList[0]})

        }
    }

    Getcourses = async()=>{
        await get_teacher_courses(parse.panel_userid)
        .then(res=>{
            this.setState({courses:res.data})
        })
        .catch(err=>{
            message.error("Something Went Wrong")
        })
    }


    AddCourse = async()=>{

        
        const {title,course_description,course_category,course_price,image} = this.state
        if(title.length<1 || course_description.length<1 || course_category.length<1 || course_price.length<1 || image.length<1){
            alert("Please fill all the fields")
            return 
        }
       await add_course(title,course_description,parse.panel_userid,image,course_price,course_category)
       .then(res=>{
        if(res.is_added){
            alert("course added successfully")
            this.Getcourses()
        }else{
            alert(res.status)
        }
       })
       .catch(err=>{
        alert("Something Went Wrong")
       })
    }

    get_course_details = async(course_id)=>{
        await view_course(course_id)
        .then((res=>{

        }))
    }

    componentDidMount(){
        if(teacher){
            this.Getcourses()
        }else{
            window.location = "/panel/login"
            message.error("Please Login to be able to access")
        }
    }
    render(){
        return  <div>

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
               <h6 className="text-white text-capitalize ps-3">Courses-{this.state.courses.length}</h6>

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
                      Title
                   </th>
                   <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                       prices
                   </th>
                  
                   <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                       posted date
                   </th>

                 

                   <th className="text-secondary opacity-7" />
                   <th className="text-secondary opacity-7" />
                   <th className="text-secondary opacity-7" />

                   </tr>
               </thead>
               <tbody>
                    {this.state.courses.map((course,index)=>{
                       return <tr>
                   <td>
                       <div className="d-flex px-2 py-1">
                       <div>
                           <img
                           src={`${base_url}/static/uploads/${course.course_thumbnail}`}
                           className="avatar avatar-sm me-3 border-radius-lg"
                           alt="user1"
                           />
                       </div>
                      
                       </div>
                   </td>


                   <td>
                   <div className="d-flex flex-column justify-content-center">
                           <h6 className="mb-0 text-sm">{course.course_title}</h6>
                          
                       </div>
                   </td>

                   <td>
                   <p className="text-xs text-secondary mb-0">
                           {course.course_price}$
                   </p>
                   </td>
                 
                 
                   <td className="align-middle text-center">
                       <span className="text-secondary text-xs font-weight-bold">
                      {new Date(course.created_at).toDateString()}
                       </span>
                   </td>

                   <td className="align-middle text-center">
                       <a
                       href={`/panel/teacher/manage_course_videos/${course.course_id}`}
                       className="text-secondary font-weight-bold text-xs"
                       data-toggle="tooltip"
                       data-original-title="Edit user"
                       >
                       View
                       </a>
                   </td>

                   <td className="align-middle">
                       <a
                       href={`/panel/teacher/course/edit/${course.course_id}`}
                       className="text-secondary font-weight-bold text-xs"
                       data-toggle="tooltip"
                       data-original-title="Edit user"
                       
                       >
                       Edit
                       </a>
                   </td>

                   <td className="align-middle">
                       <a
                       href="javascript:;"
                       className="text-secondary font-weight-bold text-xs"
                       data-toggle="tooltip"
                       
                       onClick={async()=>{
                        await delete_course(course.course_id)
                        .then(res=>{
                           message.success("Deleted successfully")
                            this.Getcourses()
                        })
                        .catch(err=>{
                            message.error("Something Went Wrong")
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

{/* Modal */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog" role="document">
   <div class="modal-content">
     <div class="modal-header">
       <h5 class="modal-title" id="exampleModalLabel">Add Course</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>
     <div class="modal-body">
   
                   <center>
                   <ReactFileReader fileTypes={[".png",".jpg",'jpeg']} base64={true} multipleFiles={false} handleFiles={this.handleChangePicture}>

                   <img onClick={this.handleChangePicture}  src={this.state.course_thumbnail.base64?this.state.course_thumbnail.base64:"https://static.vecteezy.com/system/resources/previews/007/567/154/large_2x/select-image-icon-vector.jpg"} style={{width:'100%',height:260,borderRadius:10,cursor:'pointer'}}/>
                   </ReactFileReader>
                   </center>
                   <br />
                     
                       <div className="col-md-12">
                        
                           <input
                             name="title"
                             className='form-control'
                              style={{backgroundColor:'gray',width:'100%',paddingLeft:10,color:'white'}}
                              onChange={(val)=>this.setState({title:val.target.value})}
                             type="text"
                             placeholder="Enter Course Title"
                            
                           />
                        
                         
                         {/* singel form */}
                       </div>


                       <div className="col-md-12">
                         
                           <input
                              className='form-control'
                              style={{backgroundColor:'gray',marginTop:10,paddingLeft:10,color:'white'}}
                             type="text"
                             onChange={(val)=>this.setState({course_category:val.target.value})}

                             placeholder="Course Criteria"
                            
                           />
                          
                      
                         </div>
                     
                       <div className="col-md-12">
                         
                          <textarea placeholder="description...."
                             onChange={(val)=>this.setState({course_description:val.target.value})}
                             className="form-control" style={{backgroundColor:'gray',marginTop:10,paddingLeft:10,color:'white'}}/>
                     </div>
                    

                     <div className="col-md-12">
                        
                        <input
                           className='form-control'
                           style={{backgroundColor:'gray',marginTop:10,paddingLeft:10,color:'white'}}
                          type="number"
                          onChange={(val)=>this.setState({course_price:val.target.value})}

                          placeholder="Enter Price in $"
                         
                        />
                       
                     
                      </div>
                 
    
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       <button onClick={this.AddCourse} type="button" class="btn btn-primary">Save changes</button>
     </div>
   </div>
 </div>
</div>

        </div>
    }
}
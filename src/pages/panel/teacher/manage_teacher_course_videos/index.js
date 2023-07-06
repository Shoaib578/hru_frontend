import React from 'react'
import ReactFileReader from 'react-file-reader'
import SideBar from "../../../../components/panel/teacher/sidebar";
import { add_lecture, delete_lecture, get_lectures } from '../../../../call_apis';
import { message } from 'antd';
import { base_url } from '../../../../base_url';
let course_id = window.location.pathname.split('/')[4]
export default class ManageTeacherCourseVideos extends React.Component{
    state = {
        video:'',
        title:'',
        description:'',
        duration:'',
        lecture_number:'',
        lectures:[],
        lecture_type:''
    }
    handleChangefile = (file)=>{
        if(file.fileList){
            this.setState({video:file.fileList[0]})

        }
    }


    getLectures = async()=>{
        await get_lectures(course_id)
        .then(res=>{
            this.setState({lectures:res.data})
        })
        .catch(err=>{
            message.error("something went wrong")
        })
    }


    AddLecture = async()=>{
        const {title,description,duration,lecture_number,video,lecture_type} = this.state
        if(title.length<1 || description.length<1 || duration.length<1 || video.length<1 ||lecture_number.length<1 || lecture_type.length<1){
            alert("All the fields are required")
            return 
        }
        console.log("Video")
        console.log(video)
        await add_lecture(course_id,title,description,duration,lecture_number,video,lecture_type)
        .then(res=>{
            if(res.is_added){
                alert("Lecture added successfully")
                this.getLectures()
            }else{
                alert(res.status)
            }
        })
        .catch(err=>{
            alert("Something went wrong")
        })


    }

    componentDidMount(){
     this.getLectures()
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
                    <button className='float-right btn btn-success mt-3 mr-3' data-toggle="modal" data-target="#exampleModal">Add</button>
                    
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-white text-capitalize ps-3">Manage Videos-{this.state.lectures.length}</h6>

                    </div>

           </div>
           <div className="card-body px-0 pb-2">
           <div className="table-responsive p-0">
               <table className="table align-items-center mb-0">
               <thead>
                   <tr>
                   <th className="text-secondary opacity-7" />

                   <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Lecture Number
                   </th>
                   <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Title
                   </th>

                   <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Lecture Type
                   </th>
                   <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                       duration
                   </th>
                  
                   <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                       posted date
                   </th>

                 

                   
                   <th className="text-secondary opacity-7" />
                   

                   </tr>
               </thead>
               <tbody>
                  {this.state.lectures.map((data,index)=>{
                        return  <tr>
                    
                        <td>
                    <div className="d-flex flex-column justify-content-center">
                        <video controls width={80} height={80}>
                            <source src={`${base_url}/static/uploads/${data.lecture_video}`}/>
                        </video>
                    
                    
                
                    </div>
                    </td>
 
 
                    <td>
                    <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{data.lecture_number}</h6>
                           
                        </div>
                    </td>
 
 
                    <td>
                    <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{data.lecture_title}</h6>
                           
                        </div>
                    </td>


                    <td>
                    <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{data.lecture_type}</h6>
                           
                        </div>
                    </td>
 
                    <td>
                    <p className="text-xs text-secondary mb-0">
                           {data.lecture_duration} minutes
                    </p>
                    </td>
                  
                  
                    <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                        {new Date(data.created_at).toDateString()}
                        </span>
                    </td>
 
                   
 
                
 
                    <td className="align-middle">
                        <a
                        href="javascript:;"
                        onClick={async()=>{
                           await delete_lecture(data.lecture_id)
                           .then(res=>{
                            if(res.is_deleted){
                                this.getLectures()
                            }else{
                                alert(res.status)
                            }
                           })
                           .catch(err=>{
                            alert("Something went wrong")
                           })
                        }}
                        className="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
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
       <h5 class="modal-title" id="exampleModalLabel">Add Video</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>
     <div class="modal-body">
     <div className="main-form pt-45">
                   <center>
                   <ReactFileReader fileTypes={[".mp4"]} base64={true} multipleFiles={false} handleFiles={this.handleChangefile}>

                    <button className='btn btn-primary'>Choose Video Lecture</button>
                   </ReactFileReader>
                   </center>
                   <br />
                   
                       <div className="col-md-12">
                        
                           <input
                             name="title"
                             className='form-control'
                             onChange={(val)=>this.setState({title:val.target.value})}
                              style={{backgroundColor:'gray',padding:5}}
                             type="text"
                             placeholder="Enter Video Title"
                            
                           />
                         
                       </div>


                       <div className="col-md-12">
                     
                           <input
                              className='form-control'
                              style={{backgroundColor:'gray',marginTop:10,padding:5}}
                             onChange={(val)=>this.setState({duration:val.target.value})}

                             type="number"
                             step="0.01"
                             placeholder="duration in minutes"
                            
                           />
                          
                        
                         </div>
                     
                       <div className="col-md-12">
                         
                          <textarea placeholder="description...." style={{backgroundColor:'gray',padding:5,marginTop:10}} onChange={(val)=>this.setState({description:val.target.value})} className="form-control"/>
                          
                         </div>
                      
                       
                         <div className="col-md-12">
                         
                        <select className='form-control' style={{backgroundColor:'gray',padding:5,marginTop:10,color:'white'}} onChange={(val)=>{
                            this.setState({lecture_type:val.target.value})
                        }}>
                            <option selected>Type</option>
                            <option value={'preview'}>Preview</option>
                            <option value={'paid'}>Paid</option>

                        </select>
                        </div>
                      
                       <div className="col-md-12">
                        
                        <input
                           className='form-control'
                           style={{backgroundColor:'gray',marginTop:10,padding:5}}
                          type="number"
                            onChange={val=>this.setState({lecture_number:val.target.value})}
                          placeholder="Lecture Number"
                         
                        />
                       
                    
                      </div>


                  
                    

                      

                    
                 
     </div>
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       <button type="button" onClick={this.AddLecture} class="btn btn-primary">Save changes</button>
     </div>
   </div>
 </div>
</div>

        </div>
        )
    }
}
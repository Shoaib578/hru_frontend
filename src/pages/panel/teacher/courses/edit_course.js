import React from "react";
import ReactFileReader from 'react-file-reader'
import SideBar from "../../../../components/panel/teacher/sidebar";
import { add_course, delete_course, get_teacher_courses, update_course, view_course } from "../../../../call_apis";
import { message } from "antd";
import { base_url } from "../../../../base_url";

const course_id = window.location.pathname.split('/')[5]
export default class EditCourse extends React.Component{

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

    getCourseDetails = async()=>{
        await view_course(course_id)
        .then(res=>{
            this.setState({
                course_thumbnail:res.data.course_thumbnail,
                title:res.data.course_title,
                course_description:res.data.course_description,
                course_category:res.data.course_category,
                course_price:res.data.course_price
                
            })
        })
        .catch(err=>{
            message.error("Something Went Wrong")
        })
    }

    handleChangePicture = (file)=>{
        if(file.fileList){
            this.setState({course_thumbnail:{
                name:file.fileList[0].name,
                base64:file.base64
            },image:file.fileList[0]})

        }
    }


    updatecourse = async()=>{
        let image = ''
        console.log(course_id)
        const {title,course_category,course_description,course_price,course_thumbnail} =this.state
        if(course_thumbnail.length<1){
            message.error("Course Thumbnail Should not be empty")
            return
        }

        if(title.length<1 || course_category.length<1 || course_description.length<1 || course_price.length<1){
            message.error("Course Title, Course Category, Course Description, Course Price Should not be empty")
            return
        }
        if(course_thumbnail.base64){
            image = this.state.image

        }else{
            image = ""
        }

        
        await update_course(title,course_description,image,course_price,course_category,course_id)
        .then(res=>{
        if(res.is_updated){
            message.success("Course Updated Successfully")
        }else{
            message.error(res.status)
        }
      })
      .catch(err=>{
        message.error("Something Went Wrong")
      })
    }

    componentDidMount(){
        this.getCourseDetails()
    }
    render(){
        return (
            <div>
            <center>
            <ReactFileReader fileTypes={[".png",".jpg",'jpeg']} base64={true} multipleFiles={false} handleFiles={this.handleChangePicture}>

            <img onClick={this.handleChangePicture}  src={this.state.course_thumbnail.base64?this.state.course_thumbnail.base64:`${base_url}/static/uploads/${this.state.course_thumbnail}`} style={{width:'97%',height:300,borderRadius:10,cursor:'pointer'}}/>
            </ReactFileReader>
            </center>
            <br />
              
                <div className="col-md-12">
                 
                    <input
                      name="title"
                      className='form-control'
                       style={{backgroundColor:'gray',width:'100%',paddingLeft:10,color:'white'}}
                       onChange={(val)=>this.setState({title:val.target.value})}
                       value={this.state.title}
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
                      value={this.state.course_category}

                      placeholder="Course Criteria"
                     
                    />
                   
               
                  </div>
              
                <div className="col-md-12">
                  
                   <textarea placeholder="description...."
                      onChange={(val)=>this.setState({course_description:val.target.value})}
                      value={this.state.course_description}

                      className="form-control" style={{backgroundColor:'gray',marginTop:10,paddingLeft:10,color:'white'}}/>
              </div>
             

              <div className="col-md-12">
                 
                 <input
                    className='form-control'
                    style={{backgroundColor:'gray',marginTop:10,paddingLeft:10,color:'white'}}
                   type="number"
                   onChange={(val)=>this.setState({course_price:val.target.value})}
                   value={this.state.course_price}

                   placeholder="Enter Price in $"
                  
                 />
                
              
               </div>

                <button onClick={this.updatecourse} className="btn btn-primary ml-3 mt-4">Update</button>
               </div>
        )
    }
}
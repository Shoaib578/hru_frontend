import React from 'react'
import SideBar from '../../../../components/panel/admin/sidebar'
import { add_featured_course, delete_featured_course, get_all_featured_courses, get_courses_for_dropdown } from '../../../../call_apis'
import { message } from 'antd'
const admin = localStorage.getItem('admin')
export default class FeaturedCourses extends React.Component{
  state = {
    dropdown_courses:[],
    featured_courses:[],
    selected_course:''
  }
    getAllCoursesDropdown = async()=>{
      await get_courses_for_dropdown()
      .then(res=>{
        console.log(res.data)
        this.setState({dropdown_courses:res.data})
      })
      .catch(err=>{
        console.log(err)
      })
    }


    getFeaturedCourses = async()=>{
      await get_all_featured_courses()
      .then(res=>{
        console.log(res.data)
        this.setState({featured_courses:res.data})
      })
      .catch(err=>{
        message.error("Something went wrong")
      })
    }

    AddFeaturedCourse = async()=>{
      await add_featured_course(this.state.selected_course)
      .then(res=>{
        if(res.is_added){
          alert("course added successfully")
          this.getFeaturedCourses()
        }

      })
      .catch(err=>{
        alert("Something went wrong")
      })
    }
    componentDidMount(){
        if(!admin){
          window.location = "/panel/login"
          return 
        }
          this.getAllCoursesDropdown()
          this.getFeaturedCourses()
    }
    render(){
        return(
            <>
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
                <h6 className="text-white text-capitalize ps-3">Featured Courses-{this.state.featured_courses.length}</h6>

            </div>

            </div>
            <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                <thead>
                    <tr>
                    
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                       Title
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Link
                    </th>
                   



                    <th className="text-secondary opacity-7" />
                   
                    </tr>
                </thead>
                <tbody>
                  {this.state.featured_courses.map((course,index)=>{
                    return <tr>
                 


                    <td>
                    <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{course.course_id}</h6>
                           
                        </div>
                    </td>


                    <td>
                    <div className="d-flex flex-column justify-content-center">
                           <a href={`http://localhost:3000/course/${course.course_id}`} target="_blank"> <h6 className="mb-0 text-sm">{`http://localhost:3000/course/${course.course_id}`}</h6></a>
                           
                        </div>
                    </td>

               
                  
                  
                   

                 

                   

                    <td className="align-middle">
                        <a
                        style={{cursor: 'pointer'}}
                        className="text-secondary font-weight-bold text-xs"
                        onClick={async()=>{
                         await delete_featured_course(course.featured_id)
                         .then(res=>{
                          if(res.is_deleted){
                            message.success("course deleted successfully")
                            this.getFeaturedCourses()
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


    {/* Modal */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Featured Courses</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="main-form pt-45">
                   
                    <br />
                      <div className="row">
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <select
                              name="chose_course"
                              className='form-control'
                              onChange={(val)=>{
                                this.setState({selected_course:val.target.value})
                              }}
                               style={{backgroundColor:'gray'}}
                              >
                                <option>Choose Course</option>
                                {this.state.dropdown_courses.map((data,index)=>{
                                return <option value={data.course_id}>{data.course_title}</option>

                                })}

                            </select>
                           
                          </div>
                          {/* singel form */}
                        </div>
                     
            
                      </div>
                      {/* row */}
                  
                  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" onClick={this.AddFeaturedCourse} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



</main>
            </>
        )
    }
}
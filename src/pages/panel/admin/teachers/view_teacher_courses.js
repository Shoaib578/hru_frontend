import React from 'react'
import SideBar from '../../../../components/panel/admin/sidebar'
import CourseContainer from '../../../../components/main/courseContainer'
import { admin_get_teacher_courses } from '../../../../call_apis'
import { message } from 'antd'
const teacher_id = window.location.pathname.split('/')[4]
const admin = localStorage.getItem('admin')
const parse = JSON.parse(admin)
export default class ViewTeacherCourses extends React.Component {
    state = {
      courses:[]
    }
    getCourses= async(teacher_id)=>{
      await admin_get_teacher_courses(teacher_id)
      .then(res=>{
        this.setState({courses:res.data})
      })
      .catch(err=>{
        message.error("Something Went Wrong")
      })
    }

    componentDidMount(){
      console.log(teacher_id)
      if(admin){
        this.getCourses(teacher_id)
      }else{
        window.location = "/panel/login"
      }

    }
    render(){
        return(
            <div>
                <SideBar />
                <>
 

                {/*====== COURSES PART START ======*/}
                <section id="courses-part" className="pt-120 pb-120 gray-bg">
                  <div className="container">
                    <div className="row">
                    
                    </div>
                    {/* row */}
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="courses-grid"
                        role="tabpanel"
                        aria-labelledby="courses-grid-tab"
                      >
                        <div className="row">

                          {this.state.courses.map((course,index)=>{
                            return <CourseContainer data={course} key={index}/>
                          })}
                       

                        </div>
                        {/* row */}
                      </div>
                    
                    </div>
                  
                
                  </div>
                  {/* container */}
                </section>
                {/*====== COURSES PART ENDS ======*/}
            </>
            </div>
        )
    }
}
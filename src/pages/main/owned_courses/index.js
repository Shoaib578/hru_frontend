import React from 'react'
import Course from '../../../components/main/courseContainer'
import CourseContainer from '../../../components/main/courseContainer'

import { message } from 'antd'
import { get_owned_courses } from '../../../call_apis'
const user = localStorage.getItem('user')
const parse = JSON.parse(user)
export default class OwnedCourses extends React.Component {

  state = {
    courses:[]
  }
  GetOwnedCourses = async()=>{
    await get_owned_courses(parse.user_id)
    .then(res=>{
      this.setState({courses:res.data})
    })
    .catch(err=>{
      this.setState({courses:[]})
      message.error("Something Went Wrong")
    })
  }
  search_course = (val)=>{
    this.setState({
        courses:this.state.courses.filter(course=>{
            return course.course_title.toLowerCase().includes(val.toLowerCase())
        })
    })
}
  componentDidMount(){
    if(user){
      this.GetOwnedCourses()

    }else{
      message.warning("Please Login to be able to access your courses")
      window.location = "/login"
    }
  }
    render(){
        return(
            <>
  {/*====== PAGE BANNER PART START ======*/}
  <section
    id="page-banner"
    className="pt-105 pb-110 bg_cover"
    data-overlay={8}
    
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Owned Courses</h2>
         
          </div>{" "}
          {/* page banner cont */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== PAGE BANNER PART ENDS ======*/}
  {/*====== COURSES PART START ======*/}
  <section id="courses-part" className="pt-120 pb-120 gray-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="courses-top-search">
            
            {/* nav */}
            <div className="courses-search float-right">
             
                <input onChange={val=>{
                                if(val.target.value.length>0){

                                    this.search_course(val.target.value)
                                }else{
                                    this.GetOwnedCourses()
                                }
                            }} type="text" placeholder="Search" />
                <button type="button">
                  <i className="fa fa-search" />
                </button>
             
            </div>{" "}
            {/* courses search */}
          </div>{" "}
          {/* courses top search */}
        </div>
      </div>{" "}
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
           return <CourseContainer key={index} data={course}/>

            })}

          </div>{" "}
          {/* row */}
        </div>
      
      </div>{" "}
     
   
    </div>{" "}
    {/* container */}
  </section>
  {/*====== COURSES PART ENDS ======*/}
            </>
        )
    }
}
import React from "react";
import CourseContainer from "../courseContainer";
import { get_all_featured_courses, get_main_website_featured_course } from "../../../call_apis";
import { message } from "antd";

export default class FeaturedCourses extends React.Component{
  state = {
    courses:[]
  }


  GetFeaturedcourses = async()=>{
    await get_main_website_featured_course()
    .then(res=>{
      this.setState({courses:res.data})
    })
    .catch(err=>{
      message.error("Something Went Wrong")
    })
  }


  componentDidMount(){
    this.GetFeaturedcourses()
  }
    render(){
        return(
            <>
  {/*====== COURSE PART START ======*/}
  <section id="course-part" className="pt-115 pb-120 gray-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title pb-45">
            <h5>Our course</h5>
            <h2>Featured courses </h2>
          </div>{" "}
          {/* section title */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="row course-slied mt-30">
      {this.state.courses.map((data,index)=>{
        console.log(data)
      return <CourseContainer key={index} data={data}/>

      })}
     

      </div>{" "}
      {/* course slied */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== COURSE PART ENDS ======*/}
</>

        )
    }
}
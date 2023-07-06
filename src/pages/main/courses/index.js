import React from "react";
import CourseContainer from "../../../components/main/courseContainer";
import { get_main_website_all_course } from "../../../call_apis";
import { message } from "antd";


export default class Courses extends React.Component{

    state = {
        courses:[]
    }

    getAllcourses = async()=>{
        await get_main_website_all_course()
        .then(res=>{
            this.setState({
                            courses:res.data
                        })
        })

        .catch(err=>{
            message.error("Something went wrong")
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
        this.getAllcourses()
    }
    render(){
        return(
            <>
            {/*====== PAGE BANNER PART START ======*/}
            <section
                id="page-banner"
                className="pt-105 pb-110 bg_cover"
                data-overlay={8}>
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="page-banner-cont">
                        <h2>Our Courses</h2>
                    
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
                        <form action="#">
                            <input type="text" onChange={val=>{
                                if(val.target.value.length>0){

                                    this.search_course(val.target.value)
                                }else{
                                    this.getAllcourses()
                                }
                            }} placeholder="Search" />
                            <button type="button">
                            <i className="fa fa-search" />
                            </button>
                        </form>
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
                            return  <CourseContainer key={index} data={course}/>
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
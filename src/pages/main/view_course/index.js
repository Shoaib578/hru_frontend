import React from 'react'
import Course from '../../../components/main/courseContainer'
import { base_url } from '../../../base_url'
import { buy_course, find_coupon, get_main_website_view_course } from '../../../call_apis'
import { message } from 'antd'

const course_id = window.location.pathname.split('/')[2]
const user = localStorage.getItem('user')
const parse = JSON.parse(user)

export default class ViewCourse extends React.Component{
    state = {
      course:[],
      lectures:[],
      active_video_drop_id:'',
      price:'',
      coupon_code:''
    }
    get_course_details = async()=>{
      if(user){
        await get_main_website_view_course(course_id,true,parse.user_id)
        .then(res=>{
          this.setState({course:res.course[0],lectures:res.lectures,price:res.course[0].course_price})
        })
        .catch(err=>{
          console.log(err)
        })
      }else{
        await get_main_website_view_course(course_id,false,null)
        .then(res=>{
          this.setState({course:res.course[0],lectures:res.lectures,price:res.course[0].course_price})
        })
        .catch(err=>{
          console.log(err)
        })
      }
    
    }


   
     percentage = (percentageValue,price)=>{

      return (price/100)*percentageValue
    }
 


    findCoupon = async()=>{
      if(this.state.coupon_code.length<1){
        message.error("Coupon code is required")
        return
      }
      await find_coupon(course_id,this.state.coupon_code)
      .then(res=>{
        if(res.found){
          message.success(`Found coupon successfully.You have ${res.data.discount_percentage}% discount on this course` )
          let percentage_of = this.percentage(res.data.discount_percentage,this.state.price)
          let minus =percentage_of
          console.log(minus)
          this.setState({price:this.state.price - minus})

        
        }else{
          message.error("Coupon not found")
        }
      })
      .catch(err=>{
        message.error("Something Went Wrong")
      })
    }

    componentDidMount(){
     
      this.get_course_details()
    }
    render(){
        return(
            <>


              
  {/*====== COURSES SINGEl PART START ======*/}
  <section id="corses-singel" className="pt-90 pb-120 gray-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="corses-singel-left mt-30">
            <div className="title">
              <h3>{this.state.course.course_title}</h3>
            </div>{" "}
            {/* title */}
            <div className="course-terms">
              <ul>
                <li>
                  <div className="teacher-name">
                    <div className="thum">
                      <img src={`${base_url}/static/uploads/${this.state.course.profile_picture}`} alt="Teacher"  style={{width:70,height:70}}/>
                    </div>
                    <div className="name ml-3">
                      <span>Teacher</span>
                      <h6>{this.state.course.name}</h6>
                    </div>
                  </div>
                </li>


             
                <li>
                  <div className="course-category">
                    <span>Category</span>
                    <h6>{this.state.course.course_category} </h6>
                  </div>
                </li>
                
              </ul>
            </div>{" "}
            {/* course terms */}
            <div className="corses-singel-image pt-50">
              <img src={`${base_url}/static/uploads/${this.state.course.course_thumbnail}`} alt="Courses" />
            </div>{" "}
            {/* corses singel image */}
            <div className="corses-tab mt-30">
              <ul className="nav nav-justified" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="active"
                    id="overview-tab"
                    data-toggle="tab"
                    href="#overview"
                    role="tab"
                    aria-controls="overview"
                    aria-selected="true"
                  >
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="curriculam-tab"
                    data-toggle="tab"
                    href="#curriculam"
                    role="tab"
                    aria-controls="curriculam"
                    aria-selected="false"
                  >
                    Curriculam
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="instructor-tab"
                    data-toggle="tab"
                    href="#instructor"
                    role="tab"
                    aria-controls="instructor"
                    aria-selected="false"
                  >
                    Instructor
                  </a>
                </li>
               
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="overview"
                  role="tabpanel"
                  aria-labelledby="overview-tab"
                >
                  <div className="overview-description">
                    <div className="singel-description pt-40">
                      <h6>Course Summery</h6>
                      <p>
                        {this.state.course.course_description}
                      </p>
                    </div>
                  
                  </div>{" "}
                  {/* overview description */}
                </div>
                <div
                  className="tab-pane fade"
                  id="curriculam"
                  role="tabpanel"
                  
                  aria-labelledby="curriculam-tab"
                >
                  <div className="curriculam-cont">
                    <div className="title">
                      <h6>{this.state.course.course_title}</h6>
                    </div>
                    <div className="accordion" id="accordionExample">

                      {this.state.lectures.map((lecture,index)=>{
                        return <div key={index} className="card m-4">
                        <div className="card-header" id="headingOne">
                          <a
                           onClick={()=>{
                            if(this.state.active_video_drop_id == lecture.lecture_id){
                              this.setState({active_video_drop_id:''})
                            }else{
                              this.setState({active_video_drop_id:lecture.lecture_id})

                            }

                          }}
                            href="#"
                            data-toggle="collapse"
                           
                          >
                            <ul>
                              <li>
                                <i className="fa fa-file-o" />
                              </li>
                              <li>
                                <span className="lecture">Lecture {lecture.lecture_number}</span>

                              </li>
                              <li>
                                <span className="head">{lecture.lecture_title}</span>
                              </li>
                              <li>
                                <span className="time d-none d-md-block">
                                  <i className="fa fa-clock-o" />
                                  <span>{lecture.lecture_duration} minute</span>
                                {lecture.lecture_type == "preview"?<p style={{backgroundColor:'skyblue',padding:10,float:'right'}}>Preview</p>:null}

                                </span>
                              </li>
                            </ul>
                          </a>
                        </div>
                        <div
                          id={this.state.active_video_drop_id == lecture.lecture_id?"collapseOne":""}
                         
                          className={this.state.active_video_drop_id == lecture.lecture_id?"collapse show":"collapse"}
                         
                        >
                          <div className="card-body">

                          {lecture.lecture_type == "preview"?<video width="100%" height="100%" controls>
                              <source src={`${base_url}/static/uploads/${lecture.lecture_video}`} type="video/mp4" />
                          </video>:<>
                        

                          {this.state.course.is_owned == 1?
                          
                          <video width="100%" height="100%" controls>
                          <source src={`${base_url}/static/uploads/${lecture.lecture_video}`} type="video/mp4" />
                      </video>:<h3>Please Enroll this course to be able to watch</h3>}
                          </>}

                            <p>
                             {lecture.lecture_description}
                            </p>
                          </div>
                        </div>
                      </div>
                      })}
                      
                    
                   
                     
                   
                    
                   
                    </div>
                  </div>{" "}
                  {/* curriculam cont */}
                </div>
                <div
                  className="tab-pane fade"
                  id="instructor"
                  role="tabpanel"
                  aria-labelledby="instructor-tab"
                >
                  <div className="instructor-cont">
                    <div className="instructor-author">
                      <div className="author-thum">
                        <img src={`${base_url}/static/uploads/${this.state.course.profile_picture}`} alt="Instructor" style={{borderRadius:100,width:120,height:120}}/>
                      </div>
                      <div className="author-name">
                        <a href={`/teacher/${this.state.course.panel_userid}`}>
                          <h5>{this.state.course.name}</h5>
                        </a>
                        <span>{this.state.course.title}</span>
                       
                      </div>
                    </div>
                    <div className="instructor-description pt-25">
                      <p>
                       {this.state.course.description}
                      </p>
                    </div>
                  </div>{" "}
                  {/* instructor cont */}
                </div>
              
              </div>{" "}
              {/* tab content */}
            </div>
          </div>{" "}
          {/* corses singel left */}
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <div className="course-features mt-30">
                <h4>Course Features </h4>
                <ul>
                  {/* <li>
                    <i className="fa fa-clock-o" />
                    Duaration : <span>10 Hours</span>
                  </li> */}
                  <li>
                    <i className="fa fa-clone" />
                    Leactures : <span>{this.state.lectures.length}</span>
                  </li>
                
                  <li>
                    <i className="fa fa-user-o" />
                    Students : <span>{this.state.course.students_count}</span>
                  </li>
                </ul>

               
                <div className="price-button pt-10">
                {/* <div>
                <input type='text' placeholder='Coupon' onChange={(val)=>{
                  this.setState({coupon_code:val.target.value})
                }} style={{float:'left',borderColor:'orange'}}/>
                  <button onClick={async()=>{
                   await this.findCoupon()
                  }} style={{float:'right',backgroundColor:'orange',borderRadius:10,borderColor:'orange',borderRadius:10,outline:'none'}}>Apply</button>
                </div> */}

                <br />
                <br />

                {this.state.course.is_owned == 0? <span>
                    Price : <b>${this.state.price}</b>
                  </span>:null}

                  {this.state.course.is_owned == 0?<button onClick={async()=>{
                    if(this.state.price>0){
                      window.location = `/enroll_course/${course_id}`
                    }else{
                      await buy_course(course_id,parse.user_id)
                      .then(res=>{
                        if(res.is_owned){
                          window.location = '/course/'+course_id
                        }else{
                          message.error("Something went wrong")
                        }
                      })
                      .catch(err=>{

                        message.error("Something went wrong")
                      })
                    }
                  }} className="main-btn">
                    Enroll Now
                  </button>:<div>
                    
                    {this.state.course.is_owned == 1?<div style={{backgroundColor:'skyblue',padding:30,width:'100%',borderRadius:10}}>
                      <h3 style={{color:'white'}}>Owned</h3>
                    </div>: null}
                    
                    </div>}
                </div>
              </div>{" "}
              {/* course features */}
            </div>
            
          </div>
        </div>
      </div>{" "}
      {/* row */}
      <div className="row">
        <div className="col-lg-8">
          <div className="releted-courses pt-95">
            {/* <div className="title">
              <h3>Releted Courses</h3>
            </div> */}
            <div className="row">
             {/* <Course />
             <Course />
             <Course />
             <Course /> */}

            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* releted courses */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== COURSES SINGEl PART ENDS ======*/}
</>

        )
    }
}
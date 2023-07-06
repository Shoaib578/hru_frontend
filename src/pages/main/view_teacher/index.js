import React from 'react'
import Course from '../../../components/main/courseContainer'
import { base_url } from '../../../base_url'
import { get_main_website_teacher_details } from '../../../call_apis'
import { message } from 'antd'
const teacher_id = window.location.pathname.split('/')[2]
export default class ViewTeacher extends React.Component{
  state = {
    teacher:'',
    courses:[]
  }
  getTeacherDetails = async()=>{
    await get_main_website_teacher_details(teacher_id)
    .then(res=>{
      console.log(res.courses)
      this.setState({teacher:res.teacher,courses:res.courses})
    })
    .catch(err=>{
      message.error("Something went wrong")
    })
  }

  componentDidMount(){
      this.getTeacherDetails()
    }
    render(){
        return(
            <div>
        {/*====== PAGE BANNER PART START ======*/}
        <section id="page-banner" className="pt-105 pb-130 bg_cover" data-overlay={8} style={{backgroundImage: 'url(assets/main/page-banner-3.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-banner-cont">
                  <h2>Teacher</h2>
                
                </div> {/* page banner cont */}
              </div>
            </div> {/* row */}
          </div> {/* container */}
        </section>
        {/*====== PAGE BANNER PART ENDS ======*/}
        {/*====== TEACHERS PART START ======*/}
        <section id="teachers-singel" className="pt-70 pb-120 gray-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-8">
                <div className="teachers-left mt-50">
                  <div className="hero">
                    <img src={`${base_url}/static/uploads/${this.state.teacher.profile_picture}`} alt="Teachers" />
                  </div>
                  <div className="name">
                    <h6>{this.state.teacher.name}</h6>
                    <span>{this.state.teacher.title}</span>
                  </div>
                
                  <div className="description">
                    <p>{this.state.teacher.description}</p>
                  </div>
                </div> {/* teachers left */}
              </div>
              <div className="col-lg-8">
                <div className="teachers-right mt-50">
                  <ul className="nav nav-justified" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="active" id="dashboard-tab" data-toggle="tab" href="#dashboard" role="tab" aria-controls="dashboard" aria-selected="true">Dashboard</a>
                    </li>
                    <li className="nav-item">
                      <a id="courses-tab" data-toggle="tab" href="#courses" role="tab" aria-controls="courses" aria-selected="false">Courses</a>
                    </li>
                  
                  </ul> {/* nav */}
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                      <div className="dashboard-cont">
                        <div className="singel-dashboard pt-40">
                          <h5>About</h5>
                          <p>{this.state.teacher.description}</p>
                        </div> {/* singel dashboard */}
                      
                      </div> {/* dashboard cont */}
                    </div>
                    <div className="tab-pane fade" id="courses" role="tabpanel" aria-labelledby="courses-tab">
                      <div className="courses-cont pt-20">
                        <div className="row">
                          {this.state.courses.map((course,index)=>{
                            return <Course data={course} key={index}/>
                          })}

                        

                        </div> {/* row */}
                      </div> {/* courses cont */}
                    </div>
               
                  </div> {/* tab content */}
                </div> {/* teachers right */}
              </div>
            </div> {/* row */}
          </div> {/* container */}
        </section>
      </div>
        )
    }
}
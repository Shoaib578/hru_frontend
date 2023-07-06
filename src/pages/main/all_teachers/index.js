import React from 'react'
import Teacher from '../../../components/main/teacherContainer'
import TeacherContainer from '../../../components/main/teacherContainer'

export default class AllTeachers extends React.Component{
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
            <h2>Teachers</h2>
          
          </div>{" "}
          {/* page banner cont */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== PAGE BANNER PART ENDS ======*/}
  {/*====== TEACHERS PART START ======*/}
  <section id="teachers-page" className="pt-90 pb-120 gray-bg">
    <div className="container">
      <div className="row">
    <TeacherContainer />
      </div>{" "}
    
  
    </div>{" "}
    {/* container */}
  </section>
  {/*====== TEACHERS PART ENDS ======*/}
</>

        )
    }
}
import React from "react";
import Teacher from "../teacherContainer";
import { get_main_website_four_teachers } from "../../../call_apis";

export default class OurTeachersContainer extends React.Component{
    state = {
      teachers:[]
    }
    GetFourTeachers =async()=>{
      await get_main_website_four_teachers()
      .then(res=>{
        this.setState({teachers:res.data})
      })
      .catch(err=>{
        console.log(err)
      })
    }

    componentDidMount(){
      this.GetFourTeachers()
    }
    render(){
        return(
            <>
  {/*====== TEACHERS PART START ======*/}
  <section id="teachers-part" className="pt-70 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="section-title mt-50">
            <h2>Meet Our teachers</h2>
          </div>{" "}
          {/* section title */}
          <div className="teachers-cont">
            <p>
              Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem
              quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis
              sed odio sit amet nibh vulputate cursus a sit amet . Morbi
              accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris.{" "}
              <br /> <br /> auci elit cons equat ipsutis sem nibh id elit. Duis
              sed odio sit amet nibh vulputate cursus a sit amet . Morbi
              accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris
            </p>
            <a href="/teachers" className="main-btn mt-55">
             Load More
            </a>
            <a href="/career_with_us" className="main-btn mt-55 ml-3">
              Career with us
            </a>
          </div>{" "}
          {/* teachers cont */}
        </div>
        <div className="col-lg-6 offset-lg-1">
          <div className="teachers mt-20">
            <div className="row">
             {this.state.teachers.map((data,index)=>{
              return <Teacher key={index} data={data}/>
             })}
             

             
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* teachers */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== TEACHERS PART ENDS ======*/}
</>

        )
    }
}
import React from 'react'
import { Link } from 'react-router-dom'
import { base_url } from '../../base_url'
export default class CourseContainer extends React.Component {
    componentDidMount(){
        console.log("Props")
        console.log(this.props.data)
    }
    render(){
        return(
            <>
            <div class="col-lg-4 col-md-6">
                            <div class="singel-course mt-30">
                                <div class="thum">
                                    <div class="image">
                                        <img src={`${base_url}/static/uploads/${this.props.data?.course_thumbnail}`} alt="Course"/>
                                    </div>
                                    <div class="price">
                                  
                                        <span> {this.props.data?.course_price}$</span>
                                    </div>
                                </div>
                                <div class="cont">
                                  
                                  
                                    <a href={`/course/${this.props.data.course_id}`}><h4>{this.props.data?.course_title}</h4></a>
                                    <div class="course-teacher">
                                        <div class="thum">
                                            <a href={`/teacher/${this.props.data?.panel_userid}`}><img src={`${base_url}/static/uploads/${this.props.data?.profile_picture}`} alt="teacher"/></a>
                                        </div>
                                        <div class="name" style={{top:3}}>
                                            <a href={`/teacher/${this.props.data?.panel_userid}`} ><h6>{this.props.data?.name}</h6></a>
                                        </div>
                                        <div class="admin">
                                            <ul>
                                                <li><i class="fa fa-user"></i><span>{this.props.data.students_count}</span></li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
            
            </>
        )
    }
}
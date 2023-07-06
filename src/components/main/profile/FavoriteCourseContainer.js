import React from 'react'
import { base_url } from '../../../base_url'
export default class FavoriteCourseContainer extends React.Component {
    render(){
        return(
            <>
            <div class="col-lg-5 col-md-6">
                            <div class="singel-course mt-30">
                                <div class="thum">
                                    <div class="image">
                                        <img src={base_url+"assets/main/images/course/cu-2.jpg"} alt="Course"/>
                                    </div>
                                    <div class="price">
                                  
                                        <span> 20$</span>
                                    </div>
                                </div>
                                <div class="cont">
                                  
                                  
                                    <a href="/course/2"><h4>Learn basis javascirpt from start for beginner</h4></a>
                                    <div class="course-teacher">
                                        <div class="thum">
                                            <a href="#"><img src={base_url+"assets/main/images/course/teacher/t-2.jpg"} alt="teacher"/></a>
                                        </div>
                                        <div class="name" style={{top:3}}>
                                            <a href="/teacher/2" ><h6>Mark anthem</h6></a>
                                        </div>
                                        <div class="admin">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-user"></i><span>31</span></a></li>
                                                <li><a href="#"><i class="fa fa-heart"></i><span>10</span></a></li>
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
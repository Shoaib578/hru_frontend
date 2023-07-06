import React from "react";
import FavoriteCourseContainer from "./FavoriteCourseContainer";

export default class FavoriteCourses extends React.Component {
    render(){
        return(
            <div className="row course-slied ">
               <FavoriteCourseContainer />
               <FavoriteCourseContainer /> 
               <FavoriteCourseContainer /> 
               <FavoriteCourseContainer /> 
               <FavoriteCourseContainer /> 

            </div>
        )
    }
}
import React from 'react'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
  } from "react-router-dom";
import LandingPage from '../pages/main/landing_page';
import TopBar from '../components/main/top_bar';
import ViewCourse from '../pages/main/view_course';
import ViewTeacher from '../pages/main/view_teacher';
import AllTeachers from '../pages/main/all_teachers';
import Courses from '../pages/main/courses';
import OwnedCourses from '../pages/main/owned_courses';
import AboutUs from '../pages/main/about_us';
import Profile from '../pages/main/profile';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import CareerWithUs from '../pages/main/career_with_us';
import Teachers from '../pages/panel/admin/teachers';
import ViewTeacherCourses from '../pages/panel/admin/teachers/view_teacher_courses';
import Account from '../pages/panel/admin/account';
import User from '../pages/panel/admin/users';
import FeaturedCourses  from '../pages/panel/admin/featured_courses';
import PanelLogin from '../pages/panel/panel_login';
import TeacherApplications from '../pages/panel/admin/teacher_applications';
import TeacherAccount from '../pages/panel/teacher/account';
import TeacherCourses from '../pages/panel/teacher/courses';
import ManageTeacherCourseVideos from '../pages/panel/teacher/manage_teacher_course_videos';
import EditCourse from '../pages/panel/teacher/courses/edit_course';
import Coupons from '../pages/panel/admin/coupons';
import EnrollCourse from '../pages/main/view_course/enroll_course';
import BuyCourse from '../pages/main/view_course/buy_course';



export default class Routes extends React.Component{
    render(){
        return <Router>
            {!window.location.pathname.includes('panel')?<TopBar />:null}
            <Switch>

              {/* Main Website Routes Start */}
              <Route exact path="/"  element={<LandingPage />}/>
              <Route exact path="/career_with_us"  element={<CareerWithUs />}/>

              <Route exact path="/courses"  element={<Courses />}/>
              <Route exact path="/owned_courses"  element={<OwnedCourses />}/>
              <Route exact path="/about"  element={<AboutUs />}/>
              <Route exact path="/profile"  element={<Profile />}/>
            
              <Route exact path="/course/:id"  element={<ViewCourse />}/>
              <Route exact path="/teachers"  element={<AllTeachers />}/>
              <Route exact path="/enroll_course/:id"  element={<EnrollCourse />}/>
              <Route exact path="/buy_course/:id"  element={<BuyCourse />}/>

              <Route exact path="/teacher/:id"  element={<ViewTeacher />}/>

              {/* Main Website Routes End */}

              {/* Auth Routes Start */}
              <Route exact path="/login"  element={<Login />}/>
              <Route exact path="/register"  element={<Register />}/>
              
              {/* Auth Routes Start */}
            

            {/* Panel Login */}
            <Route exact path="/panel/login"  element={<PanelLogin />}/>


            {/* Admin Panel Start  */}
            
            <Route exact path="/panel/admin/teachers"  element={<Teachers />}/>
            <Route exact path="/panel/admin/teacher/:id/courses"  element={<ViewTeacherCourses />}/>
            <Route exact path="/panel/admin/"  element={<Account />}/>
            <Route exact path="/panel/admin/users"  element={<User />}/>
            <Route exact path="/panel/admin/coupons"  element={<Coupons />}/>

            <Route exact path="/panel/admin/featured_courses"  element={<FeaturedCourses />}/>
            <Route exact path="/panel/admin/teacher_applications"  element={<TeacherApplications />}/>


          {/* Teacher Panel Start */}

          <Route exact path='/panel/teacher/' element={<TeacherAccount />}/>
          <Route exact path='/panel/teacher/teacher_courses' element={<TeacherCourses />} />
          <Route exact path='/panel/teacher/manage_course_videos/:id' element={<ManageTeacherCourseVideos />} />
          <Route exact path='/panel/teacher/course/edit/:id' element={<EditCourse />} />

          {/* Teacher Panel End */}

            </Switch>
      </Router>
    }
}
import React from 'react'

import AboutUsContainer from '../../../components/main/lading_page/about_us_container.js'
import Slider from '../../../components/main/lading_page/slider'
import ServiceProvide from '../../../components/main/lading_page/services_provide'
import FeaturedCourses from '../../../components/main/lading_page/featured_courses.js'
import OurTeachersContainer from '../../../components/main/lading_page/our_teachers_container.js'
import ContactUsContainer from '../../../components/main/lading_page/contact_us_container.js'
import Footer from '../../../components/main/footer.js'
export default class LandingPage extends React.Component {
    render(){
        return (
            <>
              <Slider />  
              <ServiceProvide />
              <AboutUsContainer />
              <FeaturedCourses />
              <OurTeachersContainer />
              <ContactUsContainer />
              <Footer />
            </>
        )
    }
}
import React from 'react'

export default class AboutUs extends React.Component{
    render(){
        return(
            <div>
            {/*====== PAGE BANNER PART START ======*/}
            <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="page-banner-cont">
                      <h2>About Us</h2>
                  
                    </div>  {/* page banner cont */}
                  </div>
                </div> {/* row */}
              </div> {/* container */}
            </section>
            {/*====== PAGE BANNER PART ENDS ======*/}
            {/*====== ABOUT PART START ======*/}
            <section id="about-page" className="pt-70 pb-110">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="section-title mt-50">
                      <h5>About us</h5>
                      <h2>Welcome to Edubin </h2>
                    </div> {/* section title */}
                    <div className="about-cont">
                      <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris. <br /> <br /> auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris</p>
                    </div>
                  </div> {/* about cont */}
                  <div className="col-lg-7">
                    <div className="about-image mt-50">
                      <img src="assets/main/images/about/about-2.jpg" alt="About" />
                    </div>  {/* about imag */}
                  </div> 
                </div> {/* row */}
                <div className="about-items pt-60">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="about-singel-items mt-30">
                        <span>01</span>
                        <h4>Why Choose us</h4>
                        <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit sollicitudirem quibibendum auci</p>
                      </div> {/* about singel */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="about-singel-items mt-30">
                        <span>02</span>
                        <h4>Our Mission</h4>
                        <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit sollicitudirem quibibendum auci</p>
                      </div> {/* about singel */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="about-singel-items mt-30">
                        <span>03</span>
                        <h4>Our vission</h4>
                        <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit sollicitudirem quibibendum auci</p>
                      </div> {/* about singel */}
                    </div>
                  </div> {/* row */}
                </div> {/* about items */}
              </div> {/* container */}
            </section>
            {/*====== ABOUT PART ENDS ======*/}
          </div>
        )
    }
}
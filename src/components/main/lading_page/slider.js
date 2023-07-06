import React from "react";
const user = await localStorage.getItem('user')

export default class Slider extends React.Component {

    render(){
        return(
            <>
  {/*====== SLIDER PART START ======*/}
  <section id="slider-part">
    <div
      className="single-slider bg_cover pt-150"
      style={{ backgroundImage: "url(assets/main/images/slider/s-1.jpg)" }}
      data-overlay={7}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-9">
            <div className="slider-cont">
              <h1 data-animation="bounceInLeft" data-delay="1s">
                Welcome To High Rise University
              </h1>
              <p data-animation="fadeInUp" data-delay="1.3s">
                Donec vitae sapien ut libearo venenatis faucibus. Nullam quis
                ante. Etiam sit amet orci eget eros faucibus tincidunt Sed
                fringilla mauri amet nibh.
              </p>
              <ul>
                <li>
                  <a
                    data-animation="fadeInUp"
                    data-delay="1.9s"
                    className="main-btn main-btn-2"
                    href={!user?"/register":"/courses"}
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </div>
   
  </section>
  {/*====== SLIDER PART ENDS ======*/}
</>

        )
    }
}
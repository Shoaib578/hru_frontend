import React  from "react";

export default class AboutUsContainer extends React.Component{
    render(){
        return (
            <>
  {/*====== ABOUT PART START ======*/}
  <section id="about-part" className="pt-65">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="section-title mt-50">
            <h5>About us</h5>
            <h2>Welcome to High Rise University</h2>
          </div>{" "}
          {/* section title */}
          <div className="about-cont">
            <p>
              Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem
              quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis
              sed odio sit amet nibh vulputate cursus a sit amet . Morbi
              accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris.{" "}
              <br /> <br /> auci elit cons equat ipsutis sem nibh id elit. Duis
              sed odio sit amet nibh vulputate cursus a sit amet . Morbi
              accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris
            </p>
            <a href="/about" className="main-btn mt-55">
              Learn More
            </a>
          </div>
        </div>{" "}
        {/* about cont */}
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
    <div className="about-bg">
      <img src="assets/main/images/about/bg-1.png" alt="About" />
    </div>
  </section>
  {/*====== ABOUT PART ENDS ======*/}
</>

        )
    }
}
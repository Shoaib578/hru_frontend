import React from 'react'

export default class Footer extends React.Component {
    render(){
        return(
            <>
  {/*====== FOOTER PART START ======*/}
  <footer id="footer-part">
    <div className="footer-top pt-40 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-about mt-40">
              <div className="logo">
                <a href="#">
                  <img src={require('./logo.png')} style={{width:150,height:100}} alt="Logo" />
                </a>
              </div>
              <p>
                Gravida nibh vel velit auctor aliquetn quibibendum auci elit
                cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh
                vulputate.
              </p>
              <ul className="mt-20">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* footer about */}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-link mt-40">
              <div className="footer-title pb-25">
                <h6>Sitemap</h6>
              </div>
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-angle-right" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about">
                    <i className="fa fa-angle-right" />
                    About us
                  </a>
                </li>
                <li>
                  <a href="/courses">
                    <i className="fa fa-angle-right" />
                    Courses
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* footer link */}
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-link support mt-40">
              <div className="footer-title pb-25">
                <h6>Support</h6>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right" />
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right" />
                    Policy
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* support */}
          </div>
      
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* footer top */}
  </footer>
  {/*====== FOOTER PART ENDS ======*/}




 


  {/*====== BACK TO TP PART START ======*/}
  <a href="#" className="back-to-top">
    <i className="fa fa-angle-up" />
  </a>
  {/*====== BACK TO TP PART ENDS ======*/}


  
</>

        )
    }
}
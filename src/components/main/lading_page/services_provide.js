import React from 'react'

export default class ServiceProvide extends React.Component{
    render(){
        return(
            <section id="category-part">
  <div className="container">
    <div className="category pt-40 pb-80">
      <div className="row">
        <div className="col-lg-4">
          <div className="category-text pt-40">
            <h2>Best platform to learn everything</h2>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
          <div className="row category-slied mt-40">
            <div className="col-lg-4">
              <a href="#">
                <span className="singel-category text-center color-1">
                  <span className="icon">
                    <img src="assets/main/images/all-icon/ctg-1.png" alt="Icon" />
                  </span>
                  <span className="cont">
                    <span>Language</span>
                  </span>
                </span>
                {/* singel category */}
              </a>
            </div>
            <div className="col-lg-4">
              <a href="#">
                <span className="singel-category text-center color-2">
                  <span className="icon">
                    <img src="assets/main/images/all-icon/ctg-2.png" alt="Icon" />
                  </span>
                  <span className="cont">
                    <span>Business</span>
                  </span>
                </span>
                {/* singel category */}
              </a>
            </div>
            <div className="col-lg-4">
              <a href="#">
                <span className="singel-category text-center color-3">
                  <span className="icon">
                    <img src="assets/main/images/all-icon/ctg-3.png" alt="Icon" />
                  </span>
                  <span className="cont">
                    <span>Literature</span>
                  </span>
                </span>
                {/* singel category */}
              </a>
            </div>
           
          </div>
          {/* category slied */}
        </div>
      </div>
      
    </div>
  </div>
  {/* container */}
</section>

        )
    }
}
import React from 'react'

export default class ContactUsContainer extends React.Component {
    render(){
        return(
            <>
            {/*====== CONTACT PART START ======*/}
            <section style={{ width: "100%" }} className="pt-90 pb-120 gray-bg">
              <div className="container">
                <div className="col-lg-7">
                  <div className="contact-from mt-30">
                    <div className="section-title">
                      <h5>Contact Us</h5>
                      <h2>Keep in touch</h2>
                    </div>
                    {/* section title */}
                    <div className="main-form pt-45">
                      <form
                        id="contact-form"
                        action="#"
                        method="post"
                        data-toggle="validator"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="singel-form form-group">
                              <input
                                name="name"
                                type="text"
                                placeholder="Your name"
                                data-error="Name is required."
                                required="required"
                              />
                              <div className="help-block with-errors" />
                            </div>
                            {/* singel form */}
                          </div>
                          <div className="col-md-6">
                            <div className="singel-form form-group">
                              <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                data-error="Valid email is required."
                                required="required"
                              />
                              <div className="help-block with-errors" />
                            </div>
                            {/* singel form */}
                          </div>
                          <div className="col-md-6">
                            <div className="singel-form form-group">
                              <input
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                data-error="Subject is required."
                                required="required"
                              />
                              <div className="help-block with-errors" />
                            </div>
                            {/* singel form */}
                          </div>
                          <div className="col-md-6">
                            <div className="singel-form form-group">
                              <input
                                name="phone"
                                type="text"
                                placeholder="Phone"
                                data-error="Phone is required."
                                required="required"
                              />
                              <div className="help-block with-errors" />
                            </div>
                            {/* singel form */}
                          </div>
                          <div className="col-md-12">
                            <div className="singel-form form-group">
                              <textarea
                                name="messege"
                                placeholder="Messege"
                                data-error="Please,leave us a message."
                                required="required"
                                defaultValue={""}
                              />
                              <div className="help-block with-errors" />
                            </div>
                            {/* singel form */}
                          </div>
                          <p className="form-message" />
                          <div className="col-md-12">
                            <div className="singel-form">
                              <button type="submit" className="main-btn">
                                Send
                              </button>
                            </div>
                            {/* singel form */}
                          </div>
                        </div>
                        {/* row */}
                      </form>
                    </div>
                    {/* main form */}
                  </div>
                  {/*  contact from */}
                </div>
              </div>
              {/* container */}
            </section>
            {/*====== CONTACT PART ENDS ======*/}
          </>
          
        )
    }
}
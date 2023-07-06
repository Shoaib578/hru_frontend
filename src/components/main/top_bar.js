import React from 'react'
import { base_url } from '../../base_url'

const user  = localStorage.getItem('user')


export default class TopBar extends React.Component {
   state = {
    want_to_search:false
   }
   logout = async()=>{
    await localStorage.removeItem('user')
    window.location = "/login"
   }
    render(){
        return(
            <>
  {/*====== HEADER PART START ======*/}
  <header id="header-part">
    <div className="header-logo-support pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="logo">
              <a href="/">
                <img src={require('./logo.png')} style={{width:150,height:100}} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="support-button float-right d-none d-md-block">
              <div className="support float-left"></div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
    </div>
    {/* header logo support */}
    <div className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-9 col-8">
            <nav className="navbar navbar-expand-lg" style={{paddingLeft:20,borderRadius:20,marginTop:8,marginBottom:8}}>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="about.html">Courses</a>
                    <ul class="sub-menu">
                          <li><a href="/courses">Our Courses</a></li>
                          <li><a href="/owned_courses">Owned Courses</a></li>
                    </ul>
                  </li>
                
                  <li className="nav-item">
                    <a href="/about">About us</a>
                  </li>


                  {!user?<li className="nav-item">
                    <a href="/login">Login</a>
                  </li>:null}
                  {!user?<li className="nav-item">
                    <a href="/register">Register</a>
                  </li>:null}
                  

                  {user?<li className="nav-item">
                    <a onClick={()=>{
                      this.logout()
                    }} href="#">Logout</a>
                  </li>:null}


                </ul>
              </div>
            </nav>
            {/* nav */}
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3 col-4">
            <div className="right-icon text-right">
              <ul>
                
                {user?<li>
                  <a href="/profile">
                    <i className="fa fa-user-circle" style={{fontSize:25}}/>
                   
                  </a>
                </li>:null}
              </ul>
            </div>
            {/* right icon */}
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
    </div>
  </header>
  {/*====== HEADER PART ENDS ======*/}
  <>
  {/*====== SEARCH BOX PART START ======*/}
  <div className="search-box " style={{display:this.state.want_to_search == false?'none':''}}>
    <div className="serach-form">
      <div onClick={()=>this.setState({want_to_search:false})} className="closebtn">
        <span />
        <span />
      </div>
      <form action="#">
        <input type="text" placeholder="Search by keyword" />
        <button>
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
    {/* serach form */}
  </div>
  {/*====== SEARCH BOX PART ENDS ======*/}
</>

</>

        )
    }
}
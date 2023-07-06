import React from 'react'
import {CSSTransition} from 'react-transition-group';

export default class SideBar extends React.Component{
    state ={
        visible:true
    }
    render(){
        return(
         
            <>
          
            <div className="nav-item   ml-2" style={{zIndex:1000,position:'fixed',marginTop:20}}>
            

            <div onClick={()=>{
                if(this.state.visible){
                    this.setState({visible:false})
                }else{
                    this.setState({visible:true})

                }
            }} style={{cursor:'pointer',marginLeft:20,fontSize:25}}>
             <i class="fa fa-bars" style={{color:this.state.visible?'white':'black'}}></i>
           </div>


           
          </div>
            
            
          <CSSTransition
          in={this.state.visible}
          timeout={300}
          classNames="display"
          unmountOnExit
        >
            
            <aside
          style={{zIndex:999,display:this.state.visible==false?'none':''}}
  className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
    >
  <div className="sidenav-header">

  <span className=" font-weight-bold text-white" style={{marginLeft:50,marginTop:20}}>
       Wallet : 24$
      </span>
    

     
      
    
  </div>
  <hr className="horizontal light mt-0 mb-2" />
  <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
    <ul className="navbar-nav">

    <li className="nav-item">
        <a className="nav-link text-white " href="/panel/admin/">
          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
          <i class='fa fa-user' ></i>

          </div>
          <span className="nav-link-text ms-1">Account</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link text-white " href="/panel/admin/teachers">
          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
          <i class='fas fa-chalkboard-teacher' ></i>

          </div>
          <span className="nav-link-text ms-1">Teachers</span>
        </a>
      </li>



      <li className="nav-item">
        <a className="nav-link text-white " href="/panel/admin/users">
          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
          <i class='fas fa-user-graduate' ></i>

          </div>
          <span className="nav-link-text ms-1">Users</span>
        </a>
      </li>


    

      <li className="nav-item">
        <a className="nav-link text-white " href="/panel/admin/featured_courses">
          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
          <i class='fas fa-book-open' ></i>

          </div>
          <span className="nav-link-text ms-1">Featured Courses</span>
        </a>
      </li>


      <li className="nav-item">
        <a className="nav-link text-white " href="/panel/admin/teacher_applications">
          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
          <i class='fa fa-paper-plane' ></i>

          </div>
          <span className="nav-link-text ms-1">Applications for Teaching</span>
        </a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link text-white " href="/panel/admin/coupons">
          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
          <i class='fa fa-paper-plane' ></i>

          </div>
          <span className="nav-link-text ms-1">Coupons</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white " href="#" onClick={()=>{
          localStorage.removeItem('admin')
          window.location = "/panel/login"
        }}>
          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
          <i class='fa fa-sign-out' ></i>

          </div>
          <span className="nav-link-text ms-1">Logout</span>
        </a>
      </li>
    </ul>
  </div>
 
</aside>

</CSSTransition>

</>

        )
    }
}
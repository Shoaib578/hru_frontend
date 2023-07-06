import React from 'react'
import SideBar from '../../../../components/panel/admin/sidebar'
import { add_coupon, delete_coupon, get_all_coupons, get_courses_for_dropdown } from '../../../../call_apis'
import { message } from 'antd'
const admin = localStorage.getItem('admin')
export default class Coupons extends React.Component{
    state = {
        coupons:[],
        course_id:'',
        coupon_code:'',
        discount_percentage:'',
        dropdown_courses:[]
    }

    getCoupons = async()=>{
        await get_all_coupons()
        .then(res=>{
            this.setState({coupons:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    getAllCoursesDropdown = async()=>{
        await get_courses_for_dropdown()
        .then(res=>{
          console.log(res.data)
          this.setState({dropdown_courses:res.data})
        })
        .catch(err=>{
          console.log(err)
        })
      }


      AddCoupon = async()=>{
        if(this.state.course_id.length<1 || this.state.coupon_code.length<1 || this.state.discount_percentage.length<1){
            alert("All the fields are required")
            return 
        }


        const {course_id,coupon_code,discount_percentage} = this.state
        await add_coupon(coupon_code,discount_percentage,course_id)
        .then(res=>{
            if(res.is_added){
                alert("Added successfully")
                this.getCoupons()
            }

        })
        .catch(err=>{
            alert("Something Went Wrong")
        })
      }

    componentDidMount(){
        if(!admin){
            window.location = "/panel/login"
            return 
          }
        this.getCoupons()
        this.getAllCoursesDropdown()
    }
    render(){
        return(
            <>
             <SideBar />

            
<main className="main-content border-radius-lg ">
 
  <div className="container-fluid py-4">
   
    
  <div className="row mt-4">
    
  <div className="col-lg-12">
  <div className="card z-index-2">
  <div className="container-fluid py-4">




    <div className="row">
        <div className="col-12">
        <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <button className='float-right btn btn-success mt-3 mr-3' data-toggle="modal" data-target="#exampleModal">Add</button>
           
            
            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Coupons-{this.state.coupons.length}</h6>

            </div>

            </div>
            <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                <thead>
                    <tr>
                    
                   
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        coupon code 
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                       Course id
                    </th>

                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        discount percentage
                    </th>
                   



                    <th className="text-secondary opacity-7" />
                   
                    </tr>
                </thead>
                <tbody>
                  {this.state.coupons.map((coupon,index)=>{
                    return <tr>
                 


                    <td>
                    <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{coupon.coupon_code}</h6>
                           
                        </div>
                    </td>


                    <td>
                    <div className="d-flex flex-column justify-content-center">
                           <a href={`http://localhost:3000/course/${coupon.course_id}`} target="_blank"> <h6 className="mb-0 text-sm">{coupon.course_id}</h6></a>
                           
                        </div>
                    </td>

                    <td>
                    <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{coupon.discount_percentage}</h6>
                           
                        </div>
                    </td>

                  
                  
                   

                 

                   

                    <td className="align-middle">
                        <a
                        style={{cursor: 'pointer'}}
                        className="text-secondary font-weight-bold text-xs"
                        onClick={async()=>{
                         await delete_coupon(coupon.coupon_id)
                         .then(res=>{
                          if(res.is_deleted){
                            message.success("Coupon deleted successfully")
                            this.getCoupons()
                          }
                         })
                         .catch(err=>{
                          message.error("Something went wrong")

                         })
                        }}
                        >
                        Delete
                        </a>
                    </td>
                    </tr>
                  })}
           
                 
                    
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    </div>
 
 
    </div>
    </div>
    </div>
    </div>
    </div>


    {/* Modal */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Coupon</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="main-form ">
                   
                    <br />
                      <div className="row">
                        <div className="col-md-12">
                          <div className="singel-form form-group">

                            <input className='form-control' placeholder='Coupon Code'
                               style={{backgroundColor:'gray',padding:10}}
                               onChange={(val)=>{
                                this.setState({coupon_code:val.target.value})
                            }}/>

                            <br />
                            <input className='form-control' placeholder='Discount percentage'
                               style={{backgroundColor:'gray',padding:10}}
                               onChange={(val)=>{
                                this.setState({discount_percentage:val.target.value})
                            }}/>

                            <br />
                            
                            <select
                              name="course_id"
                              className='form-control'
                              onChange={(val)=>{
                                this.setState({course_id:val.target.value})
                              }}
                               style={{backgroundColor:'gray',padding:10}}
                              >
                                <option>Choose Course</option>
                                {this.state.dropdown_courses.map((data,index)=>{
                                return <option value={data.course_id}>{data.course_title}</option>

                                })}

                            </select>
                           
                          </div>
                          {/* singel form */}
                        </div>
                     
            
                      </div>
                      {/* row */}
                  
                  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" onClick={this.AddCoupon} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



</main>
            </>
        )
    }
}
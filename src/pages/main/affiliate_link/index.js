import React from "react";
import { add_link, delete_link, get_links } from "../../../call_apis";
import { message } from "antd";
const user = localStorage.getItem("user")
const parse = JSON.parse(user)
export default class AffiliateLinks extends React.Component{
    state = {
      data:[],
      link:'',
      course_id:''
    }
    GetLinks = async()=>{
      await get_links(parse.user_id)
      .then(res=>{
        this.setState({data:res.data})
      })
      .catch(err=>{
        message.error("Something went wrong")
      })
    }

    AddLink = async()=>{

      if(this.state.link.length<1 || this.state.course_id.length<1){
        alert("Link and Course ID Field is required")
        return
      }

      fetch(`https://api.shrtco.de/v2/shorten?url=${this.state.link}`)
      .then(data=>data.json())
      .then(async(first_link)=>{

        console.log(first_link)

        console.log(first_link)
        const generate_short_link = await `http://127.0.0.1:3000/short_link_course/${first_link.result.code}`
        console.log(generate_short_link)

        fetch(`https://api.shrtco.de/v2/shorten?url=${generate_short_link}`)
        .then(_d=>_d.json())
        .then(async(second_link)=>{

          await add_link(second_link.result.full_short_link,this.state.course_id,parse.user_id,first_link.result.code)
          .then(res=>{
            if(res.is_added){
              this.GetLinks()
              alert("Link Added Successfully")
            }
          })
          .catch(err=>{
            alert("Something Went Wrong")
          })
        })
        .catch(err=>{
          alert("Something Went Wrong")
        })


       
      })
      .catch(err=>{
        console.log("First Error"+err.message)
        alert("Something Went Wrong")
      })
     
    }


    DeleteLink = async(link_id)=>{
      await delete_link(link_id)
      .then(res=>{
        message.success("Message Delete Successfully")
        this.GetLinks()

      })
      .catch(err=>{
        message.error("Something Went Wrong")
      })
    }

    componentDidMount(){
      if(user){
        this.GetLinks()

      }else{
        window.location = "/login"
      }
    }
    render(){
        return(
            <div style={{padding:40}}>
                <table class="table">
            <thead>
                <tr>
                <th scope="col">Link</th>
                <th scope="col">#</th>
                <th scope="col">
                <a href="#" className="btn btn-primary"  data-toggle="modal" data-target="#exampleModal">Add</a>
                </th>

               
                </tr>
            </thead>
            <tbody>
                {this.state.data.map((item,index)=>{
                    return <tr>
                    <th scope="row">{item.link}</th>
                    <td>
                        <a href="#"  onClick={()=>this.DeleteLink(item.shared_link_id)} className="btn btn-danger">Delete</a>
                    </td>

                    </tr>
                })}
               
                
            </tbody>
            </table>


           
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Affiliate Link</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <input type="text" className="form-control" onChange={(val)=>this.setState({link:val.target.value})} placeholder="Link" style={{backgroundColor:'gray',paddingLeft:10}}/>
       <input type="number" className="form-control" onChange={(val)=>this.setState({course_id:val.target.value})} placeholder="Coruse ID" style={{backgroundColor:'gray',paddingLeft:10,marginTop:5}}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" onClick={()=>this.AddLink()} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}
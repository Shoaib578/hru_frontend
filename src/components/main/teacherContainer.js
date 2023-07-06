import React from 'react'
import { base_url } from '../../base_url'

export default class TeacherContainer extends React.Component {
    render(){
        return(
            <div className="col-sm-6">
                <div className="singel-teachers mt-30 text-center">
                  <div className="image">
                    <img src={`${base_url}/static/uploads/${this.props.data.profile_picture}`} alt="Teachers" style={{height:300}}/>
                  </div>
                  <div className="cont">
                    <a href={`/teacher/${this.props.data.panel_userid}`}>
                      <h6>{this.props.data.name}</h6>
                    </a>
                    <span>{this.props.data.title}</span>
                  </div>
                </div>{" "}
                {/* singel teachers */}
              </div>
        )
    }
}
import React from "react";
import './wallet.css'
export default class Wallet extends React.Component{
    render(){
        return (
            <div>
                <div  style={{padding:20,}}>
                    
                    
                    <div style={{backgroundColor:'#F0F0F0',borderRadius:10,padding:20,marginTop:10}}>
                        <h3>Current Amount to Withdraw</h3>
                       
                        <br />
                        <h3 style={{fontWeight:'lighter'}}>20$</h3>

                        <button  data-toggle="modal" data-target="#exampleModal" className="btn btn-success" style={{width:'100%',marginTop:10}}>Withdraw</button>
                    </div>



                </div>


         

            </div>
        )
    }
}
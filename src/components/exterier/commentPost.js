// to be able to add new checkers - available after successful login
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {Link } from "react-router-dom";
import "./commentPost.css";

 const CreateLOG = gql`

mutation IsuueLog(
    $SName:String!
    $tid:ID!
    $TSellingLocationID:ID!
    $Tdescription:String!
    $Tlogindetail:String!
    $TTeamviewer:String! 
    $Tenvironemrnt: String!
    $ThospRet: String!
  ) {
    createIssuelogged(
      input: {
        SName:$SName
      tid:$tid
      TSellingLocationID:$TSellingLocationID
      Tdescription:$Tdescription
      Tlogindetail:$Tlogindetail
      TTeamviewer:$TTeamviewer
      ThospRet:$ThospRet
      Tenvironemrnt:$Tenvironemrnt
    }
    ) {id}
  }`
  
class commentPost extends Component {
 constructor(props) {
   super(props);
  this.state = {
    SName: '',
    tid: '',
    TSellingLocationID: '',
    Tdescription: '',
    Tlogindetail: '',
    TTeamviewer: '',
    ThospRet: '',
    Tenvironemrnt: '',
    sent: false,
    error: false
  
    
  };
 }  onInputChange(e) {
  this.setState({ [e.target.SName]: e.target.value} )
  }
  onClick(e) {
    const name = this.state.SName;
e.preventDefault();
const gatewayUrl = 'https://hooks.slack.com/services/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';
fetch(gatewayUrl, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        SName: { name }
}).then(
    () => { this.setState({ sent: true }); },
    () => { this.setState({ error: true }); }) }
);
  }


  render() {
    const { Tdescription, TSellingLocationID, tid, Tlogindetail, TTeamviewer, Tenvironemrnt, ThospRet, SName} = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
            
         <h2>Please full in the following fields below.</h2>
                 <ol>
                     <li>TenantID</li>
                     <li>SellingLocationID</li>
                     <li>Login details of user experiencing a issue- john@gmail:Tall0rder</li>
                     <li>Teamviewer Details(ID:PASSWORD)</li>
                     <li>What is the issue you are experiencing</li>
                     </ol>         
                     <p>Make sure you fill in everything!!! if there is no info to provide please ad an NAN to the fields</p>       
                     <input
            className="mb2"
            value={SName}
            onChange={e => this.setState({ SName: e.target.value })}
            type="text"
            placeholder="Support Technicians  Name"
          />
       <form>
        <input
            className="mb2"
            value={tid}
            onChange={e => this.setState({ tid: e.target.value })}
            type="text"
            placeholder="TID"
          />
          <input
            className="mb2"
            value={TSellingLocationID}
            onChange={e => this.setState({ TSellingLocationID:e.target.value})}
            type="text"
            placeholder="Tenant SellingLocationID & StockLocationID"
          />
            <input
            className="mb2"
            value={Tlogindetail}
            onChange={e => this.setState({ Tlogindetail:e.target.value })}
            type="text"
            placeholder="Login details experiencing the issue if applicable"
            
          />
           <input
            className="mb2"
            value={TTeamviewer}
            onChange={e => this.setState({ TTeamviewer:e.target.value})}
            type="text"
            placeholder="TeamViewer Details (ID:PASSWORD)"
          />
           <input
            className="mb2"
            value={Tdescription}
            onChange={e => this.setState({ Tdescription:e.target.value})}
            type="text"
            placeholder="What is the issue is you are currently experiencing"
          />
           <input
            className="mb2"
            value={Tenvironemrnt}
            onChange={e => this.setState({ Tenvironemrnt:e.target.value})}
            type="text"
            placeholder="Setup Master | Independant or Master & Slave"
          />
           <input
            className="mb2"
            value={ThospRet}
            onChange={e => this.setState({ ThospRet:e.target.value})}
            type="text"
            placeholder="Hospitality or Retail"
          />
          </form>
        </div>
        <div className="wrapper">  <Mutation mutation={CreateLOG} variables={{SName, Tdescription, TSellingLocationID, tid, Tlogindetail, TTeamviewer, Tenvironemrnt, ThospRet}}>
  {postMutation => <button onClick = {postMutation} >Submit</button>}   
</Mutation>
</div>
<div className="rapper">
       <Link to="/"><button >Back to Home</button></Link>    
       </div>   
     
      </div>   
    )
  }
}

export default commentPost



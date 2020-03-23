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

class NewQuota extends Component {
  state = {
    SName: '',
    tid: '',
    TSellingLocationID: '',
    Tdescription: '',
    Tlogindetail: '',
    TTeamviewer: '',
    ThospRet:'',
    Tenvironemrnt:''
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
                     <p>Make sure you fill in everything!!! if there is no info to provide please ad Null to the fields</p>       
                     <input
            className="mb2"
            value={SName}
            onChange={e => this.setState({ SName: e.target.value })}
            type="text"
            placeholder="Support Name"
          />
       
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
            placeholder="TSellingLocationID"
          />
            <input
            className="mb2"
            value={Tlogindetail}
            onChange={e => this.setState({ Tlogindetail:e.target.value })}
            type="text"
            placeholder="Login Details experiencing the issue"
            
          />
           <input
            className="mb2"
            value={TTeamviewer}
            onChange={e => this.setState({ TTeamviewer:e.target.value})}
            type="text"
            placeholder="TeamViewer Details(ID:PASSWORD)"
          />
           <input
            className="mb2"
            value={Tdescription}
            onChange={e => this.setState({ Tdescription:e.target.value})}
            type="text"
            placeholder="What the issue is you are currently experiencing"
          />
           <input
            className="mb2"
            value={Tenvironemrnt}
            onChange={e => this.setState({ Tenvironemrnt:e.target.value})}
            type="text"
            placeholder="Setup- Master|Independant or Master&Slave"
          />
           <input
            className="mb2"
            value={ThospRet}
            onChange={e => this.setState({ ThospRet:e.target.value})}
            type="text"
            placeholder="Hospitality or Retail"
          />
        </div>
        <div className="wrapper">  <Mutation mutation={CreateLOG} variables={{SName, Tdescription, TSellingLocationID, tid, Tlogindetail, TTeamviewer, Tenvironemrnt, ThospRet}}>
  {postMutation => <button onClick = {postMutation} >Submit</button>}   
</Mutation>
</div>
<div className="rapper">
       <Link to="/"><button >Back to checklist</button></Link>    
       </div>   
     
      </div>   
    )
  }
}

export default NewQuota



import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {Link } from "react-router-dom";
import "./exterier/commentPost.css";


const Signups = gql`
mutation createSu (
    $name: String!
    $email: String!
  	$password: String!
) {
  createSignup(
    input: {
      name: $name
      email: $email
      password: $password
    }
  ) {
    id
  }
}`

class SSignup extends Component {
state = {
name: '',
email:'',
password:''
}

handleChange = (e) => {
const {name, value} = e.target;
this.setState({
    [name]: value
});
}




render()
{ 
    const { password, email, name} = this.state;
    return (  
    <div>
    <div className="flex flex-column mt3">
    <div className="true" >Create new Staff</div>
    <input
        className="mb2"
        value={name}
        onChange={e => this.setState({ name: e.target.value })}
        type="text"
        placeholder="name"
      />
      <input
        className="mb2"
        value={email}
        onChange={e => this.setState({ email:e.target.value})}
        type="text"
        placeholder="Please enter valid email"
      />
<input
        className="mb2"
        value={password}
        onChange={e => this.setState({ password:e.target.value})}
        type="text"
        placeholder="Please enter valid password"
      />
    </div>
    <div className="Subiedooo">
    <Mutation mutation={Signups} variables={{ password, name, email }}>
{postMutation => <button onClick = {postMutation} >Submit</button>}
</Mutation>
</div>
<div className="scoob">
   <Link to="/Multiplepat"><button >Back to Login</button></Link>
   </div>
  </div>)


    
    
}




}


export default SSignup
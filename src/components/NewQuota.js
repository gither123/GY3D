// to be able to add new checkers - available after successful login
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {Link } from "react-router-dom";
import "./exterier/commentPost.css";

const POST_MUTATION = gql`

mutation CreateTodoInput (
  $name: String!
  $description: String!
) {
createTodo(
  input: {
   
    name: $name
    description: $description
  }
) {
  id
}
}`

class NewQuota extends Component {
  state = {
    description: '',
    name: ''
  }






  

  render() {
    const { description, name} = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
        <div className="true" >Create new CheckLists</div>
        <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="name"
          />
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description:e.target.value})}
            type="text"
            placeholder="A description for the checklist"
          />
        </div>
        <div className="zapper">
        <Mutation mutation={POST_MUTATION} variables={{ description, name }}>
  {postMutation => <button onClick = {postMutation} >Submit</button>}

</Mutation>
</div>
<div className="makemedappper">
       <Link to="/Multiplepat"><button >Back to Login</button></Link>
       </div>
      </div>
    
    )
  }
}

export default NewQuota
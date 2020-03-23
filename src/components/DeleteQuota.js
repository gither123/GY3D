// able to delete any checklist - available after successful login
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {Link } from "react-router-dom";
import "./exterier/commentPost.css";
const Delter = gql`
mutation DeleteTodo (
    $id: ID!
) {
deleteTodo (
  input: {
   id: $id
  }
) {
  id
}
}`
class DeleteQuota extends Component {
    state = {
      id: '',
    }
  
    render() {
      const { id} = this.state
      return (
        <div>
          <div className="flex flex-column mt3">
          <h2 >Delete items from checklist "Be Careful"</h2>
          <p>Note:if you open the console you will see the graphql query to get the ID</p>
          <input
              className="mb2"
              value={id}
              onChange={e => this.setState({ id: e.target.value })}
              type="text"
              placeholder="id"
            />
          </div>
          <div className="Yoyo">
          <Mutation mutation={Delter} variables={{ id }}>
    {deleteTodo => <button onClick={deleteTodo}>Delete</button>}
   
  </Mutation>
  </div>
  <br></br>
  <div className="bluebell">
  <Link to="/Multiplepat"><button > Back to Login</button></Link>
  </div>
        </div>
      )
    }
  }

export default DeleteQuota
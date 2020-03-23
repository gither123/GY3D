import React, { useState } from "react";
import "./Home.css";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {  NavItem } from "react-bootstrap";
import LinkList from './LinkList'

import { Link, withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import { Subscription } from "react-apollo";
// import Routes1 from './Routes1';


const Query = gql`
{
  listTodos {
    items {
      id
      name
      description
    }
  }
}
`

function Home  (props) {
  console.log(props);
  const [isAuthenticated, userHasAuthenticated] = useState(false); 
  const { loading, data, error } = useQuery(Query);
  if (loading) return <p>Loading CheckList please wait!</p>;
  if (error) return <p>Error - please check internet connection</p>;
  console.log(data)

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
    props.history.push("/Home");
  }

  

    return (
        <div className="Home">
          <div className="lander">
            <h1>Checklister</h1>
            <p>Please follow Checklister for any support issues</p>
            <br></br>
            <LinkList />
            <br></br>
            <p>If you went through to the Checklister and it does not help, then please full in comment box once clicked on comment to post issue</p>
            <div>        {isAuthenticated
            ? <NavItem onClick={handleLogout}>Logout</NavItem>
            : <>
               <Link to="/Commentator"><button >Comment</button></Link>
           
              </>
          }
         
           </div>
    
          </div>
                {/* comment box.js must interact with slack! 
                if clicked create entry and strike through so support and reports can keep track */}
        </div>
      );

}

export default withRouter(Home);


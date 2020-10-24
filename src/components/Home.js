import React, { useState } from "react";
import "./Home.css";
// import { gql } from 'apollo-boost';
// import { useQuery } from '@apollo/react-hooks';
import {  NavItem } from "react-bootstrap";
import LinkList from './LinkList'

import { Link, withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";



// const Query = gql`
// {
//   listTodos {
//     items {
//       id
//       name
//       description
//     }
//   }
// }
// `

function Home  (props) {
  console.log(props);
  const [isAuthenticated, userHasAuthenticated] = useState(false); 
  // const { loading, data, error } = useQuery(Query);
  // if (loading) return <p>Loading CheckList please wait!</p>;
  // if (error) return <p>Error - please check internet connection</p>;
  // console.log(data)

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
    props.history.push("/Home");
  }
  async function run() {
    // alert('Winner.');
}

var buttons = document.getElementsByClassName('foo');
for (var i = 0; i < buttons.length; i++) {
    addEvent(buttons[i], 'click', run);
}

function addEvent(element, myEvent, fnc) {
    return ((element.attachEvent) ? element.attachEvent('on' + myEvent, fnc) : element.addEventListener(myEvent, fnc, false));
};
  

    return (
        <div className="Home">
          <div className="lander">
            <h1>GY3D</h1>
            <p>Please follow the CheckList for any support issues</p>
            <br></br>
            <LinkList />
            <br></br>
            <p>If you went through to the CheckList and it does not help, then please full in comment box once clicked on comment to post issue</p>
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


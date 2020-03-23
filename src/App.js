import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import './App.css';
import Routes from "./Routes";
import Routes1 from "./components/Routes1";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";

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

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const {data} = useQuery(Query);
  console.log(data)


  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
    props.history.push("/login");
  }


  return (
    
<div className="App">
  <div className="App container">
    
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Checklister</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {isAuthenticated
            ? <NavItem onClick={handleLogout}>Logout</NavItem>
            : <>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    <Routes1 appProps = {{ isAuthenticated, userHasAuthenticated }} />
  </div>
  </div>
);
        }
        export default withRouter(App);

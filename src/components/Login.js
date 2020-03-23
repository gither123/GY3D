import React, { useState } from "react";
import {  FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Auth } from "aws-amplify";
import LoaderButton from './LoaderButton';




export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    
    setIsLoading(true);
    try {
      await Auth.signIn(email, password);
      props.userHasAuthenticated(true);
      props.history.push("/Multiplepat");
    } catch (e) {
      alert(e.message);
    }
}
  

  return (
    <div className="Login">
      <div className="admin">Super Admin</div>
      <form onSubmit={handleSubmit} noValidate className={isLoading ? 'loading' : ''}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <LoaderButton
  block
  type="submit"
  bsSize="large"
  isLoading={isLoading}
  disabled={!validateForm()}
>
  Login
</LoaderButton>
      </form>
    </div>
  );
}
import React from "react";
import {  Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NewQuota from "./components/NewQuota";
import DeleteQuota from "./components/DeleteQuota";
import SSignup from "./components/SSignup";
import AppliedRoute from "./components/AppliedRoute";
import Multiplepat from "./components/Multiplepat";
import commentPost from "./components/exterier/commentPost";
import Commentator from "./components/Commentator";

export default function Routes({ appProps }) {
  return (
 
      <Switch>
        <Route exact path="/" component={Home} />
        <AppliedRoute
          exact
          path="/login"
          component={Login}
          appProps={appProps}
        />
         <AppliedRoute exact path="/Commentator" component={Commentator} appProps={appProps} />
     <Route exact path="/commentPost" component={commentPost} />
        <Route exact path="/SSignup" component={SSignup} />
        <Route exact path="/NewQuota" component={NewQuota} />
        <Route exact path="/DeleteQuota" component={DeleteQuota} />
        <Route exact path="/Multiplepat" component={Multiplepat} />
        <Redirect to='/' />
        {/* Finally, catch all unmatched routes */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    
  );
}

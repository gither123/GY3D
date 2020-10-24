import React from "react";
import {  Switch } from "react-router-dom";

// import commentPost from "./exterier/commentPost";


// Reason for Routes1 is it lays in the components file for any .js files that needs a Routes path
export default function Routes1({ appProps }) {
  return (
    <Switch>
      {/* <Route exact path="/commentPost" component={commentPost} /> */}
      { /* Finally, catch all unmatched routes */ }
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}
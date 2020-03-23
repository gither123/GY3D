import React from "react";
import "./exterier/commentPost.css";
import {Link } from "react-router-dom";

const Multiplepat = (props) => {

    return (
      <div>
      <div className="New">
      <Link to="/NewQuota"><button > NewChecklist</button></Link>
      </div>
      <div  className="delete">
      <Link to="/DeleteQuota"><button > DeleteChecklist</button></Link> 
      </div>
     
      </div>
    )
}

export default Multiplepat;
import React, { Component } from "react";
import "./Login.css";
import GoogleLogin from "react-google-login";


class Commentator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    };
  }

  render() {
    
    const responseGoogle = response => {
      console.log("google console");
      console.log(response);
      console.log(response.ca);
      console.log(response.accessToken);
      console.log(response.profileObj);


      console.log("Test");
      if (response.accessToken) {
        console.log("I am if");
        this.props.history.push("/commentPost");
      }
    };

    return (
  
      <div className="row body">
        <div className="medium-12 columns">
          <div className="medium-12 ">
            <h2 id="welcomeText">Hi please login to comment the issue you are experiencing</h2>
            <div className="SSSS">
      <h2>Support Login</h2>
    </div>
    <div className="Google">
            <GoogleLogin
              clientId="907190265155-oovs0i9pkqql6tc3shckcv43ev0mruvm.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Commentator;

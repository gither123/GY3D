

class ContactFormWidget extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
        sent: false,
        error: false,
      };
  
    onInputChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }
  
    onFormSubmit(e) {
      e.preventDefault();
      const gatewayUrl = "https://4m8dm7hvq6.execute-api.us-east-1.amazonaws.com/Prod";
      fetch(gatewayUrl, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: {this.state.name},
          email: {this.state.email},
          message: {this.state.message}
      }).then(
        () => { this.setState({ sent: true }); },
        () => { this.setState({ error: true }); }  }
      );
    }
  
    render () {
      // Render the form
    }
  }

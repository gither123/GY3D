// src/Widgets/SubscriptionFormWidget/SubscriptionFormWidgetComponent.js

import * as React from 'react';
import * as Scrivito from 'scrivito';
class SubscriptionFormWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      sent: false,
      error: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const scriptUrl = 'https://script.google.com/macros/s/123456abcdef/exec';
    const url = `${scriptUrl}?callback=ctrlq&name=${this.state.name}&email=${this.state.email}`;
    fetch(url, {mode: 'no-cors'}).then(
      () => { this.setState({ sent: true }); },
      () => { this.setState({ error: true }); }
    );
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const isFormFilled = this.state.name && this.state.email;
    const confirmationText =
      (this.props.widget.get('confirmationText') ||
      'Thanks for subscribing to our newsletter') +
      `, ${this.state.name}!`;
    if (this.state.sent) {
      return (
        <div className="alert alert-success">
          <strong>{ confirmationText }</strong>
        </div>
      );
    }
    return (
      <div className="container component-section">
        <section className="row">
          <div className="col-md-5">
            <form onSubmit={ this.onFormSubmit } className="form">
              <div className="form-group">
                <label>Name:</label>
                <input onChange={ this.onInputChange }
                  type="text" name="name" className="form-control" required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input onChange={ this.onInputChange }
                  type="email" name="email" className="form-control" required
                />
              </div>
              <p>
                <small className={ `${isFormFilled ? 'invisible' : ''}` }>
                  Please fill in both fields.
                </small>
              </p>
              { this.state.error &&
                <p>An error occurred. Please try again later.</p>
              }
              <button type="submit" className={ `btn btn-primary${isFormFilled ? '' : ' disabled'}` }>
                { this.props.widget.get('buttonText') || 'Subscribe' }
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

Scrivito.provideComponent('SubscriptionFormWidget', SubscriptionFormWidget);

 export default SubscriptionFormWidget;
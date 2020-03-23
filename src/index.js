import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import awsmobile from "./aws-exports";
import { BrowserRouter as Router } from 'react-router-dom';
import Amplify from 'aws-amplify';
import config from './config';
// appsnc
// import aws_exports from './aws-exports';
// apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
// setup
const client = new ApolloClient({
  uri: awsmobile.aws_appsync_graphqlEndpoint,
  headers: {
    // 'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*',
     'X-Api-Key': awsmobile.aws_appsync_apiKey
  }
});



const RenderApp = () => (
  <ApolloProvider client={client}>
    <App  />   
  </ApolloProvider>
);

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "amplify",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});


render(<Router><RenderApp /></Router>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
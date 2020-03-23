export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "amplify-amps-dev-85324-deployment"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://4m8dm7hvq6.execute-api.us-east-1.amazonaws.com/Prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_Y3enfovU4",
      APP_CLIENT_ID: "3uf57nto6dk1skakfk9jck3mvq",
      IDENTITY_POOL_ID: "us-east-1:929e107a-c6df-48f4-9f74-d8e9e75ecbc0"
    }
  };

  //YOUR_S3_UPLOADS_BUCKET_NAME and YOUR_S3_UPLOADS_BUCKET_REGION with the your S3 Bucket name and region from the Create an S3 bucket for file uploads chapter. In our case it is notes-app-uploads and us-east-1.

// YOUR_API_GATEWAY_URL and YOUR_API_GATEWAY_REGION with the ones from the Deploy the APIs chapter. In our case the URL is https://ly55wbovq4.execute-api.us-east-1.amazonaws.com/prod and the region is us-east-1.

// YOUR_COGNITO_USER_POOL_ID, YOUR_COGNITO_APP_CLIENT_ID, and YOUR_COGNITO_REGION with the Cognito Pool Id, App Client id, and region from the Create a Cognito user pool chapter.

// YOUR_IDENTITY_POOL_ID with your Identity pool ID from the Create a Cognito identity pool chapter.
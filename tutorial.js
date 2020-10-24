{/* <script nomodule src="./tutorial.js"></script>
import Home from "./components/Home" */}
const { WebClient } = require('@slack/web-api');


// console.log('Getting started with Node Slack SDK');

const web = new WebClient(process.env.SLACK_TOKEN);

// The current date
// const currentTime = new Date().toTimeString();
const data = new String();
(async () => {

  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: '#general',
      text: `The current time is ${Home.data}`,
    });
  } catch (error) {
    console.log(error);
  }

  console.log('Message posted!');
})();

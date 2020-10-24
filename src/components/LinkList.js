import React, { Component } from 'react'
import Link from './Link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import "./Home.css";

const FEED_QUERY = gql`
{
  listTodos {
    items {
      id
      name
      description
    }
  }
}
`
class LinkList extends Component {
  render() {
    return (
      <div className="query">
      <Query query={FEED_QUERY}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>!!Error experienced with Fetching list!!</div>
          refetch();
          const linksToRender = data.listTodos.items
          return (
            <div>
              {linksToRender.map(link => <Link key={link.name} link={link} />)}
            </div>
          )
        }}
      </Query>
      </div>
    )
  }
}

export default LinkList


//const { WebClient } = require('@slack/web-api');


// console.log('Getting started with Node Slack SDK');

// const web = new WebClient(process.env.SLACK_TOKEN);

// // The current date
// // const currentTime = new Date().toTimeString();
// const data = new String();
// (async () => {

//   try {
//     // Use the `chat.postMessage` method to send a message from this app
//     await web.chat.postMessage({
//       channel: '#general',
//       text: `The current time is ${Home.data}`,
//     });
//   } catch (error) {
//     console.log(error);
//   }

//   console.log('Message posted!');
// })();


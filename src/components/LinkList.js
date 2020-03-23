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
      <Query query={FEED_QUERY}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          refetch();
          const linksToRender = data.listTodos.items
          return (
            <div>
              {linksToRender.map(link => <Link key={link.name} link={link} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList
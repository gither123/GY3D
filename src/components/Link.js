import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.link.name} - {this.props.link.description}
        </div>
      </div>
    )
  }
}

export default Link
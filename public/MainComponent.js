import React, { Component, PropTypes } from 'react'

class MainComponent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

// MainComponent.propTypes = {

// }

export default MainComponent

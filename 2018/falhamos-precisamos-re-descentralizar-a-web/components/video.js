import React, {Fragment} from 'react'

export default class Video extends React.Component {
  render () {
    return (
      <Fragment>
        <video src={this.props.src} controls poster="" style={{
            width: '40em'
          }}>
        </video>
      </Fragment>
    )
  }
}
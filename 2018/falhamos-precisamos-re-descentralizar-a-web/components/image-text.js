import React, {Fragment} from 'react'
import { Image } from 'mdx-deck'

export default class ImageText extends React.Component {
  render () {
    return (
      <Fragment>
        <Image src={this.props.imgSrc} />
        <div style={{
          position: 'absolute',
          bottom: 40,
          fontSize: '2em',
          color: '#fff',
          width: '100%',
          textShadow: '6px 3px 11px #000',
          padding: '20px',
          fontFamily: 'DejaVu Sans',
          lineHeight: '1.3',
          fontWeight: '700'
        }}>{this.props.content}</div>
      </Fragment>
    )
  }
}
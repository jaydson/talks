import React, {Fragment} from 'react'
import { Image } from 'mdx-deck'

export default class Cover extends React.Component {
  render () {
    return (
      <Fragment>
        <Image src='./thomas-tucker-129635-unsplash.jpg' />
        <div style={{
          position: 'absolute',
          top: 0,
          fontSize: '4em',
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          color: '#fff',
          width: '100%',
          height: '90%',
          textShadow: '6px 3px 11px #000',
          padding: '20px',
          fontFamily: 'DejaVu Sans',
          lineHeight: '1.3',
          fontWeight: '700'
        }}>FALHAMOS!<br/>
        Precisamos re-descentralizar a Web!</div>
      </Fragment>
    )
  }
}
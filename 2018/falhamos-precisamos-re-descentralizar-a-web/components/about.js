import React, {Fragment} from 'react'
import { Image } from 'mdx-deck'

export default class About extends React.Component {
  render () {
    return (
      <div style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            position: 'relative',
            backgroundColor: 'rgba(98, 98, 98, 0.4)'
        }}>
        <Image src='./jaydson-2.jpeg' />
        <div style={{
            position: 'absolute',
            top: 0,
            fontSize: '3em',
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
          }}> @BrazilJS/@Nasc<br/>
          https://jaydson.com | jaydson@nasc.io
      </div>
    </div>
    )
  }
}
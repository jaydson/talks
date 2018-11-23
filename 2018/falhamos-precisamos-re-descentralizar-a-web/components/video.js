import React from 'react'

export default class Video extends React.Component {
    componentDidMount() {
        this.createVideoElement('video-container')
    }

    createVideoElement(parent) {
        let v = document.createElement('video')
        v.src = this.props.src
        v.style.width = '40em'
        v.controls = true
        console.log(parent)
        document.querySelector(`#${parent}`).appendChild(v)
    }

    render () {
        return (
            <div id="video-container" />
        )
    }
}
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import moment from 'moment'

const Samp = styled.samp([], {
}, space)


export default class RehabCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {months: 0, days:0, hours:0, minutes:0, seconds:0};
    }

    getDate() {
        let start = moment("2018-07-26 6:59:00")
        let now = moment(new Date())
        let duration = moment.duration(now.diff(start))
        let date = {
            months : Math.trunc(duration.asMonths()),
            hours : Math.trunc(duration.asHours()),
            days : Math.trunc(duration.asDays()),
            minutes : Math.trunc(duration.asMinutes()),
            seconds : Math.trunc(duration.asSeconds())
        }
        this.setState({
            ...date
        })
    }

    componentDidMount() {
        window.setInterval(()=> {
            this.getDate()
        }, 1000)
    }

    componentWillReceiveProps() {
        this.getDate()
    }

    render() {
        return (
            <div style={{
                fontSize: '3em',
                fontFamily: 'DejaVu Sans'
            }}>
                <div>{this.state.months} <span style={{ fontSize: '40px'}}>meses</span></div>
                <div>{this.state.days} <span style={{ fontSize: '40px'}}>dias</span></div>
                <div>{this.state.hours} <span style={{ fontSize: '40px'}}>horas</span> </div>
                <div> {this.state.minutes} <span style={{ fontSize: '40px'}}>minutos</span> </div>
                <div>{this.state.seconds} <span style={{ fontSize: '40px'}}>segundos</span></div>
            </div>
        )
    }
}

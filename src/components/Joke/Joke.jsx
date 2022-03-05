import React, { Component } from 'react'
import './Joke.css'



export default class Jokes extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps === this.props.joke
  }
  render() {
    let { joke } = this.props
    return (
      < div className='joke'>{joke}</div >
    )
  }
}

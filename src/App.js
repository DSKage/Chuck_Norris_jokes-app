import './App.css';
import React, { Component } from 'react'
import Button from './components/UI/Button/Button';
import Joke from './components/Joke/Joke';

export default class App extends Component {

  jokeCount = 5

  state = {
    jokes: []
  }

  componentDidMount() {
    this.updateJokes()
  }

  updateJokes = () => {
    let jokes = []
    let promise = []
    while (promise.length < this.jokeCount) {
      promise.push(fetch('https://api.chucknorris.io/jokes/random').then(response => response.json()))
    }
    Promise.all(promise).then(values => {
      values.map(value => {
        jokes.push({ id: value.id, joke: value.value })
      })
      this.setState({ jokes })
    })
  }

  render() {
    return (
      <div className='App'>
        <Button foo={this.updateJokes}>Добавить шутку</Button>
        <h2 className='title'>Ну-ка шуткани!</h2>
        {this.state.jokes.map(joke => {
          return <Joke key={joke.id} joke={joke.joke} />
        })}
      </div>
    )
  }
}

import React, { Component } from 'react';
import GenerateQuote from './components/GenerateQuote';
import DisplayQuote from './components/DisplayQuote';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    quote: [],
  }
  
  getQuote = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response => response.json())
    .then(data => this.setState({ quote: data[0]}))
    
  
  }

    render() {
      const {quote} = this.state
      return (
        <div className="App">
          <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <GenerateQuote selectQuote={this.getQuote}/>
           <DisplayQuote {...quote}/>
        </div>
      );
    }
}

export default App;

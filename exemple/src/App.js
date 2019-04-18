import React, { Component } from 'react';
import GenerateEmployee from './components/GenerateEmployee';
import DisplayEmployee from './components/DisplayEmployee';
import logo from './logo.svg';
import './App.css';

const  sampleEmployee = {
  gender:  'male',
  name: {
      title:  'mr',
      first:  'mathys',
      last:  'aubert'
  },
  location: {
      street:  '9467 rue gasparin',
      city:  'perpignan',
      postcode:  '90208'
  },
  email:  'mathys.aubert@example.com',
  picture: {
      medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
  }
};

class App extends Component {
  state = {
    employee: sampleEmployee
  }
  
  getEmployee = () => {
    fetch("https://randomuser.me/api?nat=fr")
    .then(response => response.json())
    .then(data => 
      {
      this.setState({
        employee: data.results[0]
      }
      );
    }
    );
  }
  // componentDidMount = () => {
  //   this.getEmployee ()
  // }

    render() {

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <GenerateEmployee selectEmployee={this.getEmployee}/>
           <DisplayEmployee employee={this.state.employee}/>
        </div>
      );
    }
}

export default App;

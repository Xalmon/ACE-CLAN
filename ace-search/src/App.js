import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      aceClan : [
        {
          name: "Eddie"
        },
        {
          name: "Joel"
        },
        {
          name: "Laflare"
        }
      ]
    };
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello, I'm {this.state.name}.</h1>
          <button onClick={() => {
            this.setState({
              name: "Baba"
            }, () => {
              console.log(this.state);
            });
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;

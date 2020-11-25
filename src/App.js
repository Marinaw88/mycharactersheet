import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strength: 0,
      brains: 0,
      stamina: 0,
      dexterity: 0
    };
  }

  changeStrength = (myEvent) => {
    this.setState({
      strength: myEvent.target.value
    });
  }

  changeBrains = (myEvent) => {
    this.setState({
      brains: myEvent.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Character sheet - let's get started!
          </h1>

          <div class='enterTrait'>
            <p>Strength:</p>
            <input
              value={this.state.strength}
              onChange={this.stateStrength}
            />
            <p>Brains:</p>
            <input
              value={this.state.brains}
              onChange={this.changeBrains}
            />
          </div>
          <div class='displayInfo'>
            <div class='strengthInfo'>
              <p>Strength Information</p>
              <p class='dispStrength'> {this.state.strength}</p>
              <p class='strengthMod'>{(this.state.strength - 10 / 2)}</p>
            </div>
            <div class='brainsInfo'>
              <p>Brains Information</p>
              <p class='dispBrains'>{this.state.brains}</p>
              <p class='brainsMod'>{(this.state.brains - 10) / 2}</p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
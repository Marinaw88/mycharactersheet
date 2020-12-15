import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Abilities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      justNum: "",
      calcNum: ""
    };
  }
calculating = (myEvent) => {
  let value = myEvent.target.value;
  let calculatedValue = (value-10)/2;
  this.setState({
    justNum: value,
    calcNum: calculatedValue 
  })
}
render (){
  return(
    <div>
      <input
      value={this.state.justnum}
      onChange={this.calculating}
      />
    <h3>{this.props.name} Calculated: {this.state.calcNum}</h3>
    </div>
  );
}
}

class App extends React.Component {
  render() {
    let abilities = ["Strength", "Brains"];
    let displayInfo = []
    for (const num in abilities){
      displayInfo.push(<Abilities name={abilities[num]}/>)
    }
    return (
      <div>
        <h1>Let's Calculate Your Abilities!</h1>
        <h2>Enter Your Points to Convert Them</h2>
        {displayInfo}
      </div>
    );
  }
}

//   changeStrength = (myEvent) => {
//     this.setState({
//       strength: myEvent.target.value
//     });
//   }

//   changeBrains = (myEvent) => {
//     this.setState({
//       brains: myEvent.target.value
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
         

//           <div class='enterTrait'>
//           <p>
//             Character sheet - let's get started!
//           </p>
//             <p>Strength:</p>
//             <input
//               value={this.state.strength}
//               onChange={this.stateStrength}
//             />
//             <p>Brains:</p>
//             <input
//               value={this.state.brains}
//               onChange={this.changeBrains}
//             />
//           </div>
//           <div class='displayInfo'>
//             <div class='strengthInfo'>
//               <p>Strength Information</p>
//               <p class='dispStrength'> {this.state.strength}</p>
//               <p class='strengthMod'>{(this.state.strength - 10 / 2)}</p>
//             </div>
//             <div class='brainsInfo'>
//               <p>Brains Information</p>
//               <p class='dispBrains'>{this.state.brains}</p>
//               <p class='brainsMod'>{(this.state.brains - 10) / 2}</p>
//             </div>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }



//THIS CODE BELOW IS FROM THE INTERNET. IT MAKES FUN ANIMATED BACKGROUND HAPPEN

const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

export default App;
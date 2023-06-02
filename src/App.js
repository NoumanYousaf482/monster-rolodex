import { Component } from 'react'


import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state={
      monster:[ 
      {
        name:'linda',
        id:'1',
      },
      {
        name: 'Frank',
        id:'2',
      },
      {
        name: 'Jacky',
        id:'3',
      },
      {
        name: 'Andrie',
        id:'4',
      },
     ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.monster.map((monster) =>{
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        } )}
      </div>
    )
  }
  
}

export default App;

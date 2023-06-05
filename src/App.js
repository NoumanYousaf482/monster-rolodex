import { Component } from 'react'


import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state={
      monster:[],
    };
    console.log('constructor');
  }

  componentDidMount(){
    console.log('componenet did mount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> this.setState(() => {
      return{monster: users}

    },
    () => {
      console.log(this.state);
    }
    ));
  }

  render() {
    console.log('render');
    return (
      <div className='App'>
        <input 
        className='search-box' 
        type='search' 
        placeholder='search monster'
        onChange={(event) => {
          console.log(event.target.value);
          const searchString = event.target.value.toLocaleLowerCase();
          const filteredMonsters = this.state.monster.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
          });

          this.setState(() => {
            return {monster:filteredMonsters};
          }); 
        }}
         />
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

import { Component } from 'react'


import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state={
      monster:[],
      searchField:''
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

  onSearchChange= (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {searchField};
    }); 
  }

  render() {
    console.log('render');

    const {monster,searchField}=this.state;
    const {onSearchChange}=this;
    const filteredMonsters = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });


    return (
      <div className='App'>
        <input 
        className='search-box' 
        type='search' 
        placeholder='search monster'
        onChange={onSearchChange}
         />
        {filteredMonsters.map((monster) =>{
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

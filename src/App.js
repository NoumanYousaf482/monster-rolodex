import { Component } from 'react'

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
        <SearchBox
        className= 'monsters-Search-Box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
        />
        <CardList 
        monsters={filteredMonsters}
        />
      </div>
    );
  }
  
}

export default App;

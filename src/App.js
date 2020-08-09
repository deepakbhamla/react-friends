import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import Search from './components/search/search.component'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        friends : [],
        searchField : ''
    };
  }

 componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({friends: users}))
 }
 handleChange = (e) => {
  this.setState({searchField : e.target.value});
 }

  render(){  
    const {friends,searchField} = this.state
    const filterFriends = friends.filter(friend => friend.name.toLowerCase().includes(searchField.toLowerCase()) )
    return (
      <div className="App">
        <h1>Meet My Friends</h1>
        <Search 
          placeholder='search friends' 
          handleChange = {this.handleChange} 
        />
        <CardList friends= {filterFriends} >
        </CardList>

      </div>
    );
  }  
}

export default App;

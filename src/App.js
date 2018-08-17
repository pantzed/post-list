import React, { Component } from 'react';
import PostList from './PostList';
import UtilityBar from './UtilityBar';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'votes',
    }
    this.key = Date.now();
    this.updateSortBy = this.updateSortBy.bind(this);
  }

  updateSortBy(event, property = this.state.sortBy) {
    event.preventDefault();
    property = event.target.getAttribute('value');
    this.setState({sortBy: property});
  }
 
  render() {
    const sortProperty = this.state.sortBy;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Postly</h1>
        </header>
        <div className="container-fluid">
          <UtilityBar sortBy={sortProperty} updateSortBy={this.updateSortBy}/>
          <PostList sortBy={sortProperty}/>
        </div>
      </div>
    );
  }
}

export default App;

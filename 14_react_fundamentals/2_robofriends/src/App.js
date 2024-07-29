import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

// STATE: description of your app. our state here is what's in searchbox and "robots"
// state usually lives in the parent component.

class App extends Component {
  state = {
    robots: robots,
    searchfield: '',
  };

  onSearchChange = (evt) => {
    this.setState({ searchfield: evt.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;

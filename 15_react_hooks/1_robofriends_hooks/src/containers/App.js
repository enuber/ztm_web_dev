import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  // gets called automatically. this means every time the componenet changes/updates useEffect would get called again. To fix this so we get it to do what we want, you add in a second argument. This is an array. This tells when this should run. By adding a parameter in the array like searchfield, it will only get run if searchfield changes. If we do an empty array, it only runs initially so only one time.
  // breakdown. No dependencies - leaving the array off means it will run every render
  // empty array - will run once after initial render
  // array with something in it - will run if the something in it changes.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (evt) => {
    setSearchfield(evt.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  //* basicaly does the same as above, we are destructuring an array
  //* basically 'robots' is a piece of state and
  //* 'setRobots' is the function that changes the state (this is the
  //* naming convention, if the state was items the function is to be
  //* named setItems)
  //* before we had one big state that contained the robots and searchfield
  //* now we have 2 smaller states - 1 for robots etc..

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []); // we need this array as second parameter, otherwise
  // it will go into an infinete loop. In the array we say "hey man,
  // setRobots (update the state) only when the List (the empty array) changes"

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const filteredRobot = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobot} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;

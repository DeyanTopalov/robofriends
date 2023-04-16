import React, { Component } from 'react';
import CardList from './CardList';
// import { robots } from './robots'; let's remove this 
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component{
    constructor() {
    super()
    this.state = {
        robots: [],
         searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({robots: users}));
    }

    onSearchChange = (event) => { 
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredRobot = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0) { //here if we dont have the 'this.state' it will return 'robots is undefined' error
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className ='f1'>RoboFriends</h1>
                    <SearchBox searchChange= {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobot}/>
                    </Scroll>
                </div>
                
            );
        }
    }
 
}

export default App;
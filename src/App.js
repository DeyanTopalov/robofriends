import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';



class App extends Component{
    constructor() {
    super()
    this.state = {
        robots: robots,
         searchfield: ''
        }
    }

    onSearchChange = (event) => { 
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredRobot = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange= {this.onSearchChange}/>
                <CardList robots={filteredRobot}/>
            </div>
            
        );
    }
 
}

export default App;

//* Optimized by AI: 

// import React, { Component } from 'react';
// import CardList from './CardList';
// import { robots } from './robots';
// import SearchBox from './SearchBox';

// class App extends Component {
//     state = {
//         robots: robots,
//         searchfield: ''
//     }

//     onSearchChange = (event) => {
//         this.setState({ searchfield: event.target.value.toLowerCase() })
//     }

//     render() {
//         const { robots, searchfield } = this.state;
//         const filteredRobot = robots.filter(robot => robot.name.toLowerCase().includes(searchfield));
        
//         return (
//             <div className='tc'>
//                 <h1>RoboFriends</h1>
//                 <SearchBox searchChange={this.onSearchChange}/>
//                 <CardList robots={filteredRobot}/>
//             </div>
//         );
//     }
// }

// export default App;
import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            leagueData: []
        }
    }

    componentDidMount(){
        fetch("http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json")
        .then((response) => response.json())
        .then((champions) => this.setState({leagueData:champions}))
    }

    render(){
        return(<h1>Hello world</h1>)
    }
}

export default App;
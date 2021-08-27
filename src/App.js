import React, {Component} from 'react';
import CardList from './CardList'

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
        return <CardList champions={this.state.leagueData}/>
    }
}

export default App;
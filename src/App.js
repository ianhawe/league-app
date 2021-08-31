import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      leagueData: "",
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json"
    )
      .then((response) => response.json())
      .then((champions) => this.setState({ leagueData: champions }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    return (
      <div>
 
        <h1> League of Legend's Champions</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList champions={this.state.leagueData} />
      </div>
    );
  }
}

export default App;

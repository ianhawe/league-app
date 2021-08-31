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
    const filterChampions = [];
    if (this.state.leagueData.data) {
      for (let champion in this.state.leagueData.data) {
        if (
          champion.toLowerCase().includes(this.state.searchfield.toLowerCase())
        ) {
          filterChampions.push(this.state.leagueData.data[champion]);
        }
      }
    }

    return (
      <div>
        <h1> League of Legend's Champions</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList
          champions={
            filterChampions.length > 0
              ? filterChampions
              : this.state.leagueData.data
          }
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
	constructor() {
		//  super calls the constructor method on the Component, so we can access to this.state
		super();

		this.state = {
			monsters: [],
			searchField: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}

	// make the call to the following api url to display our monsters name
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}

	handleChange(e) {
		this.setState({ searchField: e.target.value });
	}

	render() {
		// destructuring our object and put them in a const calls monsters and searchField
		// same as
		// const monsters = this.state.monsters;
		// const searchField = this.state.searchField
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className='App'>
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder='search monsters'
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictContainer from './DistrictContainer.js';
import Search from './Search.js'
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			cards: new DistrictRepository(kinderData),
			query: ''
		}
	}

	findCard = (string) => {
		console.log(string)
		this.setState({ query: string })
	}

	// componentDidMount = () => {
	// 	this.updateCardInfo()
	// }

	// updateCardInfo = (string) => {
	// 	let cardList = district.findAllMatches(string)

	// 	this.setState({
	// 		data: cardList
	// 	})
	// }
	// addData() {
	// 	const district = new DistrictRepository(kinderData)
	// }

  render() {
    return (
    <div>
      <header>
      <h1>Welcome To Headcount</h1>
      <Search
      	findCard={this.findCard}
      />
      </header>
      <DistrictContainer 
      	cards={this.state.cards.findAllMatches(this.state.query)}
      />
    </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictContainer from './DistrictContainer.js';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			cards: new DistrictRepository(kinderData).stats
		}
	}

	//componentDidMount = () => {
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
      <div>Welcome To Headcount</div>
      <DistrictContainer cards={this.state.cards}/>
    </div>
    );
  }
}

export default App;

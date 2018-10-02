import React, { Component } from 'react';
import DistrictRepository from './helper.js'
import kinderData from './data/kindergartners_in_full_day_program.js'

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			district: new DistrictRepository(kinderData)
		}
	}

	componentDidMount() {

	}
  render() {
    return (
      <div>Headcount 2.0</div>
    );
  }
}

export default App;

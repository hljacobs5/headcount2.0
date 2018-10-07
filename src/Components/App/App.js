import React, { Component } from 'react';
import DistrictRepository from '../helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictContainer from './Components/DistrictContainer/DistrictContainer.js';
import Search from './Components/Search/Search.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: new DistrictRepository(kinderData),
      query: ''
    };
  }

  componentDidMount = () => {

  }

  findCard = (string) => {
    this.setState({ query: string });
  }

  clickedCard = (location) => {

  }

  addClickedProperty = (location) => {
  	
  }

  render() {
    return (
      <div>
        <header className='App-header'>
          <h1>Welcome To Headcount</h1>
          <Search
            findCard={this.findCard}
          />
        </header>
        <DistrictContainer 
      	 cards={this.state.cards.findAllMatches(this.state.query)}
      	 clickedCard={this.clickedCard}

        />
      </div>
    );
  }
}

export default App;

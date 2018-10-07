import React from 'react'
import DistrictCard from '../DistrictCard/DistrictCard.js'
import './DistrictContainer.css'
import PropTypes from 'prop-types';

const DistrictContainer = ({ cards, clickedCard }) => {
	let dataArray = Object.keys(cards).map(key => {
		return cards[key]
	})
	const displayCards = dataArray.map((card, index) => (
		<DistrictCard
			cardData={card}
			key={index}
			clickedCard={clickedCard}
		/>))

		return (
			<div className='display-cards'>
				{displayCards}
			</div>
	)
}

DistrictContainer.propTypes = {
	cards: PropTypes.array,
	clickedCard: PropTypes.func
}

export default DistrictContainer;
import React from 'react'
import DistrictCard from './DistrictCard.js'

const DistrictContainer = ({ cards }) => {
	let dataArray = Object.keys(cards).map(key => {
		return cards[key]
	})
	const displayCards = dataArray.map((card, index) => (
		<DistrictCard
			cardData={card}
			key={index}
		/>))

		return (
			<div>
				{displayCards}
			</div>
	)
}

export default DistrictContainer;
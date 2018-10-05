import React from 'react'
import PropTypes from 'prop-types'
import './DistrictCard.css'

const DistrictCard = ({cardData}) => {

	let statsOne = Object.entries(cardData.stats).map(stat => {
		if (stat[1] > .5) {
		return <p>{stat[0]}: {stat[1]}</p>
	   }
	})

	let statsTwo = Object.entries(cardData.stats).map(stat => {
		if (stat[1] <= .5) {
			return <p>{stat[0]}: {stat[1]}</p>
		}
	})

	

	return (
		<div className='card'>
			<h3 className='card-location'>{cardData.location}</h3>
			<h3 className='card-stats'>{statsOne}</h3>
			<h3 className='card-stat'>{statsTwo}</h3>
		</div>
	)
}

export default DistrictCard;
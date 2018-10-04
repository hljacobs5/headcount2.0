import React from 'react'
import PropTypes from 'prop-types'

const DistrictCard = ({cardData}) => {

	let stats = Object.entries(cardData.stats).map(stat => {
		return <p>{stat[0]}: {stat[1]}</p>
	})

	return (
		<div>
			<h3>{cardData.location}</h3>
			<h3>{stats}</h3>
		</div>
	)
}

export default DistrictCard;
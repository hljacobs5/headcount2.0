import React from 'react'
import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
	constructor(data) {
		this.stats = this.removeDuplicates(kinderData)
	}

	removeDuplicates = (kinderData) => {
		return kinderData.reduce((dataObject, district) => {
		let key = district.Location.toUpperCase()

		if (!dataObject[key]) {
			dataObject[key] = {
				location: district.Location,
				stats: {}
			}

		}

		return dataObject
		}, {})

	}

}

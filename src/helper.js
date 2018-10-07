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
				location: district.Location.toUpperCase(),
				stats: {}
			}
		}

		dataObject[key].stats[district.TimeFrame] = Math.round(1000 * district.Data) / 1000 || 0;

		return dataObject
		}, {})
	}

	findByName = (location) => {
		if (!location) {
			return
		}

		if (this.stats[location.toUpperCase()]) {
			return this.stats[location.toUpperCase()]
		}
	}

	findAllMatches = (kinderData) => {
		let dataArray = Object.keys(this.stats).map(key => {
			return this.stats[key]
		});

		if (!kinderData) {
		  return dataArray 
		}

		let matches = dataArray.filter(match => {
			return match.location.includes(kinderData.toUpperCase())
		})
		return matches
	}

	findAverage = (districtName) => {
		const upperCaseDistrictName = districtName.toUpperCase()
		const yearKeys = Object.keys(this.stats[upperCaseDistrictName].stats);
		let districtSum = yearKeys.reduce((sum, stat) => {
			sum += this.stats[upperCaseDistrictName].stats[stat]
			return sum
		},0);
		const cardAverage = districtSum / yearKeys.length
		const roundedCardAverage = Math.round(1000 * cardAverage) / 1000
		return roundedCardAverage
	}

	compareDistrictAverages = (districtOne, districtTwo) => {
		const districtOneValue = this.findAverage(districtOne);
		const districtTwoValue = this.findAverage(districtTwo);
		const comparedValue = Math.round(1000 * (districtOneValue/districtTwoValue)) / 1000
		const result = Object.assign({},
	 	{
	 	  [districtOne.toUpperCase()]: districtOneValue, 
	 	  [districtTwo.toUpperCase()]: districtTwoValue,
	 	  'compared': comparedValue
	 	}
	 )
		return result
	}		

}

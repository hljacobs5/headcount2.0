import React, { Component } from 'react'

class Search extends Component {
	constructor() {
		super()
		this.state = {
			search: ''
		}
	}

	updateSearch = (event) => {
		const name = event.target.value
		this.setState({ search: name })
		this.props.findCard(this.state.search)
	}

	render() {
		return (
		<div>
			<input
				onChange={this.updateSearch}
				type='text'
				placeholder='Enter your search'
				name='search'
			/>
		</div>
		);
	}
}

export default Search;
import React from "react";

export default class Name extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	updateValue() {
		this.setState((prevState, props) =>
			({ value: `Hello, ${props.value}. ${Math.random()}` })
		)
	}

	componentWillMount() {
		this.updateValue();
	}

	componentWillReceiveProps() {
		this.updateValue();
	}

	render() {
		const { value } = this.state;

		return (
			<div>
				{value}
			</div>
		)
	}
}
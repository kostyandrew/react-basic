import React from "react";

export default class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: this.props.startCounter || 0
		}

		this.onPlus = this.onPlus.bind(this);
		this.onMinus = this.onMinus.bind(this);
		this.onReset = this.onReset.bind(this);
	}

	onReset() {
		this.setState({
			counter: 0
		});
	}

	onMinus() {
		this.setState((prevState, props) => ({
			counter: prevState.counter - 1
		}));
	}

	onPlus() {
		this.setState((prevState, props) => ({
			counter: prevState.counter + 1
		}));
	}

	render() {
		const { counter } = this.state;

		return (
			<div>
				Counter: {counter}
				<button onClick={this.onPlus}>+</button>
				<button onClick={this.onMinus}>-</button>
				<button onClick={this.onReset}>&times;</button>
			</div>
		);
	}
}
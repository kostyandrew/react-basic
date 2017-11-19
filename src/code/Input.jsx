import React from "react";

export default class Input extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value || ""
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	render() {
		const { value } = this.state;

		return (
			<input
				type="text"
				value={value}
				onChange={(e) => this.onChange(e)}
			/>
		)
	}
}
import React from "react";
import Name from "./Name.jsx";
import Input from "./Input.jsx";

export default class Parent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "Donald"
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(value) {
		if (value === "") {
			value = "Donald";
		}
		this.setState({ value });
	}

	render() {
		const { value } = this.state;

		return (
			<div>
				<Input value={value} onChange={this.onChange}/>
				<Name value={value}/>
				<br/>
				<Input value={value} onChange={this.onChange}/>
				<Name value={value}/>
			</div>
		)
	}
}
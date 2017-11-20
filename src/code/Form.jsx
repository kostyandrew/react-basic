import React from "react";

export default class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			password: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
	}

	onChange(fieldName, e) {
		this.setState({
			[fieldName]: e.target.value
		});
	}

	render() {
		const { name, password } = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				<label>
					Name:<br/>
					<input
						type="text"
						value={name}
						onChange={(e) => this.onChange("name", e)}
					/>
				</label>
				<br/>
				<label>
					Password:
					<br/>
					<input
						type="password"
						value={password}
						onChange={(e) => this.onChange("password", e)}
					/>
				</label>
				<br/>
				<input type="submit" value="Login"/>
			</form>
		)
	}
}
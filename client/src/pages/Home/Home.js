import React, { Component } from "react";
import { Container, Col, Row, Jumbotron } from 'reactstrap';
import "./Home.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Home extends Component {
	state = {
		churches: [],
		name: "",
		location: "",
		summary: "",
		query: this.props.match.params || {}
	}

	checkState = () => {
		let searchObj = {};
		if (this.state.name.length > 0) {
			searchObj.name = this.state.name;
		}
		if (this.state.location.length > 0) {
			searchObj.location = this.state.location;
		}
		return searchObj;
	}

	handleInputChange = event => {
		console.log("-");
		// Destructure the name and value properties off of event.target
		// Update the appropriate state
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
		console.log(this.state);
	}

	handleFormSubmit = event => {
		console.log("Button pushed");
		console.log(this.state.location);
		event.preventDefault();
		if (this.state.location) {
			API.getChurches({
				location: this.state.location
			})
				.then(res => console.log(res.data))
				//this.setState({churches: res.data , name: "", location: "", summary: ""}) ;
				.catch(err => console.log(err));
		}
	}

	loadBooks = () => {
		API.getChurches()
			.then(res =>
				this.setState({ churches: res.data, name: "", location: "", summary: "" })
			)
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="home">
				<Jumbotron fluid className="jumbotron">
					<Container fluid className="container">
						<h1>HOME PAGE</h1>
						<Link to={"/churches"}>
							<button>
								Find Your Church 
							</button>
						</Link>
					</Container>
				</Jumbotron>
				
			</div>
				
		)
	}
}

export default Home;
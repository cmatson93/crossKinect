import React, { Component } from "react";
import { Container, Col, Row, Jumbotron } from 'reactstrap';
import "./Home.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Home extends Component {

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
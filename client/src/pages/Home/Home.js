import React, { Component } from "react";
import { Container, Col, Row, Jumbotron, Button } from 'reactstrap';
import "./Home.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Home extends Component {

	render() {
		return (
			<div className="home">
				<Jumbotron fluid className="jumbotron">
					<Container fluid className="container">
						<h1>Cross Kinect</h1>
						<h3>Find a community to KINECT with no matter where you are. </h3>
						<Link to={"/churches"} style={{ textDecoration: 'none' }}>
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
import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import { Container, Col, Row, Jumbotron } from 'reactstrap';
import "./Home.css";

class Home extends Component {

	render() {
		return (
			<div className="home">
				<Jumbotron fluid className="jumbotron">
					<Container fluid className="container">
						<h1>HOME PAGE</h1>
							<SearchBar className="searchBar"/>
					</Container>
				</Jumbotron>
				
			</div>
				
		)
	}
}

export default Home;
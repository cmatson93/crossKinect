import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';
// import "./SearchBar.css";


export default class SearchBar extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	
    };
  	// props.platformQuery()
	// 		.then(res => this.setState({ platforms: res.data }))
  	// 	.catch(err => console.log(err));
  }

	render() {
		return (
			<div className='searchbar '>
                <Row className='search-bar-row justify-content-center'>
                    <Col md='3'></Col>
                    <Col className='col-search-location' md='4' xs='12'>
                        <Input
                            className="location-seach-input"
                            placeholder='Search Location'
                            onChange={this.props.inputHandler}
                            value={this.props.location}
                        />
                    </Col>
                    <Col className='col-search-btn' md='5' xs='3'>
						<Button className="search-btn" onClick={this.props.buttonHandler}>Search</Button>
					</Col>
                    <Col md='2'></Col>
				</Row>
			</div>
		);
	}
}
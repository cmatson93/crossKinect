import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import SearchBar from "../../components/SearchBar";

class Churches extends Component {
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
            <SearchBar 
            className = "searchBar"
            inputHandler = { this.handleInputChange }
            buttonHandler = { this.handleFormSubmit }
            value = { this.state.location }
            location = { this.state.location }
            name = 'location' 
            />
        );
    }
}

export default Churches;
import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Churches extends Component {
  state = {
    churches: [],
    name: "",
    location: "",
    summary: ""
  };

  componentDidMount() {
    this.loadChurches();
  }

  loadChurches = () => {
    API.getChurches()
      .then(res =>
        this.setState({ churches: res.data, name: "", location: "", summary: "" })
      )
      .catch(err => console.log(err));
  };

  deleteChurch = id => {
    API.deleteChurch(id)
      .then(res => this.loadChurches())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.location) {
      API.saveChurch({
        name: this.state.name,
        location: this.state.location,
        summary: this.state.summary
      })
        .then(res => this.loadChurches())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What churches Should I Read?</h1>
            </Jumbotron>
            
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>churches On My List</h1>
            </Jumbotron>
            {this.state.churches.length ? (
              <List>
                {this.state.churches.map(church => (
                  <ListItem key={church._id}>
                    <Link to={"/churches/" + church._id}>
                      <strong>
                        {church.name} by {church.location}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletechurch(church._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Churches;

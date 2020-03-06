import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

class UsernameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onchange = this.onchange.bind(this);
  }

  onchange(event) {
    const { value } = event.target;
    this.setState({
      username: value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  render() {
    return (
      <div className="container">
        {" "}
        <h1 style={{ textAlign: "center" }}>Welcome</h1>
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Group as={Row} controlId="formName">
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="What is your name?"
                onChange={this.onchange}
              />
            </Col>

            <Col sm="2">
              <Button type="submit" variant="info">
                Submit
              </Button>{" "}
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default UsernameForm;

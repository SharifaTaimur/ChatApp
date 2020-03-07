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
      <section id="entry-page">
        <Form onSubmit={this.onSubmit}>
          <h2>Welcome!</h2>

          <Form.Group as={Row} controlId="formName">
            <Col sm="12">
              <Form.Control
                size="lg"
                type="text"
                placeholder="What is your name?"
                onChange={this.onchange}
              />
            </Col>
          </Form.Group>

          <Button type="submit" variant="info">
            Submit
          </Button>
        </Form>
      </section>
    );
  }
}

export default UsernameForm;

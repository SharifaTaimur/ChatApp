import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

class SendMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onchange = this.onchange.bind(this);
  }

  onchange(event) {
    const { value } = event.target;
    this.setState({
      text: value
    });

    this.props.onChange();
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  }

  render() {
    const styles = {
      container: {
        padding: 20,
        borderTop: "1px #4C758F solid",
        marginBottom: 20
      },

      input: {
        color: "inherit",
        background: "none",
        outline: "none",
        border: "none",
        flex: 1,
        fontSize: 16
      }
    };
    return (
      <div style={styles.container}>
        {" "}
        <Form onSubmit={this.onSubmit}>
          <Form.Group as={Row} controlId="formText">
            <Col sm="10">
              <Form.Control
                onChange={this.onchange}
                type="text"
                placeholder="Type a message here then hit ENTER"
                value={this.state.text}
                style={styles.input}
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

export default SendMessageForm;

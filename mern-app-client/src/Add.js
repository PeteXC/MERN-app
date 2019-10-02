import React from "react";
import { Form, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class Add extends React.Component {
  render() {
    return (
      <div>
        <br />
        <h1> Please provide a quote to add </h1>
        <br />
        <div className="Form">
          <Form>
            <Form.Group controlId="formBasicInput">
              <Form.Label>Quote</Form.Label>
              <Form.Control type="input" placeholder="Quote me baby" />
              <Form.Text className="text-muted">
                Share your wisdom with us
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicInput">
              <Form.Label>Author</Form.Label>
              <Form.Control type="input" placeholder="It is I" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Are you sure about this?" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

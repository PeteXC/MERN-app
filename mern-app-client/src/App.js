// Module Imports
import * as React from "react";
import { Button, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { Route, Switch, Link, Redirect, withRouter } from "react-router-dom";

// Component Imports
import Home from "./Home";
import View from "./View";
import Add from "./Add";

// Resources Imports
import logo from "./logo.png";

// Stylesheet Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;QuoteMe</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/view">View</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <div>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/view" render={props => <View {...props} />} />
            <Route path="/add" render={props => <Add {...props} />} />
            <Route path="*" render={() => <p>YOU DONE GOOFED</p>} />
          </Switch>
        </div>
      </div>
    );
  }
}

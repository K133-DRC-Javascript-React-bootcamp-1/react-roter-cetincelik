import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Outlet } from "react-router-dom";


export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Home</NavbarBrand>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/About/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Blog">
                  Blog
                </NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        <Outlet/>
      </div>
    );
  }
}
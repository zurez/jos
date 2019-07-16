import React, { Props } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

export default class TopActionBar extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="lg">
          <Nav className="ml-auto" navbar>
            <NavItem
              style={{
                color: "white",
                fontSize: "0.9"
              }}
            >
              6:18 PM
            </NavItem>
            <NavItem>
              <Button
                className={"mr-left10"}
                outline
                color="red"
                size="sm"
                close
                style={{
                  color: "red"
                }}
              />
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

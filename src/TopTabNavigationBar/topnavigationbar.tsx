import React from "react";
import { Nav, NavItem, Button, Navbar, NavLink } from "reactstrap";
export default class TopTabNavigationBar extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav color="light"  light expand="lg" tab>
        
            <NavItem>
              <NavLink active>F:/NewFolder</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active>F:/NewFolder</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active>F:/NewFolder</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active>F:/NewFolder</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active>F:/NewFolder</NavLink>
            </NavItem>
          </Nav>
       
      </div>
    );
  }
}

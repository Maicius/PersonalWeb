var React = require('react');
import { IndexLink } from 'react-router';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
const App = React.createClass({
render() {
    return (
  <div>
    <div className="Sidebar">
      <Navbar inverse >
        <Navbar.Header lassName="margin-bottom-0">
          <Navbar.Brand>
            <IndexLink to="/" activeClassName="active" className="link margin-bottom-0">Home</IndexLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={2} href="#/Blog">Blog</NavItem>
        </Nav>
       {/*<Navbar.Form pullRight>*/}
          {/*<FormGroup>*/}
            {/*<FormControl type="text" placeholder="Search" />*/}
          {/*</FormGroup>*/}
          {/*{' '}*/}
          {/*<Button type="submit">Submit</Button>*/}
        {/*</Navbar.Form>*/}
      </Navbar>
    </div>
        {this.props.children}
  </div>
    );
  }

});
module.exports = App;

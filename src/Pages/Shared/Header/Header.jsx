import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showUsername, setShowUsername] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.error(error));
  };

  const handleMouseEnter = () => {
    setShowUsername(true);
  };

  const handleMouseLeave = () => {
    setShowUsername(false);
  };

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">FoodBuZZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">
                {' '}
                <Link to={'/'}>Home</Link>
              </Nav.Link>
              <Nav.Link href="#features">
               
                <Link to={'/blog'}>Blog</Link>
              </Nav.Link>
              <Nav.Link href="#features">
               
                <Link to={'/contact'}>Contact</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <div
                    className="avatar"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-14 rounded-full">
                      <img src={user.photoURL || 'https://i.ibb.co/sKyNvJM/2476166.png'} alt="User Avatar" />
                    </div>
                  </div>
                  {showUsername && <span>{user.displayName || 'Anonymous'}</span>}
                  <Button onClick={handleLogOut} style={{ border: 'none', background: 'transparent' }} variant="outline-dark">
                    Sign Out
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button style={{ border: 'none', background: 'transparent' }} variant="outline-dark">
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;

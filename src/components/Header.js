import React from 'react'
import { Link, useLocation } from "react-router-dom";
import {
    Badge,
    Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
  } from "react-bootstrap";
  import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
    <Container>
        <Navbar.Brand>
            <Link to='/'>Shoping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl style={{width: "500"}} placeholder='Search here..' className="m-auto"></FormControl>
        </Navbar.Text>
        <Nav>
        <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{10}</Badge>
            </Dropdown.Toggle> 
            <Dropdown.Menu style={{ minWidth: 370 }}>  
            <span style={{ padding: 10 }}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
    </Container>
    </Navbar>
  )
}

export default Header

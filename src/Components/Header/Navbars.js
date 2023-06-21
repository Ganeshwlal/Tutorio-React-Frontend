import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Navbars() {
  return (
    <>
     <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/XYTmjSvg/1623499119810.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Moonhive Students
          </Navbar.Brand>
        </Container>
      </Navbar>   
    </>
  )
}

export default Navbars
import React, { useState, useCallback } from 'react'
import { Nav, Navbar, Container, Button, Offcanvas, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

export const MainNavBar = () => {

  const [Show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();


  return (
    <Navbar bg='light' variant='light' fixed='top'>
      <Container>
        <Navbar.Brand>OpWeb</Navbar.Brand>
        <Button variant='success' onClick={handleShow}>Menu</Button>
      </Container>
      <Offcanvas placement='end' show={Show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>OpWeb</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav activeKey={1}>
            <Stack className='mb-5' bsPrefix='vstack' gap={3}>
              <Nav.Item>
                <Link eventKey={1} to='/item1'>Item1</Link>
              </Nav.Item>
              <Nav.Item>
                <Link eventKey={2} to='/item2'>Item2</Link>
              </Nav.Item>
              <Nav.Item>
                <Link eventKey={3} to='/item3'>Item3</Link>
              </Nav.Item>
              <Nav.Item>
                <Link eventKey={4} to='/item4'>Item4</Link>
              </Nav.Item>
            </Stack>
            <Stack className='mt-5'>
              <Button 
                variant='outline-secondary'
                onClick={useCallback(() => navigate('/login', {replace: true}), [navigate])}>
              
                  Inicia sesión
              
              </Button>
            </Stack>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  )
}

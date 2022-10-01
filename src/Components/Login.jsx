import React from 'react'
import {Container, Button, Offcanvas, Stack, Form } from 'react-bootstrap';
export const Login = () => {
  return (
  <Container>
    <h1>Login</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  )
}

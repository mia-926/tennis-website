import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Input = () => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formEmail">
      <Form.Label>Username</Form.Label>
      <Form.Control type="Username" placeholder="Enter Username" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formEmailList">
      <Form.Check type="checkbox" label="Join Mailing list" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Sign Up
    </Button>
  </Form>
  )
}

import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./inputStyle.css";

export const Input = () => {
  return (
    <Form style ={{width: 500}}>
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
  <div className="form-check-checkbox-container">
    <input className="form-check-input" type="checkbox" id="formCheck-1" />
    <label className="form-check-label" htmlFor="formCheck-1">Sign me up for mailing list</label>
  </div>
    </Form.Group>
    <Button className="submit-Button" style = {{height: 60}} variant="primary" type="submit">
      Sign Up
    </Button>
  </Form>
  )
}

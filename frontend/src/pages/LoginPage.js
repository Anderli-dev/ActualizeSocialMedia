import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form_Data = new FormData()
    form_Data.append("username", formData.email)
    form_Data.append("password", formData.password)

    axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, form_Data,
        {headers: {
          'Content-Type': "application/x-www-form-urlencoded",
          'Access-Control-Allow-Origin': "*",
          }, withCredentials: true}
    )
    .then(response => {
      console.log('Server response:', response.data.token);
      //window.location.replace('/');
    })
    .catch(error => {
      console.error('Error:', error);
    });

    localStorage.setItem('username', formData.username);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="my-5">
          <div className="text-center mb-4">
            <h1>Login</h1>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="rounded-pill"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="rounded-pill"
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" className="rounded-pill">
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

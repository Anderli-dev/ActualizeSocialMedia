import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

export function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
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
    const headers = {
            'Accept': "application/json",
            'Content-Type': "application/json; charset=UTF-8",
            'Access-Control-Allow-Origin': "*",
        };

    console.log('Дані для відправки:', {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    console.log(`${process.env.REACT_APP_API_URL}`)

    axios.post(`http://127.0.0.1:8000/register`, {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    },
        {headers:headers}
    )
    .then(response => {
      console.log('Відповідь сервера:', response.data.token);
    })
    .catch(error => {
      console.error('Помилка при відправці запиту:', error);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

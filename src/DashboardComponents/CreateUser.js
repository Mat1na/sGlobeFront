import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function CreateUser() {
    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    function handleChange(event) {
        const { name, value } = event.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3001/users/create-user', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(input)
        });
        
        alert('User has been added to the system!')
    
        setInput({
          username: '',
          password: ''
        })
      }
    
      // Required field alert
      function btnClick() {
        if (input.username === undefined || input.username === "") {
          alert("Username is required")
        }
        if (input.password === undefined || input.password === "") {
            alert("Password is required")
          }
      }

    return (
        <Container>
        <h1 className="dashboardmargin">Create new user</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control required name="username" onChange={handleChange} value={input.username} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control required name="password" onChange={handleChange} value={input.password} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={btnClick}>
            Submit
          </Button>
        </Form>
      </Container>
    )
}

export default CreateUser
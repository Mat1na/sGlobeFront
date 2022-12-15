import React, { useState } from 'react'
import { Button, Form, Container } from "react-bootstrap";
import { useAuth } from './Components/auth';


export const Login = () => {
  const [input, setInput] = useState({user: "",password: ""})
  const auth = useAuth()

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = input.user
    console.log(input)
    auth.login(user);
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    }).then((response) => response.body)
      .then((rb) => {
        const reader = rb.getReader();

        return new ReadableStream({
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              reader.read().then(({ done, value }) => {
                // If there is no more data to read
                if (done) {
                  console.log('done', done);
                  controller.close();
                  return;
                }
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
                // Check chunks by logging to the console
                console.log(done, value);
                push();
              });
            }
            push();
          },
        });
      })
      .then((stream) =>
        // Respond with our stream
        new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
      )
      .then((result) => {
        // Do things with result
        console.log(result)
        if (result.split("\"")[3] !== "wrong") {
          sessionStorage.setItem("token", result.split("\"")[3]);
          window.location.replace("/dashboard")
        } else {
          alert('Wrong username and/or password')
        };
      });
  }

  function btnClick() {
    if (input.user === undefined || input.user === "") {
      alert("Username is required");
    }
    if (input.password === undefined || input.password === "") {
      alert("Password is required");
    }
  }


  return (
    <div>
      <Container>
        <h1 className="dashboardmargin">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              name='user'
              value={input.user}
              onChange={handleChange} />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={input.password}
              type="password"
              onChange={handleChange} />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={btnClick}>Submit</Button>
        </Form>
      </Container>
    </div>
  )
}

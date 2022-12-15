import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CreateAuthor() {
  const [input, setInput] = useState({
    authorname: ''
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
    fetch('http://localhost:3001/authors/create-author', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input)
    });
    
    alert('Author has been added to the system!')

    setInput({
      authorname: ''
    })
  }

  // Required field alert
  function btnClick() {
    if (input.authorname === undefined || input.authorname === "") {
      alert("Name is required")
    }

  }

  return (
    <Container>
      <h1 className="dashboardmargin">Create new author</h1>
      <Link to={"/authors"} className="btn btn-danger mr-2 mb-2">
          Go back
        </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control required placeholder="Van Meerbeek, K." name="authorname" onChange={handleChange} value={input.authorname} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={btnClick}>
          Submit
        </Button>
        <Link to={"/authors"} className="btn btn-danger mx-2">
          Go back
        </Link>
      </Form>
    </Container>
  )
}

export default CreateAuthor
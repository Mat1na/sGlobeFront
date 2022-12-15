import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function EditAuthor() {
  const { authorid } = useParams();
  const [author, setAuthor] = useState({});
  const [input, setInput] = useState({
    authorname: ""
  })

  const fetchAuthor = async () => {
    let res = await fetch("http://localhost:3001/authors/fetch-authors");
    let data = await res.json();
    if (res.ok) {
      var filtereddata = data.find(item => item._id === authorid);
      setAuthor(filtereddata);
      setInput({ authorname: filtereddata.authorname })
    }
  };
  useEffect(() => {
    fetchAuthor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorid]);

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
    fetch(`http://localhost:3001/authors/edit-author/${authorid}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input)
    })
    alert('Author has been updated in the system!')
  }


  // Required field alert
  function btnClick() {
    if (input.authorname === undefined || input.authorname === "") {
      alert("Name is required")
    }

  }


  return (
    <Container>
      <h1 className="dashboardmargin">Edit Author</h1>
      <Link to={"/authors"} className="btn btn-danger mr-2 mb-2">
          Go back
        </Link>
      {Object.keys(author).length > 0 && <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="authorname">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" defaultValue={author.authorname} required name="authorname" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={btnClick}>
          Update
        </Button>
        <Link to={"/authors"} className="btn btn-danger mx-2">
          Go back
        </Link>
      </Form>}
    </Container>
  );
}

export default EditAuthor;
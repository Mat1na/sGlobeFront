import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from "@react-icons/all-files/ai/AiOutlineUserAdd";
import { AiOutlineUserDelete } from "@react-icons/all-files/ai/AiOutlineUserDelete";

function CreatePub() {
  // Handle change for Authors and rest inputs
  const [authArray, setAuthArray] = useState([{ author: "" }]);
  const [input, setInput] = useState({
    order:"",
    publicationtitle: "",
    journal: "",
    year: "",
    issue: "",
    abstract: "",
    link: "",
    image: "",
  });

  function handleChange(event, index) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  function handleChangeAuth(event, index) {
    const { name, value } = event.target;
    const authors = [...authArray];
    authors[index][name] = value;
    setAuthArray(authors);
  }

  // Handle Submit
  function handleSubmit(event) {
    event.preventDefault();
    input.authors = authArray;
    fetch("http://localhost:3001/publications/create-pub", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
    alert("Project has been added to the system!");

    // Clear input fields after submit
    setAuthArray([{ author: "" }]);
    setInput({
      order:"",
      publicationtitle: "",
      journal: "",
      year: "",
      issue: "",
      abstract: "",
      link: "",
      image: "",
    });
  }

  // Required field alert
  function btnClick() {
    if (input.publicationtitle === undefined || input.publicationtitle === "") {
      alert("Title is required");
    }
    if (input.journal === undefined || input.journal === "") {
      alert("Journal is required");
    }
    if (input.order === undefined || input.order === "") {
      alert("Order is required");
    }
    if (input.year=== undefined || input.year=== "") {
      alert("Year is required");
    }
  }

  ////Buttons for add/remove author
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const authors = [...authArray];
    authors.splice(index, 1);
    setAuthArray(authors);
  };

  // handle click event of the Add button
  const handleAddClick = (i) => {
    setAuthArray([...authArray, { author: "" }]);
  };

  return (
    <Container>
      <h1 className="dashboardmargin">Create new publication</h1>
      <Link to={"/publications"} className="btn btn-danger mr-2 mb-2">
          Go back
        </Link>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
          <Form.Label>Order</Form.Label>
          <Form.Control
            required
            name="order"
            placeholder="E.g. 1"
            onChange={handleChange}
            value={input.order}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            name="publicationtitle"
            onChange={handleChange}
            value={input.publicationtitle}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Journal</Form.Label>
          <Form.Control
            required
            name="journal"
            onChange={handleChange}
            value={input.journal}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control
            name="year"
            onChange={handleChange}
            value={input.year}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="issue">
          <Form.Label>Issue & page number</Form.Label>
          <Form.Control
            type="text"
            name="issue"
            onChange={handleChange}
            value={input.issue}
          />
        </Form.Group>

        {authArray.map((x, i) => {
          return (
            <Row className="box">
              <Col md={10} className="">
                <Form.Group className="mb-3">
                  <Form.Label>{`Author No.${i + 1}`}</Form.Label>
                  <Form.Control
                    placeholder={`Enter Author No.${i + 1} `}
                    required
                    onChange={(e) => handleChangeAuth(e, i)}
                    name="author"
                    value={x.author}

                  />
                </Form.Group>
              </Col>

              <Col md={2} className="btn-box mb-3 ">
                <Form.Label className="hidden-label ">Button</Form.Label>
                {authArray.length !== 1 && (
                  <Button
                    variant="danger"
                    className="mx-2 mb-2"
                    onClick={() => handleRemoveClick(i)}
                  >
                    <AiOutlineUserDelete />
                  </Button>
                )}
                {authArray.length - 1 === i && (
                  <Button className="mx-2 mb-2" onClick={handleAddClick}>
                    <AiOutlineUserAdd />
                  </Button>
                )}
              </Col>
            </Row>
          );
        })}

        {/* <Form.Control
            onChange={handleChange}
            placeholder="Enter second author name"
            className="mt-2"
            name="author2"
            value={input.author2}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter third author name"
            className="mt-2"
            name="author3"
            value={input.author3}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter fourth author name"
            className="mt-2"
            name="author4"
            value={input.author4}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter fifth author name"
            className="mt-2"
            name="author5"
            value={input.author5}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter sixth author name"
            className="mt-2"
            name="author6"
            value={input.author6}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter seventh author name"
            className="mt-2"
            name="author7"
            value={input.author7}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter eighth author name"
            className="mt-2"
            name="author8"
            value={input.author8}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter ninth author name"
            className="mt-2"
            name="author9"
            value={input.author9}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter tenth author name"
            className="mt-2"
            name="author10"
            value={input.author10}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter eleventh author name"
            className="mt-2"
            name="author11"
            value={input.author11}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter twelfth author name"
            className="mt-2"
            name="author12"
            value={input.author12}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter thirteenth author name"
            className="mt-2"
            name="author13"
            value={input.author13}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter fourteenth author name"
            className="mt-2"
            name="author14"
            value={input.author14}
          />
          <Form.Control
            onChange={handleChange}
            placeholder="Enter fifteenth author name"
            className="mt-2"
            name="author15"
            value={input.author15}
          />
        </Form.Group> */}

        <Form.Group className="mb-3">
          <Form.Label>Abstract</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            name="abstract"
            onChange={handleChange}
            value={input.abstract}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link</Form.Label>
          <Form.Control
            name="link"
            onChange={handleChange}
            value={input.link}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link image</Form.Label>
          <Form.Control
            name="image"
            placeholder="Enter the link of the image you uploaded"
            onChange={handleChange}
            value={input.image}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={btnClick}>
          Submit
        </Button>
        <Link to={"/publications"} className="btn btn-danger mx-2">
          Go back
        </Link>
      </Form>
    </Container>
  );
}

export default CreatePub;

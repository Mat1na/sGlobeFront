import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from "@react-icons/all-files/ai/AiOutlineUserAdd";
import { AiOutlineUserDelete } from "@react-icons/all-files/ai/AiOutlineUserDelete";

function CreateProject() {
  const [researchersArray, setResearchersArray] = useState([{researcher: "" }]);
  const [input, setInput] = useState({
    title: "",
    researchers:"",
    image: "",
    content: "",
    summary: "",
    imagetext: "",
    imagetextlink: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  function handleChangeResearch(event, index) {
    const { name, value } = event.target;
    const researchers = [...researchersArray];
    researchers[index][name] = value;
   setResearchersArray(researchers);
  }

  function handleSubmit(event) {
    event.preventDefault();
    input.researchers= researchersArray;
    fetch("http://localhost:3001/projects/create-project", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
    alert("Project has been added to the system!");

    // Clear input fields after submit
    setResearchersArray([{researcher: "" }])
    setInput({
      title: "",
      image: "",
      content: "",
      summary: "",
      researchers: "",
      imagetext: "",
      imagetextlink: "",
    });
  }
  // Required field alert
  function btnClick() {
    if (input.title === undefined || input.title === "") {
      alert("Title is required");
    }
    if (input.image === undefined || input.image === "") {
      alert("Image link is required");
    }
    if (input.content === undefined || input.content === "") {
      alert("Content is required");
    }


    if (input.summary === undefined || input.summary === "") {
      alert("Summary is required");
    }
  }


    ////Buttons for add/remove researcher
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const researchers = [...researchersArray];
    researchers.splice(index, 1);
    setResearchersArray(researchers);
  };

  // handle click event of the Add button
  const handleAddClick = (i) => {
    setResearchersArray([...researchersArray, {researcher: "" }]);
  };
  return (
    <Container>
      <h1 className="dashboardmargin">Create new project</h1>
      <Link to={"/projects"} className="btn btn-danger mr-2 mb-2">
          Go back
        </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            name="title"
            onChange={handleChange}
            value={input.title}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link image</Form.Label>
          <Form.Control
            required
            name="image"
            onChange={handleChange}
            value={input.image}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            required
            name="content"
            onChange={handleChange}
            value={input.content}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            name="summary"
            onChange={handleChange}
            value={input.summary}
          />
        </Form.Group>

    {researchersArray.map((x,i)=>{
      return(
   <Row >
    <Col md={10} className="">
    <Form.Group className="mb-3">
        <Form.Label>{`Researcher No.${i + 1}`}</Form.Label>
        <Form.Control
        placeholder={`Enter Researcher No.${i + 1} `}
          required
          name="researcher"
          onChange={(e) => handleChangeResearch(e, i)}
          value={x.researcher}
        />
      </Form.Group>
    </Col >

    <Col md={2} className="btn-box mb-3 ">
    <Form.Label className="hidden-label ">Button</Form.Label>
                {researchersArray.length !== 1 && (
                  <Button
                    variant="danger"
                    className="mx-2 mb-2"
                    onClick={() => handleRemoveClick(i)}
                  >
                    <AiOutlineUserDelete />
                  </Button>
                )}
                {researchersArray.length - 1 === i && (
                  <Button className="mx-2 mb-2" onClick={handleAddClick}>
                    <AiOutlineUserAdd />
                  </Button>
                )}
    </Col>
   </Row>
      )
    })}

        <Form.Group className="mb-3">
          <Form.Label>Image text</Form.Label>
          <Form.Control
            name="imagetext"
            onChange={handleChange}
            value={input.imagetext}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image text link</Form.Label>
          <Form.Control
            name="imagetextlink"
            onChange={handleChange}
            value={input.imagetextlink}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={btnClick}>
          Submit
        </Button>
        <Link to={"/projects"} className="btn btn-danger mx-2">
          Go back
        </Link>
      </Form>
    </Container>
  );
}

export default CreateProject;

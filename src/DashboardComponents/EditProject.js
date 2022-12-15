import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineUserAdd } from "@react-icons/all-files/ai/AiOutlineUserAdd";
import { AiOutlineUserDelete } from "@react-icons/all-files/ai/AiOutlineUserDelete";

function EditProject() {
  const { projectid } = useParams();
  const myRefs=useRef([]);
  const [project, setProject] = useState({});
  const [researchersArray, setResearchersArray] = useState([{researcher: "" }]);
  const [input, setInput] = useState({
    title: "",
    image: "",
    content: "",
    summary: "",
    researchers: "",
    imagetext: "",
    imagetextlink: ""
  })


  useEffect(() => {
    const fetchProject = async () => {
      let res = await fetch("http://localhost:3001/projects/fetch-projects");
      let data = await res.json();
      if (res.ok) {
        var filtereddata = data.find(item => item._id === projectid);
        setProject(filtereddata);
        setInput({ title: filtereddata.title, image: filtereddata.image, content: filtereddata.content, summary: filtereddata.summary, researchers: filtereddata.researchers, imagetext: filtereddata.imagetext, imagetextlink: filtereddata.imagetextlink })
  
        let Display = filtereddata.researchers
       setResearchersArray(Display)
      }
    };
    fetchProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectid]);

  function handleChange(event) {
    const { name, value } = event.target

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
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
    fetch(`http://localhost:3001/projects/edit-project/${projectid}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input)
    })
    alert('Project has been updated in the system!')
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
      <h1 className="dashboardmargin">Edit Project</h1>
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
            defaultValue={project.title}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link image</Form.Label>
          <Form.Control
            required
            name="image"
            onChange={handleChange}
            defaultValue={project.image}
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
            defaultValue={project.content}
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
            defaultValue={project.summary}
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
          defaultValue={x.researcher}
          ref={el => (myRefs.current[i] = el)}
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
            defaultValue={project.imagetext}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image text link</Form.Label>
          <Form.Control
            name="imagetextlink"
            onChange={handleChange}
            defaultValue={project.imagetextlink}
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
  )
}

export default EditProject
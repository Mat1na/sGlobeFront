import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgPlayListAdd } from "@react-icons/all-files/cg/CgPlayListAdd";
import { RiDeleteBin6Fill } from "@react-icons/all-files/ri/RiDeleteBin6Fill";

function CreateLabMembers() {
  // Handle change for interests and rest inputs
  const [intrstArray, setIntrstArray] = useState([{ interest: "" }]);
  const [radiocheck, setRadiocheck] = useState(false);
  const [input, setInput] = useState({
    membername: "",
    image: "",
    functionbasic: "",
    functionextra: "",
    googlescholar: "",
    researchgate: "",
    orcid: "",
    twitter: "",
    email: "",
    currentmember: "",
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

  function handleChangeRadio(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    const radioState = true;
    setRadiocheck(radioState);
  }

  function handleChangeIntrst(event, index) {
    const { name, value } = event.target;
    const interests = [...intrstArray];
    interests[index][name] = value;
    setIntrstArray(interests);
  }

  //function to see whether the radio buttons are checked

  // Required field alert
  function btnClick() {
    if (input.membername === undefined || input.membername === "") {
      alert("Name is required");
    }
    if (input.image === undefined || input.image === "") {
      alert("Image is required");
    }
    if (input.functionbasic === undefined || input.functionbasic === "") {
      alert("Function is required");
    }
    if (radiocheck === false) {
      alert(
        "Please select whether the lab member currently belongs to the lab"
      );
    }
  }

  // Handle Submit
  function handleSubmit(event) {
    event.preventDefault();
    input.interests = intrstArray;
    fetch("http://localhost:3001/labmembers/create-member", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
    alert("Lab member has been added to the system!");
    ;

    // Clear input fields after submit
    setIntrstArray([{ interest: "" }]);
    setInput({
      membername: "",
      image: "",
      functionbasic: "",
      functionextra: "",
      googlescholar: "",
      researchgate: "",
      orcid: "",
      twitter: "",
      email: "",
      currentmember: "",
    });
    event.target.reset();
  }

  ////Buttons for add/remove interest
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const interests = [...intrstArray];
    interests.splice(index, 1);
    setIntrstArray(interests);
  };

  // handle click event of the Add button
  const handleAddClick = (i) => {
    setIntrstArray([...intrstArray, { interest: "" }]);
  };

  return (
    <>
      <Container>
      <h1 className="dashboardmargin">Create new lab member</h1>
        <Link to={"/labmembers"} className="btn btn-danger mr-2 mb-2">
            Go back
          </Link>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              name="membername"
              onChange={handleChange}
              value={input.membername}
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
            <Form.Label>Function</Form.Label>
            <Form.Control
              required
              name="functionbasic"
              onChange={handleChange}
              value={input.functionbasic}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Function (extra line)</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="functionextra"
              value={input.functionextra}
            />
          </Form.Group>

          {intrstArray.map((x, i) => {
            return (
              <Row className="box ">
                <Col md={10} className="">
                  <Form.Group className="mb-3">
                    <Form.Label>{`Interest No.${i + 1}`}</Form.Label>
                    <Form.Control
                      placeholder={`Enter interest No.${i + 1} `}
                      name="interest"
                      onChange={(e) => handleChangeIntrst(e, i)}
                      value={x.interest}
                      key={x.i}
                    />
                  </Form.Group>
                </Col>
                <Col md={2} className="btn-box mb-3 ">
                  <Form.Label className="hidden-label ">Button</Form.Label>
                  {intrstArray.length !== 1 && (
                    <Button
                      variant="danger"
                      className="mx-2 mb-2"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <RiDeleteBin6Fill />
                    </Button>
                  )}
                  {intrstArray.length - 1 === i && (
                    <Button className="mx-2 mb-2" onClick={handleAddClick}>
                      <CgPlayListAdd />
                    </Button>
                  )}
                </Col>
              </Row>
            );
          })}
          <Form.Group className="mb-3">
            <Form.Label>Link Google Scholar</Form.Label>
            <Form.Control
              name="googlescholar"
              onChange={handleChange}
              value={input.googlescholar}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link ResearchGate</Form.Label>
            <Form.Control
              name="researchgate"
              onChange={handleChange}
              value={input.researchgate}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link ORCiD</Form.Label>
            <Form.Control
              name="orcid"
              onChange={handleChange}
              value={input.orcid}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link Twitter</Form.Label>
            <Form.Control
              name="twitter"
              onChange={handleChange}
              value={input.twitter}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              value={input.email}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="me-2">Current member?</Form.Label>
            <Form.Check
              required
              inline
              name="currentmember"
              type="radio"
              label="Yes"
              value="Yes"
              onClick={handleChangeRadio}
            />
            <Form.Check
              inline
              name="currentmember"
              type="radio"
              label="No"
              value="No"
              onClick={handleChangeRadio}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={(e) => btnClick()}>
            Submit
          </Button>
          <Link to={"/labmembers"} className="btn btn-danger mx-2">
            Go back
          </Link>
        </Form>
      </Container>
    </>
  );
}

export default CreateLabMembers;

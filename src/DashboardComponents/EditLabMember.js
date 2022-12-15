import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { CgPlayListAdd } from "@react-icons/all-files/cg/CgPlayListAdd";
import { RiDeleteBin6Fill } from "@react-icons/all-files/ri/RiDeleteBin6Fill";

function EditLabMember() {
  // Handle change for interests and rest inputs
  const { memberid } = useParams();
  const myRefs = useRef([]);
  const [labmember, setLabmember] = useState({});
  const [intrstArray, setIntrstArray] = useState([{ interest: "" }]);
  const [input, setInput] = useState({
    membername: "",
    image: "",
    functionbasic: "",
    functionextra: "",
    interests: "",
    googlescholar: "",
    researchgate: "",
    orcid: "",
    twitter: "",
    email: "",
    currentmember: "",
  });

  useEffect(() => {
    const fetchLabmembers = async () => {
      let res = await fetch(
        "http://localhost:3001/labmembers/fetch-labmembers"
      );
      let data = await res.json();
      if (res.ok) {
        var filtereddata = data.find((item) => item._id === memberid);
        setLabmember(filtereddata);

        setInput({
          membername: filtereddata.membername,
          image: filtereddata.image,
          functionbasic: filtereddata.functionbasic,
          functionextra: filtereddata.functionextra,
          interests: filtereddata.interests,
          googlescholar: filtereddata.googlescholar,
          researchgate: filtereddata.researchgate,
          orcid: filtereddata.orcid,
          twitter: filtereddata.twitter,
          email: filtereddata.email,
          currentmember: filtereddata.currentmember,
        });

        let Display = filtereddata.interests;
        setIntrstArray(Display);
      }
    };

    fetchLabmembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberid]);

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
  }

  if (labmember.currentmember === "Yes") {
    document.getElementById("radioYes").defaultChecked = true;
  }
  if (labmember.currentmember === "No") {
    document.getElementById("radioNo").defaultChecked = true;
  }

  function handleChangeIntrst(event, index) {
    const { name, value } = event.target;
    const interests = [...intrstArray];
    interests[index][name] = value;
    setIntrstArray(interests);
  }

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
  }

  // Handle Submit
  function handleSubmit(event) {
    event.preventDefault();
    input.interests = intrstArray;
    fetch(`http://localhost:3001/labmembers/edit-labmember/${memberid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      alert("Lab member has been updated in the system!");
    ;


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
      <h1 className="dashboardmargin">Edit lab member</h1>
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
              defaultValue={labmember.membername}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link image</Form.Label>
            <Form.Control
              required
              name="image"
              onChange={handleChange}
              defaultValue={labmember.image}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Function</Form.Label>
            <Form.Control
              required
              name="functionbasic"
              onChange={handleChange}
              defaultValue={labmember.functionbasic}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Function (extra line)</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="functionextra"
              defaultValue={labmember.functionextra}
            />
          </Form.Group>

 
         
          
            {intrstArray.map((x, i) => {
              return (
                <Row className="box" key={x._id}>
                  <Col md={10} className="">
                    <Form.Group className="mb-3">
                    <Form.Label>{`Interest No.${i + 1} `}</Form.Label>
                      <Form.Control
                        placeholder={`Enter interest No.${i + 1} `}
                        name="interest"
                        onChange={(e) => handleChangeIntrst(e, i)}
                        defaultValue={x.interest}
                        ref={(el) => (myRefs.current[i] = el)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2} className="btn-box">
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
              defaultValue={labmember.googlescholar}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link ResearchGate</Form.Label>
            <Form.Control
              name="researchgate"
              onChange={handleChange}
              defaultValue={labmember.researchgate}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link ORCiD</Form.Label>
            <Form.Control
              name="orcid"
              onChange={handleChange}
              defaultValue={labmember.orcid}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link Twitter</Form.Label>
            <Form.Control
              name="twitter"
              onChange={handleChange}
              defaultValue={labmember.twitter}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              defaultValue={labmember.email}
            />
          </Form.Group>

          <Form.Group className="mb-3 radios">
            <Form.Label className="me-2">Current member?</Form.Label>
            <Form.Check
              inline
              name="currentmember"
              type="radio"
              label="Yes"
              value="Yes"
              id="radioYes"
              onClick={handleChangeRadio}
            />
            <Form.Check
              inline
              name="currentmember"
              type="radio"
              label="No"
              value="No"
              id="radioNo"
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

export default EditLabMember;

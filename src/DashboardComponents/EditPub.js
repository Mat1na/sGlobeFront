import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AiOutlineUserAdd } from "@react-icons/all-files/ai/AiOutlineUserAdd";
import { AiOutlineUserDelete } from "@react-icons/all-files/ai/AiOutlineUserDelete";



function EditPubList() {
  const { pubid } = useParams();
  const myRefs=useRef([]);
  const [pub, setPub] = useState({});
  const [authArray, setAuthArray] = useState([{ author: "" }]);
  const [input, setInput] = useState({
    order: "",
    publicationtitle: "",
    authors: "",
    journal: "",
    year: "",
    issue: "",
    abstract: "",
    link: "",
    image: "",
  });
  




  useEffect(() => {
    const fetchPub = async () => {
      let res = await fetch("http://localhost:3001/publications/fetch-publications");
      let data = await res.json();
      if (res.ok) {
        var filtereddata = data.find(item => item._id === pubid);
        setPub(filtereddata);
       
        setInput({ order: filtereddata.order, publicationtitle: filtereddata.publicationtitle, journal: filtereddata.journal, year: filtereddata.year, issue: filtereddata.issue, abstract: filtereddata.abstract, authors: filtereddata.authors, link: filtereddata.link, image: filtereddata.image })
  
        let Display = filtereddata.authors
        setAuthArray(Display)
    
  
      }
    };
  
    fetchPub();
  }, [pubid]);


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

  function handleSubmit(event) {
    event.preventDefault();
    input.authors = authArray;
    fetch(`http://localhost:3001/projects/edit-pub/${pubid}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input)
    })
      alert("Publication has been updated in the system!");
    
 
  }


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


  // Requierd field alert
  function btnClick() {
    if (input.publicationtitle === undefined || input.publicationtitle === "") {
      alert("Title is required");
    }
    if (input.journal === undefined || input.journal === "") {
      alert("Journal is required");
    }
    if (input.order=== undefined || input.order=== "") {
      alert("Order is required");
    }
    if (input.year=== undefined || input.year=== "") {
      alert("Year is required");
    }
  }
  return (

    <Container>
      <h1 className="dashboardmargin">Edit publication</h1>
      <Link to={"/publications"} className="btn btn-danger mr-2 mb-2">
         Go back
        </Link>
     {Object.keys(pub).length > 0 && <Form onSubmit={handleSubmit}>
     <Form.Group className="mb-3">
          <Form.Label>Order</Form.Label>
          <Form.Control
            required
            name="order"
            onChange={handleChange}
            defaultValue={pub.order}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            name="publicationtitle"
            onChange={handleChange}
            defaultValue={pub.publicationtitle}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Journal</Form.Label>
          <Form.Control
            required
            name="journal"
            onChange={handleChange}
            defaultValue={pub.journal}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control
            name="year"
            onChange={handleChange}
            defaultValue={pub.year}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="issue">
          <Form.Label>Issue & page number</Form.Label>
          <Form.Control
            type="text"
            name="issue"
            onChange={handleChange}
            defaultValue={pub.issue}
          />
        </Form.Group>
   
        {authArray.map((auth, i) => {

          return (
            <Row className="box">
              <Col md={10} className="">
                <Form.Group className="mb-3">
                  <Form.Label>{`Author No.${i + 1}`}</Form.Label>
                  <Form.Control
                    placeholder={auth.author}
                    onChange={(e) => handleChangeAuth(e, i)}
                    name="author"
                    defaultValue={auth.author}
                    required
                    ref={el => (myRefs.current[i] = el)}
                  />
                </Form.Group>
              </Col>

              <Col md={2} className="btn-box mb-3 ">
                <Form.Label className="hidden-label ">Button</Form.Label>
                {authArray.length !== 1 && (
                  <Button
                    type="submit"
                    variant="danger"
                    className="mx-2 mb-2"
                    onClick={() => handleRemoveClick(i)}
                  >
                    <AiOutlineUserDelete />
                  </Button>
                )}

                {authArray.length - 1 === i && (
                  <Button type="submit" className="mx-2 mb-2" onClick={() => handleAddClick()}>
                    <AiOutlineUserAdd />
                  </Button>
                )}
              </Col>
            </Row>


          );
        })}       

        <Form.Group className="mb-3">
          <Form.Label>Abstract</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            name="abstract"
            onChange={handleChange}
            defaultValue={pub.abstract}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link</Form.Label>
          <Form.Control
            name="link"
            onChange={handleChange}
            defaultValue={pub.link}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link image</Form.Label>
          <Form.Control
            name="image"
            placeholder="Enter the link of the image you uploaded"
            onChange={handleChange}
            defaultValue={pub.image}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={btnClick}>
          Submit
        </Button>
        <Link to={"/publications"} className="btn btn-danger mx-2">
          Go Back
        </Link>
      </Form>}

    </Container>
  );
}

export default EditPubList;

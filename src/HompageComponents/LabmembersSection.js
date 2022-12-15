import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from '@react-icons/all-files/fa/FaArrowCircleRight';
import { useInView } from "react-intersection-observer";
import LazyLoad from 'react-lazyload';


function LabmembersSection({ scrollPosition }) {

  const { ref: myLab1, inView: myLab1IsVisible } = useInView({ triggerOnce: true })
  const { ref: myLab2, inView: myLab2IsVisible } = useInView({ triggerOnce: true })
  const { ref: myLab3, inView: myLab3IsVisible } = useInView({ triggerOnce: true })
  const { ref: myLab4, inView: myLab4IsVisible } = useInView({ triggerOnce: true })



  const [labmemberList, setLabmemberList] = useState([]);
  const fetchLabmembers = async () => {
    var sortOrder = ["Assistant Professor", "Postdoc", "PhD student", "visiting PhD student", "Master student"];
    let res = await fetch("http://localhost:3001/labmembers/fetch-labmembers");
    let data = await res.json();
    setLabmemberList(data);
    var sorted = data.sort((a, b) => sortOrder.indexOf(a.functionbasic
    ) - sortOrder.indexOf(b.functionbasic
    ));
    console.log(sorted);
  };
  useEffect(() => {
    fetchLabmembers();
  }, []);



  return (

    <Container fluid className='mt-0 mb-0'>
      <h1 className={`pb-2 montserrat lab-section-title ${myLab1IsVisible ? "divslide" : ""}`} ref={myLab1}>Lab members</h1>
      <div className="p-3 d-flex  text-center justify-content-center align-items-center"> <h2 className={`p-3 pb-0 montserrat current-title divslide-before ${myLab2IsVisible ? "divslide" : ""}`} ref={myLab2}>Current members</h2></div>
      <Row className="p-3 pt-0 d-flex  text-center justify-content-center align-items-center">
        {/* Principal Investigator Section*/}
        {labmemberList.map((member, index) => {
          return member.currentmember === "Yes" && member.functionbasic === 'Assistant Professor' ? (
            // Grid system with shifting number of elements
            <Col
              md={5}
              className={`d-flex justify-content-center align-items-center divslide-before ${myLab2IsVisible ? "divslide" : ""}`}
              ref={myLab2}
              key={index}
            >
              <Link to={`/labmember/${member.membername.replace(/\s/g, '-').toLowerCase()}`} className="photo-link" >
                <div className={`members d-flex justify-content-center align-items-center`}
                >
                  <LazyLoad><img
                    key={member.membername}
                    alt={member.membername}
                    src={`${member.image}`}
                    className="member-photo"
                  /></LazyLoad>

                  <div className="member-photo-overlay">
                  </div>
                  <div className="member-text-overlay">
                    <h3 className="montserrat professorname h5">
                      {member.membername}
                    </h3>
                    <h5 className="roboto professorfunction h6">
                      {member.functionbasic}
                    </h5>
                  </div>
                </div>
              </Link>
            </Col>

          ) : ("")
        })}
        {/* Current members Section*/}
        {/* eslint-disable-next-line*/}
        <h2 className={`montserrat divslide-before ${myLab3IsVisible ? "divslide2" : ""}`} ref={myLab3}></h2>
        {labmemberList.map((member, index) => {
          return member.currentmember === "Yes" && member.functionbasic !== 'Assistant Professor' ? (
            // Grid system with shifting number of elements
            <Col
              xs={8}
              md={4}
              lg={3}
              xxl={2}
              className={`d-flex justify-content-center align-items-center memberpicturepadding divslide-before ${myLab3IsVisible ? "divslide2" : ""} `}
              key={index}

            >
              <Link to={`/labmember/${member.membername.replace(/\s/g, '-').toLowerCase()}`} className="photo-link" >
                <div className={`members d-flex justify-content-center align-items-center memberpicturepadding `}
                >
                  <LazyLoad><img
                    alt={member.membername}
                    key={member.membername}
                    src={`${member.image}`}
                    className='member-photo'
                  /></LazyLoad>
                  <div className="member-photo-overlay"></div>
                  <div className="member-text-overlay">
                    <h3 className="montserrat membername h5">
                      {member.membername}
                    </h3>
                    <h5 className="roboto memberfunction h6">
                      {member.functionbasic}
                    </h5>
                  </div>
                </div>
              </Link>
            </Col>
          ) : ("")
        })}
        {/* Alumni Section*/}
        <Link to={"/alumni"} className="pt-5 buttonpadding"><h3 className={`d-flex divslide-before  ${myLab4IsVisible ? "divslide" : ""} `} ref={myLab4}><Badge className="badge-icon montserrat">SEE ALUMNI <FaArrowCircleRight className="arrow-icon" /></Badge></h3></Link>
      </Row>
    </Container>

  );
}

export default LabmembersSection;

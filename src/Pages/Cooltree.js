import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import photo from "../assets/photo/SolitaryTree.webp"

function Cooltree() {
  const { ref: myRef1, inView: myRef1IsVisible1 } = useInView({ triggerOnce: true })
  const { ref: myRef2, inView: myRef1IsVisible2 } = useInView({ triggerOnce: true })
  return (
    <Container fluid className='details'>
      <Row className="d-flex align-items-center justify-content-center">
        <Col md={4} className={`pe-4 ${myRef1IsVisible1 ? "divMove2" : ""}`} ref={myRef1}><div className="research-photo-container-details">
          <img
            src={photo} alt="Large solitary trees are important structures in many landscapes." className='project-details'
          />
          <div className="project-photo-container-overlay" ></div>
        </div>
        </Col>
        <Col md={8} className={`project-details-text ${myRef1IsVisible2 ? "divMove3" : ""}`} ref={myRef2}>
          <p className='roboto project-text ps-2 pe-2 mb-0'>Large solitary trees are important structures in many landscapes. They host a large biodiversity and provide our society with numerous ecosystem services such as cooling, air filtering and cultural values. However, they are threathened by increased droughts, pests and pathogens and other disturbances.</p> <p className='roboto project-text ps-2 pe-2 mb-0'>Within the CoolTree project, <a href="https://fleur.ugent.be/" target="_blank" rel="noreferrer" className='roboto project-link'>an international team of researchers</a> is investigating the ecological value of large solitary trees in 9 European regions and how this will be affected in the face of climate change. For this, we identify the plant, insect, fungi and microbe species that are associated with these large solitary trees. We also measure how the tree itself is affecting the soil and the climate in its environment.</p> <p className='roboto project-text ps-2 pe-2'>If you want to get more information or you want to report any damage, please send an e-mail to <a href="mailto:koenraad.vanmeerbeek@kuleuven.be" target="_blank" rel="noreferrer" className='roboto project-link'>koenraad.vanmeerbeek@kuleuven.be</a></p>
          <h6 className="ps-2 pb-2 pe-2 roboto">Responsibles: <a href="https://www.ugent.be/bw/environment/en/research/fornalab/staff-fornalab/pieter-de-frenne.htm" target="_blank" rel="noreferrer"><p className="d-inline project-labmember roboto">Prof. Pieter De Frenne</p></a>, <Link to="/labmember/koenraad-van-meerbeek"><p className="d-inline project-labmember roboto">Prof. Koenraad Van Meerbeek</p></Link> and <a href="https://www.ugent.be/bw/environment/en/research/fornalab/staff-fornalab/arno-thomaes.htm" target="_blank" rel="noreferrer"><p className="d-inline project-labmember roboto">Dr. Arno Thomaes</p></a>
          </h6>
        </Col>
      </Row>
    </Container>
  )
}

export default Cooltree
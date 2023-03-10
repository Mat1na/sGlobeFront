import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import photo from "../assets/photo/GazondolkMeerdaalwoud.webp"

function Loggers() {
  const { ref: myRef1, inView: myRef1IsVisible1 } = useInView({ triggerOnce: true })
  const { ref: myRef2, inView: myRef1IsVisible2 } = useInView({ triggerOnce: true })
  return (
    <Container fluid className='details'>
      <Row className="d-flex align-items-center justify-content-center">
        <Col md={4} className={`pe-4 ${myRef1IsVisible1 ? "divMove2" : ""}`} ref={myRef1}><div className="research-photo-container-details">
          <img
            src={photo} alt="Een gazondolk in het Meerdaalwoud. Deze gesofisticeerde thermometer meet nauwkeurig welke temperatuur de plantjes – in dit geval: grote muur – op deze locatie in het bos voelen." className='project-details'
          />
          <div className="project-photo-container-overlay" ></div>
        </div>
        </Col>
        <Col md={8} className={`project-details-text ${myRef1IsVisible2 ? "divMove3" : ""}`} ref={myRef2}>
          <p className='roboto project-text ps-2 pe-2 mb-0'>Hier voert de <a href="https://ees.kuleuven.be/nl/bnl" target="_blank" rel="noreferrer" className='roboto project-link'>Afdeling Bos, Natuur en Landschap</a> onderzoek uit naar de effecten van bosbeheer en klimaatverandering op het bosmicroklimaat en de biodiversiteit. Het witte apparaatje in de grond is een sensor die elke 15 minuten de temperatuur en de bodemvochtigheid registreert. Zo meten we zeer nauwkeurig het bosmicroklimaat op deze plaats. Deze gegevens kunnen we zo linken aan het gevoerde bosbeheer en de klimaatopwarming. De ijzeren kooien dienen om nieuwsgierige dieren zoals reeën en everzwijnen op een afstand te houden!</p> <p className='roboto project-text ps-2 pe-2'>Wilt u meer informatie of heeft u iets te melden (bv. schade door everzwijnen), mail dan naar <a href="mailto:koenraad.vanmeerbeek@kuleuven.be" target="_blank" rel="noreferrer" className='roboto project-link'>koenraad.vanmeerbeek@kuleuven.be</a></p>
          <h6 className="ps-2 pb-2 pe-2 roboto">Verantwoordelijke: <Link to="/labmember/koenraad-van-meerbeek"><p className="d-inline project-labmember roboto">Prof. Koenraad Van Meerbeek</p></Link>
          </h6>
        </Col>
      </Row>
    </Container>
  )
}

export default Loggers
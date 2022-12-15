import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import LazyLoad from 'react-lazyload';


function ProjectsSction() {
  const [projects, setProjects] = useState([]);
  const { ref: myProj, inView: myProjIsVisible } = useInView({ triggerOnce: true })
  const { ref: myProj2, inView: myProj2IsVisible } = useInView({ triggerOnce: true })


  const fetchProjectList = async () => {
    let res = await fetch("http://localhost:3001/projects/fetch-projects");
    let data = await res.json();
    setProjects(data);
  };
  useEffect(() => {
    fetchProjectList();
  }, []);


  return (
      <Container fluid className='mt-0 mb-0'>
        <h1 className={` proj-section-title montserrat pb-4 divslide-before ${myProjIsVisible ? "divslide" : ""}`} ref={myProj}>Research projects</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <Row ref={myProj2}>
            {projects.map((project, index) => (
                  <Col key={index} md={6} lg={4} className={`row-elem divslide-before  ${myProj2IsVisible ? "divslide2" : ""}`}  >
                  <Link to={`/project/${project.title.replace(/\s/g, '-').toLowerCase()}`} className="project-link">
                    <LazyLoad className=" projects d-flex justify-content-center" >
                    
                      <img
                        src={project.image}
                        className="project-photo" alt={project.title}
                      />
                      <div className="project-photo-overlay" ></div>
                      <div className="project-text-overlay">
                        <h3 className="montserrat projecttitle pe-3">
                          {project.title}
                        </h3>
                      </div>
                      <div className="project-summary-container" >
                        <p className="roboto project-summary mb-1">
                          {project.summary}.</p><p className='roboto project-summary readmore'> Read more ...
                        </p>
                      </div>
                      </LazyLoad>
                  </Link>
                </Col>
            ))}
          </Row>
        </div>
      </Container>
 
  );
}

export default ProjectsSction;

import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import LazyLoad from 'react-lazyload';
import { HashLink as Link } from 'react-router-hash-link'


function ProjectsSction() {
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth)
  useEffect(() => {
      const resizeW = () => changeDeviceSize(window.innerWidth);
          window.addEventListener("resize", resizeW); // Update the width on resize
          return () => window.removeEventListener("resize", resizeW);
    });

  const [projects, setProjects] = useState([]);
  const [projectsExtra, setProjectsExtra] = useState([]);
  const [show, setShow] = useState(false);
  const { ref: myProj, inView: myProjIsVisible } = useInView({ triggerOnce: true })
  const { ref: myProj2, inView: myProj2IsVisible } = useInView({ triggerOnce: true })
  const { ref: myProj3, inView: myProj3IsVisible } = useInView({ triggerOnce: true })


  const fetchProjectList = async () => {
    let res = await fetch("https://sglobe-server.onrender.com/projects/fetch-projects");
    let data = await res.json();
    if (deviceSize>767 && deviceSize<992){
    let firstLine = data.slice(0, 2)
    let rest = data.slice(2)
    setProjects(firstLine);
    setProjectsExtra(rest)}
    else {
      let firstLine = data.slice(0, 3)
    let rest = data.slice(3)
    setProjects(firstLine);
    setProjectsExtra(rest)
    }
  };
  useEffect(() => {
    fetchProjectList();
    // eslint-disable-next-line 
  }, [deviceSize]);


  return <Container fluid className='mt-0 mb-0'>
    <h1 className={` proj-section-title montserrat pb-4 divslide-before ${myProjIsVisible ? "divslide" : ""}`} ref={myProj}>Research projects</h1>
    <div className="d-flex flex-wrap justify-content-center">
      <Row ref={myProj2}>
        {projects.map((project, index) => (
          <Col key={index} md={6} lg={4} className={`row-elem divslide-before  ${myProj2IsVisible ? "divslide2" : ""}`}  >
            <Link to={`/project/${project.title.replace(/\s/g, '-').toLowerCase()}`} className="project-link">
              <LazyLoad className="projects d-flex justify-content-center" >

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

        {projectsExtra.map((project, index) => {
         return show === true?
            (

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
            ):("")
         
        })}
       
      </Row>
        <Col ref={myProj3} md={12}>{show ? (<Link to="/#projects" className={`pt-5 buttonpadding ${myProj3IsVisible ? "divslide" : ""}`}><Badge onClick={() => setShow(false)} className={` badge-icon montserrat `}>Show less</Badge></Link>) : (<Badge onClick={() => setShow(true)} className={` badge-icon montserrat more-projects ${myProj3IsVisible ? "divslide" : ""}`}>View all projects</Badge>)}</Col>
   
    </div>
  </Container>


}

export default ProjectsSction;

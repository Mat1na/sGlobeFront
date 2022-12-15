import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import LazyLoad from 'react-lazyload';

function ResearchSection() {
  //this is to check the width of the device. If the device is below 425 width, the video doesn't load
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth)
  useEffect(() => {
      const resizeW = () => changeDeviceSize(window.innerWidth);
          window.addEventListener("resize", resizeW); // Update the width on resize
          return () => window.removeEventListener("resize", resizeW);
    });

  const { ref: myRef, inView: myRefIsVisible } = useInView({ triggerOnce: true })
  const { ref: myRef1, inView: myRef1IsVisible } = useInView({ triggerOnce: true })
  const { ref: myRef2, inView: myRef2IsVisible } = useInView({ triggerOnce: true })
  const { ref: myRef3, inView: myRef3IsVisible } = useInView({ triggerOnce: true })
  const { ref: myRef4, inView: myRef4IsVisible } = useInView({ triggerOnce: true })
  const { ref: myRef5, inView: myRef5IsVisible } = useInView({ triggerOnce: true })
  const { ref: myRef6, inView: myRef6IsVisible } = useInView({ triggerOnce: true })

  return (
    <Container fluid className='mb-0 mt-0'>
      <h1 className={`pb-0 montserrat research-section-title  ${myRefIsVisible ? "divMove" : ""}`} ref={myRef}>Research</h1>
      <Row className="d-flex align-items-center justify-content-center mx-0 gx-5">
        <Col xl={6} >
          <Row className='d-flex align-items-center justify-content-center '>
            <h3 className={`text-center topics mb-xl-0 mb-xxl-3 ${myRef1IsVisible ? "divMove" : ""}`} ref={myRef1}>Topics</h3>
            
            <Col sm={5} className='row-research research-photo mb-lg-3 mb-xl-0'>
              <div className={`research-photo-container ${myRef1IsVisible ? "divMove" : ""}`} ref={myRef1}>
                {deviceSize>767&&<LazyLoad><img
                src="/MicroclimateEcology.webp" className='jpg-research d-flex' alt='Microclimate ecology'
                /></LazyLoad>}
                {deviceSize<768&&<LazyLoad><img src="/MicroclimateEcology-mobile.webp" className='jpg-research d-flex' alt='Microclimate ecology' /></LazyLoad>}
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7} className='row-research ps-4'> <div ref={myRef1} className={` ${myRef1IsVisible ? "divMove" : ""}`}><h3 className="montserrat research-title mt-3 mt-sm-0">Microclimate ecology</h3><p className='roboto research-text mb-5 mb-sm-0'>Microclimate conditions are key to understanding how organisms respond to warming, yet they are frequently neglected in ecological research. We aim to unravel the drivers and impact of microclimate conditions on species range dynamics</p></div>
            </Col>

            <Col sm={5} className='row-research research-photo mb-lg-3 mb-xl-0'>
              <div className={`research-photo-container ${myRef2IsVisible ? "divMove" : ""}`} ref={myRef2}>
              {deviceSize>767&&<LazyLoad><img src="/GlobalChangeEffects.webp" className='jpg-research d-flex' alt='Global change effects' /></LazyLoad>}
              {deviceSize<768&&<LazyLoad><img src="/GlobalChangeEffects-mobile.webp" className='jpg-research d-flex' alt='Global change effects' /></LazyLoad>}
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7} className='row-research ps-4'><div ref={myRef2} className={`${myRef2IsVisible ? "divMove" : ""}`}><h3 className='montserrat research-title mt-3 mt-sm-0'>Global change effects</h3><p className='roboto research-text mb-5 mb-sm-0'>We aim to improve our understanding of the effects of global change on biodiversity and the functioning of terrestrial ecosystems. We focus on climate change and invasive species, as these are identified as two of the most important anthropogenic drivers of biodiversity loss</p></div>
            </Col>

            <Col sm={5} className='row-research research-photo mb-lg-3 mb-xl-0'>
              <div className={`research-photo-container ${myRef3IsVisible ? "divMove" : ""}`} ref={myRef3}>
              {deviceSize>767&&<LazyLoad><img src="/BiodiversityConservation.webp" className='jpg-research d-flex' alt='Biodiversity conservation' 
                /></LazyLoad>}
                {deviceSize<768&&<LazyLoad><img src="/BiodiversityConservation-mobile.webp" className='jpg-research d-flex' alt='Biodiversity conservation'
               /></LazyLoad>}
                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7} className='row-research ps-4'><div ref={myRef3} className={`${myRef3IsVisible ? "divMove" : ""}`}><h3 className='montserrat research-title mt-3 mt-sm-0'>Biodiversity conservation</h3><p className='roboto research-text mb-5 mb-sm-0'>Nature conservation is stuck in the detrimental paradigm of preventing community changes under changing conditions. We aim at developing global change-robust solutions for the biodiversity crisis, one of the biggest challenges in the Anthropocene</p></div>
            </Col>
          </Row>
        </Col>


        <Col xl={6}>
          <Row className='d-flex align-items-center justify-content-center'>
            <h3 className={`text-center methods mt-3 mt-lg-0 mb-xl-0 mb-xxl-3 ${myRef4IsVisible ? "divMove1" : ""}`} ref={myRef4}>Methods</h3>
            <Col sm={5} className='row-research research-photo mb-lg-3 mb-xl-0'>
              <div className={`research-photo-container ${myRef4IsVisible ? "divMove1" : ""}`} ref={myRef4}>

              {deviceSize>767&&<LazyLoad><img src="/Ecoinformatics.webp" className='jpg-research d-flex' alt='Ecoinformatics' /></LazyLoad>}
              {deviceSize<768&&<LazyLoad><img src="/Ecoinformatics-mobile.webp" className='jpg-research d-flex' alt='Ecoinformatics' /></LazyLoad>}

                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7} className='row-research ps-4' ><div ref={myRef4} className={`${myRef4IsVisible ? "divMove1" : ""}`}><h3 className='montserrat research-title mt-3 mt-sm-0'>Ecoinformatics</h3><p className='roboto research-text mb-5 mb-sm-0'>We combine big data with state-of-the-art modelling techniques (machine learning, SDM, SEM, …) to extract patterns and answer ecological questions on large spatial scales</p></div>
            </Col>
            <Col sm={5} className='row-research research-photo mb-lg-3 mb-xl-0'>
              <div className={`research-photo-container ${myRef5IsVisible ? "divMove1" : ""}`} ref={myRef5}>


              {deviceSize>767&&<LazyLoad><img src="/FieldWork.webp" className='jpg-research d-flex' alt='Field work'  /></LazyLoad>}
              {deviceSize<768&&<LazyLoad><img src="/FieldWork-mobile.webp" className='jpg-research d-flex' alt='Field work' /></LazyLoad>}

                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7} className='row-research ps-4' ><div ref={myRef5} className={`${myRef5IsVisible ? "divMove1" : ""}`}><h3 className='montserrat research-title mt-3 mt-sm-0'>Field work</h3><p className='roboto research-text mb-5 mb-sm-0'>We collect new primary ecological data in natural and anthropogenic systems; species composition, vegetation structure, ecosystem functions, plant functional traits, etc.</p></div>
            </Col>
            <Col sm={5} className='row-research research-photo mb-lg-3 mb-xl-0'>
              <div className={`research-photo-container ${myRef6IsVisible ? "divMove1" : ""}`} ref={myRef6}>


              {deviceSize>767&&<LazyLoad><img src="/Drones.webp" className='jpg-research d-flex' alt='Drones' /></LazyLoad>}
              {deviceSize<768&&<LazyLoad><img src="/Drones-mobile.webp" className='jpg-research d-flex' alt='Drones' /></LazyLoad>}

                <div className="research-photo-container-overlay"></div>
              </div>
            </Col>
            <Col sm={7} className='row-research ps-4' ><div ref={myRef6} className={`${myRef6IsVisible ? "divMove1" : ""}`}><h3 className='montserrat research-title mt-3 mt-sm-0'>Drones</h3><p className='roboto research-text mb-0'>We fly drones to characterise how ecosystems are responding to rapid environmental change. Drones provide a unique opportunity for acquiring low-cost, high-resolution imagery at a regional scale</p></div>
            </Col>
          </Row>
        </Col>


      </Row>
    </Container>
  )
}

export default ResearchSection
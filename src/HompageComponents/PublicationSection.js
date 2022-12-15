import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpringCarousel } from 'react-spring-carousel'
import { GrPrevious } from "@react-icons/all-files/gr/GrPrevious";
import { GrNext } from "@react-icons/all-files/gr/GrNext";
import { useInView } from "react-intersection-observer";

function PublicationSection() {
  const [lastPublications, setLastPublications] = useState([]);

  const { ref: myPub1, inView: myPub1IsVisible } = useInView({ triggerOnce: true })
  const { ref: myPub2, inView: myPub2IsVisible } = useInView({ triggerOnce: true })



  const fetchLastPublications = async () => {
    let res = await fetch("http://localhost:3001/publications/fetch-publications");
    let data = await res.json();
    let filtereddata = data.slice(-7)
    setLastPublications(filtereddata)
  };
  useEffect(() => {
    fetchLastPublications();
  }, []);


  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    items: [
      {
        id: 'item-1',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 0).map((publication, index) => {
          return <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink" key={publication.order}><div className='pub-title text-center' key={index}><div><h5 className="publicationtitle montserrat">{publication.journal}</h5><p className="roboto publicationtext">{publication.publicationtitle} <br /><span className="readmore">Read more ...</span></p></div></div>
            </Link>
          
        })}</div>,
      },
      {
        id: 'item-2',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 1).map((publication, index) => {
          return<Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink" key={publication.order} ><div className='pub-title text-center' key={index}><div><h5 className="publicationtitle montserrat">{publication.journal}</h5><p className="roboto publicationtext">{publication.publicationtitle} <br /><span className="readmore">Read more ...</span></p></div></div>
            </Link>
         
        })}</div>,
      },
      {
        id: 'item-3',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 2).map((publication, index) => {
          return <Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink" key={publication.order}><div className='pub-title text-center' key={index}><div><h5 className="publicationtitle montserrat">{publication.journal}</h5><p className="roboto publicationtext">{publication.publicationtitle} <br /><span className="readmore">Read more ...</span></p></div></div>
            </Link>
          
        })}</div>,
      },
      {
        id: 'item-4',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 3).map((publication, index) => {
          return<Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink" key={publication.order}><div className='pub-title text-center' key={index}><div><h5 className="publicationtitle montserrat">{publication.journal}</h5><p className="roboto publicationtext">{publication.publicationtitle} <br /><span className="readmore">Read more ...</span></p></div></div>
            </Link>
          
        })}</div>,
      },
      {
        id: 'item-5',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 4).map((publication, index) => {
          return<Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink" key={publication.order}><div className='pub-title text-center' key={index}><div><h5 className="publicationtitle montserrat">{publication.journal}</h5><p className="roboto publicationtext">{publication.publicationtitle} <br /><span className="readmore">Read more ...</span></p></div></div>
            </Link>
         
        })}</div>,
      },
      {
        id: 'item-6',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 5).map((publication, index) => {
          return<Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink" key={publication.order}><div className='pub-title text-center' key={index}><div><h5 className="publicationtitle montserrat">{publication.journal}</h5><p className="roboto publicationtext">{publication.publicationtitle} <br /><span className="readmore">Read more ...</span></p></div></div>
            </Link>
        
        })}</div>,
      },
      {
        id: 'item-7',
        renderItem: <div>{lastPublications.filter((publication, index) => index === 6).map((publication, index) => {
          return<Link to={`/publication/${publication.journal.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${publication.order}`} className="journallink" key={publication.order}><div className='pub-title text-center' key={index}><div><h5 className="publicationtitle montserrat">{publication.journal}</h5><p className="roboto publicationtext">{publication.publicationtitle} <br /><span className="readmore">Read more ...</span></p></div></div>
            </Link>
          
        })}</div>,
      },
    ],
  })

  return (
    <Container fluid className='mt-0 mb-0'>
      <h1 className={`pb-4 pub-section-title montserrat ${myPub1IsVisible ? "divslide" : ""}`} ref={myPub1}>Recent publications</h1>
      <div className={`carousel-bg ${myPub2IsVisible ? "divslide2" : ""}`}>
        <div className="carousel-bg-overlay" ref={myPub2}></div>
        <div className="carousel-fragment">
          {carouselFragment}
          <div className="d-flex justify-content-between">
            <span onClick={slideToPrevItem}><GrPrevious size={"2rem"} className="car-icons" /></span>
            <span onClick={slideToNextItem}><GrNext size={"2rem"} className="car-icons" /></span></div>
          <div className="p-2 d-flex justify-content-center">
            <Link to={"/publicationlist"} className="buttonpadding"><Button className="pub-icon montserrat carouselbutton">VIEW ALL PUBLICATIONS</Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PublicationSection
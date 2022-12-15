import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function PublicationDetails() {
  const { pub } = useParams()
  const [publication, setPublication] = useState({})
  const [authorsList, setAuthorsList] = useState([])

  const fetchPublication = async () => {
    let res = await fetch("http://localhost:3001/publications/fetch-publications");
    let data = await res.json();
    if (res.ok) {
      var filtereddata = data.find(item => item.order === pub.split("-").slice(-1).toString());
      setPublication(filtereddata);
      setAuthorsList(filtereddata.authors)
    }
  };
  useEffect(() => {
    fetchPublication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pub]);
  return (
    <>
      <Container fluid className='pub-details'>
        <div className='m-4'>
          <h1 className='montserrat publicationdetailtitle'>{publication.publicationtitle}</h1>
          <p className="journaltitle roboto project-summary">{publication.journal}, {publication.year}</p>
          <p className="authorslist roboto project-summary">{authorsList.length > 0 && authorsList.map(author => { return author['author'] }).join(', ')}</p>
          <h4 className="montserrat roboto">Abstract</h4>
          <p className='roboto project-summary'>{publication.abstract}</p>
          <p className='roboto publicationdetaillink'>Link: <a href={publication.link} target="_blank" rel="noreferrer" className='roboto pub-link'>{`${publication.link}`}</a></p>
        </div>
      </Container>
    </>
  )
}

export default PublicationDetails
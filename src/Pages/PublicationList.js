import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import {useInView} from "react-intersection-observer";

function PublicationList() {
  const {ref:myRef1, inView:myRef1IsVisible1}=useInView({ triggerOnce: true })
  const {ref:myRef2, inView:myRef1IsVisible2}=useInView({ triggerOnce: true })
  const {ref:myRef3, inView:myRef1IsVisible3}=useInView({ triggerOnce: true })
  const {ref:myRef4, inView:myRef1IsVisible4}=useInView({ triggerOnce: true })
  const {ref:myRef5, inView:myRef1IsVisible5}=useInView({ triggerOnce: true })
  const {ref:myRef6, inView:myRef1IsVisible6}=useInView({ triggerOnce: true })
  const {ref:myRef7, inView:myRef1IsVisible7}=useInView({ triggerOnce: true })
  const {ref:myRef8, inView:myRef1IsVisible8}=useInView({ triggerOnce: true })
  const {ref:myRef9, inView:myRef1IsVisible9}=useInView({ triggerOnce: true })
  const {ref:myRef10, inView:myRef1IsVisible10}=useInView({ triggerOnce: true })

  const [publication2022, setPublication2022] = useState([]);
  const [publication2021, setPublication2021] = useState([]);
  const [publication2020, setPublication2020] = useState([]);
  const [publication2019, setPublication2019] = useState([]);
  const [publication2018, setPublication2018] = useState([]);
  const [publication2017, setPublication2017] = useState([]);
  const [publication2016, setPublication2016] = useState([]);
  const [publication2015, setPublication2015] = useState([]);
  const [publication2014, setPublication2014] = useState([]);
  const [publication2011, setPublication2011] = useState([]);
  const [authorList, setAuthorList] = useState({})


  const fetchPublications = async () => {
    let res = await fetch("http://localhost:3001/publications/fetch-publications");
    let data = await res.json();
    if (res.ok) {

      const data2022 = data.filter(obj => {
        return obj.year === "2022";
      });
      setPublication2022(data2022.reverse())

      const data2021 = data.filter(obj => {
        return obj.year === "2021";
      });
      setPublication2021(data2021.reverse())

      const data2020 = data.filter(obj => {
        return obj.year === "2020";
      });
      setPublication2020(data2020.reverse())

      const data2019 = data.filter(obj => {
        return obj.year === "2019";
      });
      setPublication2019(data2019.reverse())

      const data2018 = data.filter(obj => {
        return obj.year === "2018";
      });
      setPublication2018(data2018.reverse())

      const data2017 = data.filter(obj => {
        return obj.year === "2017";
      });
      setPublication2017(data2017.reverse())

      const data2016 = data.filter(obj => {
        return obj.year === "2016";
      });
      setPublication2016(data2016.reverse())

      const data2015 = data.filter(obj => {
        return obj.year === "2015";
      });
      setPublication2015(data2015.reverse())

      const data2014 = data.filter(obj => {
        return obj.year === "2014";
      });
      setPublication2014(data2014.reverse())

      const data2011 = data.filter(obj => {
        return obj.year === "2011";
      });
      setPublication2011(data2011.reverse())
    }
  };
  useEffect(() => {
    fetchPublications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAuthors = async () => {
    let res = await fetch("http://localhost:3001/authors/fetch-authors");
    let data = await res.json();
    if (res.ok) {
      let result = data.map(({ authorname }) => authorname )
      setAuthorList(result);
    }
  };
  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <Container fluid className='details-pub-list'>
      <h1 className='montserrat publicationdetailtitle'>Peer reviewed publications</h1>
      <p className='roboto publicationlisttext'>Researchers from the sGlobe lab are indicated in bold</p>
      {publication2022.length > 0 && <div className={`${myRef1IsVisible1? "divMove4":""}`} ref={myRef1}>
        <b className='publicationyear montserrat'>2022</b>
        <ul className='publicationlisttext roboto'>
          {publication2022.map((item, index) => {
            return <li key={item.id} className='pb-1 publicationlistarticle'>{publication2022[index].order} - {publication2022[index].authors.map((author, index, array) => {
              if (index + 1 === array.length) {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']} </p>
                } else { return <p key={author.id} className='authorsforpublicationlist'>{author['author']} </p> }
              }
              else {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']}, </p>
                }
                else {
                  return <p key={author.id} className='authorsforpublicationlist'>{author['author']}, </p>
                }
              }
            })}
              {publication2022[index].publicationtitle} {publication2022[index].journal}, {publication2022[index].issue} [<a href={publication2022[index].link} target="_blank" rel="noreferrer" className='publication-link'>Link</a>]</li>
          })}
        </ul>
      </div>}
      {publication2021.length > 0 && <div className={`${myRef1IsVisible2? "divMove4":""}`} ref={myRef2}>
        <b className='publicationyear montserrat'>2021</b>
        <ul className='publicationlisttext roboto'>
          {publication2021.map((item, index) => {
            return <li key={index} className='pb-1 publicationlistarticle'>{publication2021[index].order} - {publication2021[index].authors.map((author, index, array) => {
              if (index + 1 === array.length) {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id}  className='authorsforpublicationlist fw-bold'>{author['author']} </p>
                } else { return <p key={author.id} className='authorsforpublicationlist'>{author['author']} </p> }
              }
              else {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']}, </p>
                }
                else {
                  return <p key={author.id} className='authorsforpublicationlist'>{author['author']}, </p>
                }
              }
            })}
              {publication2021[index].publicationtitle} {publication2021[index].journal}, {publication2021[index].issue} [<a href={publication2021[index].link} target="_blank" rel="noreferrer" className='publication-link'>Link</a>]</li>
          })}
        </ul>
      </div>}
      {publication2020.length > 0 && <div className={`${myRef1IsVisible3? "divMove4":""}`} ref={myRef3}>
        <b className='publicationyear montserrat'>2020</b>
        <ul className='publicationlisttext roboto'>
          {publication2020.map((item, index) => {
            return <li key={index} className='pb-1 publicationlistarticle'>{publication2020[index].order} - {publication2020[index].authors.map((author, index, array) => {
              if (index + 1 === array.length) {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']} </p>
                } else { return <p key={author.id} className='authorsforpublicationlist'>{author['author']} </p> }
              }
              else {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id}  className='authorsforpublicationlist fw-bold'>{author['author']}, </p>
                }
                else {
                  return <p key={author.id} className='authorsforpublicationlist'>{author['author']}, </p>
                }
              }
            })}
              {publication2020[index].publicationtitle} {publication2020[index].journal}, {publication2020[index].issue} [<a href={publication2020[index].link} target="_blank" rel="noreferrer" className='publication-link'>Link</a>]</li>
          })}
        </ul>
      </div>}
      {publication2019.length > 0 && <div className={`${myRef1IsVisible4? "divMove4":""}`} ref={myRef4}>
        <b className='publicationyear montserrat'>2019</b>
        <ul className='publicationlisttext roboto'>
          {publication2019.map((item, index) => {
            return <li key={index} className='pb-1 publicationlistarticle'>{publication2019[index].order} - {publication2019[index].authors.map((author, index, array) => {
              if (index + 1 === array.length) {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id}  className='authorsforpublicationlist fw-bold'>{author['author']} </p>
                } else { return <p key={author.id} className='authorsforpublicationlist'>{author['author']} </p> }
              }
              else {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']}, </p>
                }
                else {
                  return <p key={author.id} className='authorsforpublicationlist'>{author['author']}, </p>
                }
              }
            })}
              {publication2019[index].publicationtitle} {publication2019[index].journal}, {publication2019[index].issue} [<a href={publication2019[index].link} target="_blank" rel="noreferrer" className='publication-link'>Link</a>]</li>
          })}
        </ul>
      </div>}
      {publication2018.length > 0 && <div className={`${myRef1IsVisible5? "divMove4":""}`} ref={myRef5}>
        <b className='publicationyear montserrat'>2018</b>
        <ul className='publicationlisttext roboto'>
          {publication2018.map((item, index) => {
            return <li key={index} className='pb-1 publicationlistarticle'>{publication2018[index].order} - {publication2018[index].authors.map((author, index, array) => {
              if (index + 1 === array.length) {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']} </p>
                } else { return <p key={author.id} className='authorsforpublicationlist'>{author['author']} </p> }
              }
              else {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']}, </p>
                }
                else {
                  return <p key={author.id} className='authorsforpublicationlist'>{author['author']}, </p>
                }
              }
            })}
              {publication2018[index].publicationtitle} {publication2018[index].journal}, {publication2018[index].issue} [<a href={publication2018[index].link} target="_blank" rel="noreferrer" className='publication-link'>Link</a>]</li>
          })}
        </ul>
      </div>}
      {publication2017.length > 0 && <div className={`${myRef1IsVisible6? "divMove4":""}`} ref={myRef6}>
        <b className='publicationyear montserrat'>2017</b>
        <ul className='publicationlisttext roboto'>
          {publication2017.map((item, index) => {
            return <li key={index} className='pb-1 publicationlistarticle'>{publication2017[index].order} - {publication2017[index].authors.map((author, index, array) => {
              if (index + 1 === array.length) {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']} </p>
                } else { return <p key={author.id} className='authorsforpublicationlist'>{author['author']} </p> }
              }
              else {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']}, </p>
                }
                else {
                  return <p key={author.id} className='authorsforpublicationlist'>{author['author']}, </p>
                }
              }
            })}
              {publication2017[index].publicationtitle} {publication2017[index].journal}, {publication2017[index].issue} [<a href={publication2017[index].link} target="_blank" rel="noreferrer" className='publication-link'>Link</a>]</li>
          })}
        </ul>
      </div>}
      {publication2016.length > 0 && <div className={`${myRef1IsVisible7? "divMove4":""}`} ref={myRef7}>
        <b className='publicationyear montserrat'>2016</b>
        <ul className='publicationlisttext roboto'>
          {publication2016.map((item, index) => {
            return <li key={index} className='pb-1 publicationlistarticle'>{publication2016[index].order} - {publication2016[index].authors.map((author, index, array) => {
              if (index + 1 === array.length) {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']} </p>
                } else { return <p key={author.id} className='authorsforpublicationlist'>{author['author']} </p> }
              }
              else {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']}, </p>
                }
                else {
                  return <p key={author.id} className='authorsforpublicationlist'>{author['author']}, </p>
                }
              }
            })}
              {publication2016[index].publicationtitle} {publication2016[index].journal}, {publication2016[index].issue} [<a href={publication2016[index].link} target="_blank" rel="noreferrer" className='publication-link'>Link</a>]</li>
          })}
        </ul>
      </div>}
      {publication2015.length > 0 && <div className={`${myRef1IsVisible8? "divMove4":""}`} ref={myRef8}>
        <b className='publicationyear montserrat'>2015</b>
        <ul className='publicationlisttext roboto'>
          {publication2015.map((item, index) => {
            return <li key={index} className='pb-1 publicationlistarticle'>{publication2015[index].order} - {publication2015[index].authors.map((author, index, array) => {
              if (index + 1 === array.length) {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']} </p>
                } else { return <p key={author.id} className='authorsforpublicationlist'>{author['author']} </p> }
              }
              else {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']}, </p>
                }
                else {
                  return <p key={author.id} className='authorsforpublicationlist'>{author['author']}, </p>
                }
              }
            })}
              {publication2015[index].publicationtitle} {publication2015[index].journal}, {publication2015[index].issue} [<a href={publication2015[index].link} target="_blank" rel="noreferrer" className='publication-link'>Link</a>]</li>
          })}
        </ul>
      </div>}
      {publication2014.length > 0 && <div className={`${myRef1IsVisible9? "divMove4":""}`} ref={myRef9}>
        <b className='publicationyear montserrat'>2014</b>
        <ul className='publicationlisttext roboto'>
          {publication2014.map((item, index) => {
            return <li key={index} className='pb-1 publicationlistarticle'>{publication2014[index].order} - {publication2014[index].authors.map((author, index, array) => {
              if (index + 1 === array.length) {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']} </p>
                } else { return <p key={author.id} className='authorsforpublicationlist'>{author['author']} </p> }
              }
              else {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']}, </p>
                }
                else {
                  return <p key={author.id} className='authorsforpublicationlist'>{author['author']}, </p>
                }
              }
            })}
              {publication2014[index].publicationtitle} {publication2014[index].journal}, {publication2014[index].issue} [<a href={publication2014[index].link} target="_blank" rel="noreferrer" className='publication-link'>Link</a>]</li>
          })}
        </ul>
      </div>}
      {publication2011.length > 0 && <div className={`${myRef1IsVisible10? "divMove4":""}`} ref={myRef10}>
        <b className='publicationyear montserrat'>2011</b>
        <ul className='publicationlisttext roboto'>
          {publication2011.map((item, index) => {
            return <li key={index}className='pb-1 publicationlistarticle'>{publication2011[index].order} - {publication2011[index].authors.map((author, index, array) => {
              if (index + 1 === array.length) {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']} </p>
                } else { return <p key={author.id} className='authorsforpublicationlist'>{author['author']} </p> }
              }
              else {
                if (authorList.includes(author['author'])) {
                  return <p key={author.id} className='authorsforpublicationlist fw-bold'>{author['author']}, </p>
                }
                else {
                  return <p key={index} className='authorsforpublicationlist'>{author['author']}, </p>
                }
              }
            })}
              {publication2011[index].publicationtitle} {publication2011[index].journal}, {publication2011[index].issue} [<a href={publication2011[index].link} target="_blank" rel="noreferrer" className='publication-link'>Link</a>]</li>
          })}
        </ul>
      </div>}
    </Container>
  )
}

export default PublicationList
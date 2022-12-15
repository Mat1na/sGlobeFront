import React from 'react'
import { Container } from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link';
import { useInView } from "react-intersection-observer";
function JoinSection() {

    const { ref: myJoin1, inView: myJoin1IsVisible } = useInView({ triggerOnce: true })
    const { ref: myJoin2, inView: myJoin2IsVisible } = useInView({ triggerOnce: true })

    return (<>


        <Container fluid className='mt-0'>
            <h1 className={`join-section-title pb-4 montserrat ${myJoin1IsVisible ? "divslide" : ""}`} ref={myJoin1}>Join the lab</h1>
            <div className={`join-bg ${myJoin2IsVisible ? "divslide2" : ""}`} ref={myJoin2}>
                <p className='roboto paragraphtext'> There are no vacancies at the moment, but I am always interested in hearing from motivated students or researchers to collaborate on topics of mutual interest. Have a look at <Link to="/#research" className='join-link'>Research</Link> and our <Link to="/#projects" className='join-link'>Research projects</Link> to see what we are doing. So if you are interested in applying for a PhD or postdoc fellowship, you are always welcome to contact me. The different opportunities are listed below.
                </p>
                <h4 className="montserrat join-title1">Funding opportunities for PhD students</h4>
                <ul className='roboto paragraphtext'>
                    <li>FWO PhD Fellowship for <a href='https://www.fwo.be/en/fellowships-funding/phd-fellowships/phd-fellowship-fundamental-research/' target="_blank" rel="noreferrer" className='join-link'>fundamental research</a> or <a href='https://www.fwo.be/en/fellowships-funding/phd-fellowships/phd-fellowship-strategic-basic-research/' target="_blank" rel="noreferrer" className='join-link'>strategic basic research</a> (4 years)</li>
                    <li><a href='https://www.kuleuven.be/global/global-development/funding-possibilities/research-possibilities/phdcalls/index' target="_blank" className='join-link' rel="noreferrer">Global Minds fellowship</a> (4 years). This is a sandwich fellowship for students from a broad range of developing countries</li>
                </ul>
                <h4 className="montserrat join-title2">Funding opportunities for Postdocs</h4>
                <ul className='roboto paragraphtext'>
                    <li>FWO Postdoctoral fellowships for <a href='https://www.fwo.be/en/fellowships-funding/postdoctoral-fellowships/junior-postdoctoral-fellowship/' target="_blank" rel="noreferrer" className='join-link'>junior</a> or <a href='https://www.fwo.be/en/fellowships-funding/postdoctoral-fellowships/senior-postdoctoral-fellowship/' target="_blank" rel="noreferrer" className='join-link'>senior postdocs</a> (3 years)</li>
                    <li><a href='https://idp.kuleuven.be/idp/profile/SAML2/POST/SSO?execution=e2s1' target="_blank" rel="noreferrer" className='join-link'>Postdoctoral mandate at the KU Leuven</a> (1 year)</li>
                    <li><a href='https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships' target="_blank" rel="noreferrer" className='join-link'>Marie-Curie individual fellowships</a> (1-2 years). KU Leuven organises a master class to support future applicants in the writing process</li>
                </ul>
                <h2 className="montserrat join-title3">Why choose KU Leuven?</h2>
                <p className='roboto paragraphtext'>
                    You’ll be part of a unique and stimulating environment to do research. In 2022, KU Leuven is on the 42nd place in the <a href='https://www.timeshighereducation.com/world-university-rankings/ku-leuven' target="_blank" rel="noreferrer" className='join-link'>Times Higher Education World University Rankings</a>. THE assesses universities on the basis of Teaching, Research, Citations, Industry Income and International Outlook. This year for the first time, KU Leuven is also featured in the THE top 50 of international universities, due in part to the recent influx of foreign students at the university. Since 2016, KU Leuven is heading the Reuters list of Europe’s most <a href='https://www.reuters.com/innovative-universities-2019' target="_blank" rel="noreferrer" className='join-link'>innovative universities</a>. The Reuters ranking is based on various parameters that map the research output of the institutions. This includes articles in scientific journals, but also patent applications, with which a university protects and commercialises its research results.
                </p>
                <p className='roboto paragraphtext'>
                    The main campus of the university is situated in Leuven, a place characterised by its beautiful architecture and one of Belgium’s most attractive cities. With almost 50.000 students in a city of 100.000 inhabitants, Leuven has a specific atmosphere that is quite unique in the world. The student dorms, study rooms and lecture halls are spread over and integrated in the city and can be next to a cosy little restaurant or a vibrant student bar. The presence of about 10.000 international students from about 150 different countries and an international meeting centre called Pangaea make it easy to meet people from all over the world!
                </p>
                <p className='roboto paragraphtext'>
                    As a student or researcher at KU Leuven you are in the heart of Europe. Major international cities like London, Paris, Köln and Amsterdam are all less than 2 hours away by train. The nearby international airport (just 15 minutes by train from both our Brussels and Leuven Campus) connects you to the rest of the world. This means international students at KU Leuven have the luxury of not only being able to discover Belgium, but also a whole list of either neighbouring countries in the same amount of time. This is truly Europe at your doorstep.
                </p>
                <p className='roboto paragraphtext'><a href='https://www.kuleuven.be/english/why-choose-kuleuven' target="_blank" rel="noreferrer" className='join-link'>More info</a></p>
            </div>
        </Container>

    </>
    )
}

export default JoinSection
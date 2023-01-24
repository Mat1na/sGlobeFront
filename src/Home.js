import React from "react";
import LabmembersSection from "./HompageComponents/LabmembersSection";
import ProjectsSction from "./HompageComponents/ProjectsSction";
import PublicationSection from "./HompageComponents/PublicationSection";
import ResearchSection from "./HompageComponents/ResearchSection";
import VideoSection from "./HompageComponents/VideoSection";
import JoinSection from "./HompageComponents/JoinSection";
import ContactSection from "./HompageComponents/ContactSection";
import BackToTopButton from "./Components/BackToTopButton";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          sGlobe Research Lab - Protecting biodiversity in a changing world
        </title>
        <meta
          name="description"
          content="We aim to improve our understanding of the effects of global change on biodiversity and the functioning of terrestrial ecosystems. We focus on climate change and invasive species, as these are identified as two of the most important anthropogenic drivers of biodiversity loss"
        />
        <meta
          name="keywords"
          content="sGlobe, Biodiversity, Research Lab,sGlobelab, Van Meerbeek,Climate change, Ecosystem,KU Leuven"
        />
      </Helmet>
      <BackToTopButton />
      <section id="top" name="top">
        <VideoSection />
      </section>
      <section id="research" name="research" className="containerpaddings2">
        <ResearchSection />
      </section>
      <section id="labmembers" name="labmembers" className="containerpaddings">
        <LabmembersSection />
      </section>
      <section id="projects" name="projects" className="containerpaddings">
        <ProjectsSction />
      </section>
      <section
        id="publications"
        name="publications"
        className="containerpaddings"
      >
        <PublicationSection />
      </section>
      <section id="jointhelab" name="jointhelab" className="containerpaddings">
        <JoinSection />
      </section>
      <section id="contact" name="contact" className="containerpaddings">
        <ContactSection />
      </section>
    </>
  );
}

export default Home;

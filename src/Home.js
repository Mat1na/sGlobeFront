import React from "react";
import LabmembersSection from "./HompageComponents/LabmembersSection";
import ProjectsSction from "./HompageComponents/ProjectsSction";
import PublicationSection from "./HompageComponents/PublicationSection";
import ResearchSection from "./HompageComponents/ResearchSection";
import VideoSection from "./HompageComponents/VideoSection";
import JoinSection from "./HompageComponents/JoinSection";
import ContactSection from "./HompageComponents/ContactSection";
import BackToTopButton from "./Components/BackToTopButton";

function Home() {


  return (
    <>
    <BackToTopButton />
      <section id="top" name="top"><VideoSection /></section>
      <section id="research" name="research" className='containerpaddings2'><ResearchSection /></section>
      <section id="labmembers" name="labmembers" className='containerpaddings'><LabmembersSection /></section>
      <section id="projects" name="projects" className='containerpaddings'><ProjectsSction /></section>
      <section id="publications" name="publications" className='containerpaddings'><PublicationSection/></section>
      <section id="jointhelab" name="jointhelab" className='containerpaddings'><JoinSection /></section>
      <section id="contact" name="contact" className='containerpaddings'><ContactSection /></section>

    </>
  );
}

export default Home;

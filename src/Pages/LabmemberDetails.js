import React, { useEffect, useState } from "react";
import { Badge, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GoMail } from "@react-icons/all-files/go/GoMail";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaOrcid } from "@react-icons/all-files/fa/FaOrcid";
import { SiResearchgate } from "@react-icons/all-files/si/SiResearchgate";
import { SiGooglescholar } from "@react-icons/all-files/si/SiGooglescholar";



function LabmemberDetails() {
  const { lab } = useParams();
  const [member, setMember] = useState([]);
  const [interestsList, setInterestList] = useState([]);

  const fetchLabmember = async () => {
    let res = await fetch("http://localhost:3001/labmembers/fetch-labmembers");
    let data = await res.json();
    let labmeberParam = lab.split("-").toString();
    if (res.ok) {
      var filtereddata = data.find(
        (item) =>
          item.membername.toLowerCase().split(" ").toString() === labmeberParam
      );
      setMember(filtereddata);
      setInterestList(filtereddata.interests)
    }
  };
  useEffect(() => {
    fetchLabmember();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lab]);

  return (
    <>
      <Container fluid className='details'>
        <div className="member-container">
          <div className="member-details pt-5">
            <img
              src={`${member.image}`}
              className="member-details"
              alt={member.membername}
            />
          </div>
          <div className="d-block text-center">
            <h1 className="pt-3 montserrat">{member.membername}</h1>
            <p className="roboto mb-0 function-details">{member.functionbasic}</p>
            <p className="roboto function-details">{member.functionextra}</p>
            <div className="mb-4">
              <hr></hr>
              <h3 className='montserrat intereststitle mb-3'>Interests</h3>
              {interestsList.map((item) => (
                <p key={item.interest}><Badge bg="secondary" className="interests roboto">{item.interest}</Badge></p>
              ))}
            </div>
            <div>
              {member.googlescholar !== undefined &&
                member.googlescholar !== "" ? (
                <a
                  href={member.googlescholar}
                  className="d-inline p-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGooglescholar size={"2rem"} className="icons labmember-icons" />
                </a>
              ) : (
                " "
              )}

              {member.researchgate !== undefined && member.researchgate !== "" ? (
                <a
                  href={member.researchgate}
                  className="d-inline p-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiResearchgate size={"2rem"} className="icons labmember-icons" />
                </a>
              ) : (
                " "
              )}
              {member.orcid !== undefined && member.orcid !== "" ? (
                <a
                  href={member.orcid}
                  className="d-inline p-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaOrcid size={"2rem"} className="icons labmember-icons" />
                </a>
              ) : (
                " "
              )}
              {member.twitter !== undefined && member.twitter !== "" ? (
                <a
                  href={member.twitter}
                  className="d-inline p-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter size={"2rem"} className="icons labmember-icons" />
                </a>
              ) : (
                " "
              )}
              {member.email !== undefined && member.email !== "" ? (
                <a
                  href={`mailto:${member.membername}`}
                  className="d-inline p-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GoMail size={"2rem"} className="icons labmember-icons" />
                </a>
              ) : (
                " "
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default LabmemberDetails;

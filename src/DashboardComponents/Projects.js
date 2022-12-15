import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import { RiDeleteBin6Fill } from "@react-icons/all-files/ri/RiDeleteBin6Fill";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css


function Projects() {
  const [projectList, setProjectList] = useState([])
  const fetchProjects = async () => {
    let res = await fetch('http://localhost:3001/projects/fetch-projects')
    let data = await res.json();
    if (res.ok) {
      data.sort(function(a,b){
        var textA = a.title.toUpperCase()
        var textB = b.title.toUpperCase()
        return (textA < textB) ? -1:(textA>textB)?1:0
      })
      setProjectList(data);
    }
  };
  useEffect(() => {
    fetchProjects()
  }, []);

  // Delete button
  const Delete = (_id) => {
    fetch(`http://localhost:3001/projects/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .catch((error) => {
        window.alert(error);
        return;
      })
      .then(() => {
        alert(`Publication has been deleted!`);
        fetchProjects()
      });
  };
  const handleDeleteBtn = (_id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => Delete(_id),
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <>
      <Container>
      <h1 className="dashboardmargin">Projects</h1>
          <Link to={"/projects/create-project"} className="btn btn-secondary m-2" > Add new project</Link>
          <Link to={"/dashboard"} className="btn btn-danger m-2">
          Go to Dashboard
        </Link>
      
     
        <Table striped bordered hover className="m-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Short summary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projectList.length > 0 && projectList.map((project, index) => {
              return <tr key={project._id} id={project._id}>
                <td>{index + 1}</td>
                <td>
                  {projectList[index].title}</td>
                  <td>
                  {projectList[index].summary}</td>
                <td>
                  <Link to={`/projects/edit-project/${project._id}`} className="btn btn-primary m-2"><AiFillEdit /></Link>
                  <Button variant="danger" className='m-2' onClick={() => handleDeleteBtn(project._id)}><RiDeleteBin6Fill /></Button>
                </td>
              </tr>
            })}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Projects
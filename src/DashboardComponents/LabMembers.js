import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import { RiDeleteBin6Fill } from "@react-icons/all-files/ri/RiDeleteBin6Fill";
import { BsFillPersonPlusFill } from "@react-icons/all-files/bs/BsFillPersonPlusFill";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function LabMembers() {
  const [labmemberList, setLabmemberList] = useState([]);
  const fetchLabmembers = async () => {
    let res = await fetch("http://localhost:3001/labmembers/fetch-labmembers");
    let data = await res.json();
    if (res.ok) {
      data.sort(function (a, b) {
        var textA = a.membername.toUpperCase();
        var textB = b.membername.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setLabmemberList(data);
    }
  };
  useEffect(() => {
    fetchLabmembers();
  }, []);

  // Delete button
  const Delete = (_id) => {
    fetch(`http://localhost:3001/labmembers/${_id}`, {
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
        alert(`Lab member has been deleted!`);
        fetchLabmembers();
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
      <h1 className="dashboardmargin">Lab Members List </h1>
        <div>
        <Link
          to={"/labmembers/create-member"}
          className="btn btn-secondary m-2"
        >
          <BsFillPersonPlusFill /> Add new member
        </Link>
        <Link to={"/dashboard"} className="btn btn-danger m-2">
          Go to Dashboard
        </Link>
        </div>
        <Table striped bordered hover className="m-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Lab member</th>
              <th>Function</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {labmemberList.length > 0 &&
              labmemberList.map((member, index) => {
                return <tr key={member._id} id={member._id}>
                  <td>{index + 1}</td>
                  <td>{labmemberList[index].membername}</td>
                  <td>{labmemberList[index].functionbasic}</td>
                  <td>
                    <Link
                      to={`/labmembers/edit-labmember/${member._id}`}
                      className="btn btn-primary m-2"
                    >
                      <AiFillEdit />
                    </Link>
                    <Button
                      variant="danger"
                      className="m-2"
                      onClick={() => handleDeleteBtn(member._id)}
                    >
                      <RiDeleteBin6Fill />
                    </Button>
                  </td>
                </tr>
              })}
          </tbody>

        </Table>
      </Container>
    </>
  );
}

export default LabMembers;

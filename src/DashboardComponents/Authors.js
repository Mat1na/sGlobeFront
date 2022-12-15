import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import { RiDeleteBin6Fill } from "@react-icons/all-files/ri/RiDeleteBin6Fill";
import { BsFillPersonPlusFill } from "@react-icons/all-files/bs/BsFillPersonPlusFill";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function Authors() {
  const [authorList, setAuthorList] = useState([]);
  const fetchAuthors = async () => {
    let res = await fetch("http://localhost:3001/authors/fetch-authors");
    let data = await res.json();
    if (res.ok) {
      data.sort(function (a, b) {
        var textA = a.authorname.toUpperCase();
        var textB = b.authorname.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setAuthorList(data);
    }
  };
  useEffect(() => {
    fetchAuthors();
  }, []);

  // Delete button
  const Delete = (_id) => {
    fetch(`http://localhost:3001/authors/${_id}`, {
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
        alert(`Author has been deleted!`);
        fetchAuthors();
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
    <Container>
      <h1 className="dashboardmargin">Authors</h1>
      <Link to={"/authors/create-author"} className="btn btn-secondary m-2">
        <BsFillPersonPlusFill /> Add new Author</Link>
      <Link to={"/dashboard"} className="btn btn-danger m-2">
        Go to Dashboard
      </Link>
      <div>
        <Table striped bordered hover className="m-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {authorList.length > 0 &&
              authorList.map((author, index) => {
                return (
                  <tr key={author._id}>
                    <td>{index + 1}</td>
                    <td id={author._id}>{authorList[index].authorname}</td>
                    <td>
                      <Link
                        to={`/authors/edit-author/${author._id}`}
                        className="btn btn-primary m-2"
                      >
                        <AiFillEdit />
                      </Link>
                      <Button
                        variant="danger"
                        className="m-2"
                        onClick={() => handleDeleteBtn(author._id)}
                      >
                        <RiDeleteBin6Fill />
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Authors;

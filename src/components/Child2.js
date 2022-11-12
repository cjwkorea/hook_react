import React, { useState } from "react";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Container,
  ListGroup,
  Navbar,
  Offcanvas,
  Toast,
} from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./1.css";
const Child2 = ({ data, deleteData }) => {
  const alertClicked = () => {
    alert("금일 일정 완료");
  };
  const [timer, setTimer] = useState("00:00:00");
  const currentTimer = () => {
  
  const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`)
  }
    const startTimer = () => {
      setInterval(currentTimer, 1000)
    }
    startTimer()
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  


  return (
    <div>
      <div>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
         금일 일정
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto"><h3>오늘의 할일</h3></strong>
            <small>현재 시간<h2>{timer}</h2></small>
          </Toast.Header>
          <Toast.Body> <ListGroup variant="flush" action onClick={alertClicked}>
            {data.map((todo, index) => {
              return (
                <ListGroup.Item>
                  {todo}{" "}
                  <button onClick={() => deleteData(index)}>
                    <CloseButton  style={{ backgroundColor: "red" }} />
                  </button>
                </ListGroup.Item>
              );
            })}
             </ListGroup></Toast.Body>
        </Toast>
      </Col>
      <Navbar expand="lg" style={{ backgroundColor: "blue" }}>
        <Navbar.Brand><Button variant="danger" onClick={handleShow}>
        금일 일정
      </Button></Navbar.Brand>
       
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>금일 일정</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup variant="flush" action onClick={alertClicked}>
            {data.map((todo, index) => {
              return (
                <ListGroup.Item>
                  {todo}{" "}
                  <button onClick={() => deleteData(index)}>
                    <CloseButton  style={{ backgroundColor: "red" }} />
                  </button>
                </ListGroup.Item>
              );
            })}
             </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
      </Navbar>
      </div>
      <div className="list">
        <Card style={{ width: "18rem" }}>
          <Card.Header>일정 목록</Card.Header>
          <ListGroup variant="flush" action onClick={alertClicked}>
            {data.map((todo, index) => {
              return (
                <ListGroup.Item>
                  {todo}{" "}
                  <button onClick={() => deleteData(index)}>
                    <CloseButton style={{ backgroundColor: "red" }}/>
                  </button>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
          />

          <ListGroup variant="flush" action onClick={alertClicked}>
            {data.map((todo, index) => {
              return (
                <ListGroup.Item>
                  {todo}{" "}
                  <button onClick={() => deleteData(index)}>
                    <CloseButton  style={{ backgroundColor: "red" }} />
                  </button>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card>
        <DropdownButton id="dropdown-basic-button" title="일정 목록">
          <ListGroup variant="flush" action onClick={alertClicked}>
            {data.map((todo, index) => {
              return (
                <ListGroup.Item>
                  {todo}{" "}
                  <button onClick={() => deleteData(index)}>
                    <CloseButton style={{ backgroundColor: "red" }}/>
                  </button>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Child2;

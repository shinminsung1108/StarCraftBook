import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import NavbarMain from "../Navbar_main";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TerranData from "./RaceInfo.json";
import Form from "react-bootstrap/Form";
import { Fragment } from "react";

function Terran() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filteredTerranData = TerranData.filter((item) => {
    return (
      item.race === "테란" &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Fragment>
      <NavbarMain />
      <Container>
        <Form className="d-flex mt-3 mb-3" style={{ maxWidth: "500px" }}>
          <Form.Control
            type="search"
            placeholder="맵 이름을 검색해주세요"
            className="me-2"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Form>
        <Row xs={1} md={4} className="g-4">
          {filteredTerranData.map((item, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img
                  variant="top"
                  src={item.img}
                  height="300px"
                  onClick={() => handleImageClick(item.img)}
                  style={{ cursor: "pointer", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text><b>{item.place}</b></Card.Text>
                  <Card.Text>{item.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>이미지 크게 보기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage} alt="큰 이미지" style={{ width: "100%" }} />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default Terran;

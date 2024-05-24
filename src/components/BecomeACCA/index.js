// src/components/BecomeACCA.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Modal from '../Model';
import './index.css';

const BecomeACCA = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container id="become-acca" className="ba-section">
      <Row>
        <Col md={6} className="ba-left-half">
          <h2 className="ba-heading">Become ACCA in 18 Months</h2>
          <p className="ba-paragraph">
          Start your journey to becoming a qualified ACCA professional with our comprehensive 18-month program. ACCA (Association of Chartered Certified Accountants) is a globally recognized qualification that opens doors to exciting career opportunities in accounting, finance, and business.
          </p>
          <Row>
            <Col sm={3}>
              <div className="ba-box">
                <h3 className="ba-box-heading">Box 1</h3>
                <p className="ba-box-price">$100</p>
                <img src="path/to/logo.png" alt="Logo" className="ba-logo" />
              </div>
            </Col>
            <Col sm={3}>
              <div className="ba-box">
                <h3 className="ba-box-heading">Box 1</h3>
                <p className="ba-box-price">$100</p>
                <img src="path/to/logo.png" alt="Logo" className="ba-logo" />
              </div>
            </Col>
            <Col sm={3}>
              <div className="ba-box">
                <h3 className="ba-box-heading">Box 1</h3>
                <p className="ba-box-price">$100</p>
                <img src="path/to/logo.png" alt="Logo" className="ba-logo" />
              </div>
            </Col>
            <Col sm={3}>
              <div className="ba-box">
                <h3 className="ba-box-heading">Box 1</h3>
                <p className="ba-box-price">$100</p>
                <img src="path/to/logo.png" alt="Logo" className="ba-logo" />
              </div>
            </Col>
          </Row>
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="danger">Danger</Button>
        </Col>
        <Col md={6} className="ba-right-half">
          <div>
            
            <Form>
            <h2 className="ba-form-heading">Form Heading</h2>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="primary" type="submit" className="ba-submit-button">
                Request Call Back
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      {showModal && <Modal onClose={handleCloseModal} />}
    </Container>
  );
}

export default BecomeACCA;

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React from 'react'
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <Container >
        <Row>
        <br />
			<br />
          <Col style={{ textAlign: "center" }}>
            <Image style={{ width: "300px", height: "360px" }} src="/img/my_photo.jpg" thumbnail />
          </Col>
        </Row>
      </Container >
      <br />
			
      <div style={{ fontSize: "30px" }}>
        Hi, my name is Tetiana, I am QA Test Engineer. I was looking for a way to improve my technical 
        abilities so I have finished front-end and back-end web development course from University of New Brunswick. 
        Now with a newly aquired knowledge I am eager to use my QA Engineering experience as well as coding skills
       to support planning, coordinating, and performing activities that support successful product development and business operations
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

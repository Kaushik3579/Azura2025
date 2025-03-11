import styles from "../styles/Home.module.css";
import TechnicalEventsMBAData from "./data/TechnicalEventsMBAData.json";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TechnicalMBA = () => {
  const data =  [
    {
      "_id": 1,
      "title": "Corporate Trailblazers (The young manager)",
      "Organizer": ["P Ramesh", "P Nandhini"]
    },
    {
      "_id": 2,
      "title": "Tackle the stress (HR)",
      "Organizer": ["P Ayesha", "S Archana"]
    },
    {
      "_id": 3,
      "title": "Ad-Mad",
      "Organizer": ["Mariyam Siddiqua", "Chandravardhan"]
    },
    {
      "_id": 4,
      "title": "App Connect",
      "Organizer": ["L Sai Rachana", "Farheen"]
    },
    {
      "_id": 5,
      "title": "Boom & Bust",
      "Organizer": ["R Kavya", "T Maneesha"]
    },
    {
      "_id": 6,
      "title": "Paper Presentation",
      "Organizer": ["Uday", "M.Sri Kanya"]
    },
    {
      "_id": 7,
      "title": "Business Quiz",
      "Organizer": ["Nithin", "A.Sreeja"]
    }
  ];
  return (
    <div className={styles.container}>
      <Container>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Row className={styles.title}>
          <h1>
            Technical events by the<span> Department of MBA</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {data.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                  {Array.isArray(index.Organizer) ? (
                      index.Organizer.map((organizer, index) => (
                        <div key={index}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{organizer}</i>
                        </div>
                      ))
                    ) : (
                      <div>
                        <br />
                        <FaPhoneAlt />
                        <br />
                        <i>{index.Organizer}</i>
                      </div>
                    )}
                     
                  </Card.Text>
                  <a href={"index.razorpayLink"} target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                    Register
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default TechnicalMBA;

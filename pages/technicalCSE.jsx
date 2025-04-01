import styles from "../styles/Home.module.css";
import TechnicalEventsCSEData from "./data/TechnicalEventsCSEData.json";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TechnicalCSE = () => {
  const data = [
    {
      "_id": 1,
      "title": "DevDash",
      "Organizer": "Siddharth PG,Karthik SS"
    },
    {
      "_id": 2,
      "title": "Predict and Win ",
      "Organizer": "G.Sowmya, N.Vibhas"
    },
    {
      "_id": 3,
      "title": "Blind coding ",
      "Organizer": "G.Sai ganesh, A. VENKATESHWAR REDDY"
    },
    {
      "_id": 4,
      "title": "Crack it up",
      "Organizer": "Suraj, Amulya"
    },
    {
      "_id": 5,
      "title": "Blind Coding",
      "Organizer": "Jaya Sree, Deepak"
    },
    {
      "_id": 6,
      "title": "Logo & UI Designing",
      "Organizer": "Karthik, Roopak Reddy, Rahul"
    },
    {
      "_id": 7,
      "title": "Coding Premier League",
      "Organizer": "Praveen kumar, K.Shashank, Beta Harshith"
    },
    {
      "_id": 8,
      "title": "Fresh Man Code Cup",
      "Organizer": "Nikhil, sathyanarayana"
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
            Technical events by the<span> Department of CSE</span>
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
                  <a href={index.razorpayLink} target="_blank" rel="noreferrer" className={styles.cardAnchor}>
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
export default TechnicalCSE;

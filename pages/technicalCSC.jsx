import styles from "../styles/Home.module.css";
import TechnicalEventsCSCData from "./data/TechnicalEventsCSCData.json";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TechnicalCSC = () => {
  const data = [
    {
      "_id": 1,
      "title": "DevDash",
      "Organizer": "Siddharth PG, Karthik SS"
    },
    {
      "_id": 2,
      "title": "Freshman Code Cup (FCC)",
      "Organizer": "V ANIKETH SRIVATHSA , K SATYANARAYANA "
    },
    {
      "_id": 3,
      "title": "Paper Presentation",
      "Organizer": "Archana, R.Sai Kiran"
    },
    {
      "_id": 4,
      "title": "Poster Presentation",
      "Organizer": "K.Harsha Vardhan, Amith Kumar"
    },
    {
      "_id": 5,
      "title": "CyberSpark",
      "Organizer": "Harshitha.C, D.Varun Reddy"
    },
    {
      "_id": 6,
      "title": "Web Designing",
      "Organizer": "Jagannatha Aditya, B.Avanthi"
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
            Technical events by the<span> Department of CSC(Cyber Security)</span>
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
                  <i>Organized by:</i>
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
                  <Link href={"index.razorpayLink"}>
                    <a target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                      Register
                    </a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default TechnicalCSC;

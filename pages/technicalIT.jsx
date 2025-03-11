import styles from "../styles/Home.module.css";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TechnicalIT = () => {
  const data = [
    {
      "_id": 1,
      "title": "Paper Presentation",
      "Organizer": "Sandhya Gayatri",
      "year": "3rd",
      "Roll no": "21H51A1245"
    },
    {
      "_id": 2,
      "title": "Poster Presentation",
      "Organizer": "Kashish Singhal",
      "year": "3rd",
      "Roll no": "21H51A1247"
    },
    {
      "_id": 3,
      "title": "Guess The Output",
      "Organizer": ["Akshay", "Venudhar"],
      "year": "3rd",
      "Roll no": ["21H51A1214", "21H51A1203"]
    },
    {
      "_id": 4,
      "title": "Bug Fixing",
      "Organizer": ["Tanishqi", "Sharanya"],
      "year": "3rd",
      "Roll no": ["21H51A1234", "21H51A1240"]
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
            Technical events by the<span> Department of IT</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {data.map(event => (
            <Col key={event._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{event.title}</h4>
                  </Card.Title>

                  <div>Organized by:</div>
                  <Card.Text>
                    {Array.isArray(event.Organizer) ? (
                      event.Organizer.map((organizer, index) => (
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
                        <i>{event.Organizer}</i>
                      </div>
                    )}
                  </Card.Text>

                  {/* Register button */}
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

export default TechnicalIT;

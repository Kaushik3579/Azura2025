import styles from "../styles/Home.module.css";
import TechnicalEventsMechData from "./data/TechnicalEventsMechData.json";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TechnicalMech = () => {
  const data = [
    {
      "s.no": 1,
      "title": "Paper presentation",
      "Organizer": "Dharmendar Ramawat"
    },
    {
      "s.no": 2,
      "title": "Poster presentation",
      "Organizer": "G.Uday, Naga Durga Kondal Rao"
    },
    {
      "s.no": 3,
      "title": "AutoCAD Designing",
      "Organizer": "Bh.Phanindra, Joseph"
    },
    {
      "s.no": 4,
      "title": "Technical Debate",
      "Organizer": "A.Sagar, B.Kishore"
    },
    {
      "s.no": 5,
      "title": "Assembly and Disassembly of engines",
      "Organizer": "J.Sandeep, B.Himawanth"
    }
  ];
  return (
    <>



      <div className={styles.container}>

        <Container>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <Row className={styles.title}>
            <h1>
              Technical events by the<span> Department of Mechanical Engineering</span>
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
    </>
  );
};
export default TechnicalMech;

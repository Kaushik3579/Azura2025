import styles from "../styles/Home.module.css";
import TechnicalEventsCSMData from "./data/TechnicalEventsCSMData.json";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TechnicalCSM = () => {
  const data = [
    {
      "_id": 1,
      "title": "Poster presentation",
      "Organizer": "P. Vasavi, B. Nandini"
    },
    {
      "_id": 2,
      "title": "Paper Presentation",
      "Organizer": "G.Lakshmi Lahari, B.Gowthami"
    },
    {
      "_id": 3,
      "title": "Ima Code",
      "Organizer": "Priyal, Nikhil Chary"
    },
    {
      "_id": 4,
      "title": "Bug Rack",
      "Organizer": "Jashua Prasanna Kumar, Md.Mohassin Hussain"
    },
    {
      "_id": 5,
      "title": "Binary Blitz",
      "Organizer": "P.Sathwika, M.Anjali"
    },
    {
      "_id": 6,
      "title": "Pool Puzzle",
      "Organizer": "Vivek, Sai Varun"
    },
    {
      "_id": 7,
      "title": "Tech Talk",
      "Organizer": "Yagna Priya, Amulya"
    },
    {
      "_id": 8,
      "title": "Code in Dark",
      "Organizer": "Karunakar, Jaya Shankar"
    },
    {
      "_id": 9,
      "title": "Web Witz",
      "Organizer": "Sreevallika, Vamshi"
    },
    {
      "_id": 10,
      "title": "Code Auction",
      "Organizer": "Varshith, Deekshitha"
    },
    {
      "_id": 11,
      "title": "MP Star",
      "Organizer": "Samyuktha, Parimala"
    },
    {
      "_id": 12,
      "title": "Code Anthakshari",
      "Organizer": "Bhanu Tej, Jyotsna"
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
            Technical events by the<span> Department of CSM(AI &amp; ML)</span>
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
  );
};
export default TechnicalCSM;

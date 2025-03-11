import styles from "../styles/Home.module.css";
// import NonTechnicalEventsCSEData from "./NonTechnicalEventsCSEData.json";
// import NonTechnicalEventsCSCData from "./NonTechnicalEventsCSCData.json";
// import NonTechnicalEventsCSMData from "./NonTechnicalEventsCSMData.json";
// import NonTechnicalEventsECEData from "./NonTechnicalEventsECEData.json";
// import NonTechnicalEventsEEEData from "./NonTechnicalEventsEEEData.json";
// import NonTechnicalEventsMechData from "./NonTechnicalEventsMechData.json";
// import NonTechnicalEventsCivilData from "./NonTechnicalEventsCivilData.json";
// import NonTechnicalEventsMBAData from "./NonTechnicalEventsMBAData.json";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
const Nontechnical = () => {

  const civil = [
    {
      "_id": 2,
      "title": "Jig saw puzzle",
      "Organizer": ""
    },
    {
      "_id": 3,
      "title": "match the Dice",
      "Organizer": "Laxman"
    },
    {
      "_id": 4,
      "title": "match me!!",
      "Organizer": "Hari Krishna"
    },
    {
      "_id": 5,
      "title": "watch and win",
      "Organizer": ""
    },
    {
      "_id": 6,
      "title": "lift and soak",
      "Organizer": "Laxman"
    },
    {
      "_id": 7,
      "title": "fiip ox",
      "Organizer": "DEEKSHITH"
    }
  ];



  const eee = [
    {
      "_id": 1,
      "title": "Cooking Without Fire",
      "Organizer": ["K. Manikanta", "P. Karunakar"]
    },
    {
      "_id": 2,
      "title": "Detate",
      "Organizer": "Ganesh"
    },
    {
      "_id": 3,
      "title": "On Spot Drawing",
      "Organizer": ["Vamshi", "Nahendhra"]
    },
    {
      "_id": 4,
      "title": "Find Me, If You Can",
      "Organizer": ["P. Karthik", "S. Shiva"]
    }
  ];



  const csm = [
    {
      "_id": 1,
      "title": "SmashKarts",
      "Organizer": ["Navya sai", "Sai Lohith Reddy"]
    },
    {
      "_id": 2,
      "title": "The Great escape room",
      "Organizer": ["Kiran Phani Kumar", "Tarun"]
    },
    {
      "_id": 3,
      "title": "Trivia",
      "Organizer": ["M.Indu", "M.Hemasri"]
    },
    {
      "_id": 4,
      "title": "Tollywood mania",
      "Organizer": ["Dharani", "CH.Sathvika"]
    },
    {
      "_id": 5,
      "title": "Anime Acumen challenge",
      "Organizer": ["Vijaykumar", "V.Bharath Sai Seshu"]
    },
    {
      "_id": 6,
      "title": "Valorant",
      "Organizer": ["Yashwant", "B.Nagashayan"]
    },
    {
      "_id": 7,
      "title": "Murder Mystery",
      "Organizer": ["N.Sai teja", "B.Sankeerth"]
    },
    {
      "_id": 8,
      "title": "Mirror Maze",
      "Organizer": ["Sai Gowtham", "S.Pravallika"]
    },
    {
      "_id": 9,
      "title": "Tambola",
      "Organizer": ["Venkat Bharadwaj", "Siddu deekshit"]
    },
    {
      "_id": 10,
      "title": "BGMI",
      "Organizer": ["V.Kevin Jashua", "D.Venki"]
    },
    {
      "_id": 11,
      "title": "Freefire",
      "Organizer": ["Sai teja", "Aravind"]
    },
    {
      "_id": 12,
      "title": "Brain out",
      "Organizer": ["B.Nikhil", "Aakash"]
    },
    {
      "_id": 13,
      "title": "Whisper Challlenge",
      "Organizer": ["D.Sathvika", "E. Mayukha", "S.Shriya", "Sadiya Tabassum"]
    }
  ];


  const cse = [
    {
      "_id": 1,
      "title": "Treasure hunt",
      "Organizer": "Priya"
    },
    {
      "_id": 2,
      "title": "BGMI",
      "Organizer": "M.Sathwik"
    },
    {
      "_id": 3,
      "title": "Art Competition",
      "Organizer": "Inayath"
    },
    {
      "_id": 4,
      "title": "Fashion Show",
      "Organizer": "Sreya"
    }
  ];



  const mech = [
    {
      "_id": 1,
      "title": "Movie Quiz",
      "Organizer": "B.Suvarna"
    },
    {
      "_id": 2,
      "title": "BGMI",
      "Organizer": "M.Laxman"
    },
    {
      "_id": 3,
      "title": "Rubik's cube challenge",
      "Organizer": "L.Srikanth"
    },
    {
      "_id": 4,
      "title": "Ludo king",
      "Organizer": "Dharma Teja"
    }
  ];



  const csd = [
    {
      "_id": "1",
      "title": "Poetry Competetion",
      "organizer1": "Raahil",
      "organizer2": " Naga Sai",
      "mobile1": "tel:9149410633",
      "mobile2": "tel:8639400929"

    }
  ]



  const It = [
    {
      "_id": 1,
      "title": "Fun Quiz Fiesta",
      "Organizer": ["T. Aditrishivany", "B. Sai Sonal"],
      "year": "2nd"
    },
    {
      "_id": 2,
      "title": "Whisper Challenge",
      "Organizer": ["K. Vasavi", "A. Deekshitha"],
      "year": "2nd"
    },
    {
      "_id": 3,
      "title": "Hand Foot Game",
      "Organizer": ["B. Srihitha", "Ch. Siri"],
      "year": "2nd"
    }
  ];


  const mba = [
    {
      "_id": 1,
      "title": "Singing Sitare",
      "Organizer": ["M Anusha", "R Teenabeaulah"]
    },
    {
      "_id": 2,
      "title": "Fashion Fiesta",
      "Organizer": ["Shaik Naveed", "E Ashritha"]
    },
    {
      "_id": 3,
      "title": "Beat 2 Beat",
      "Organizer": ["Y Akhila", "G Alekya"]
    }
  ];




  const ece = [
    {
      "_id": 1,
      "title": "THE GAMING HUB",
      "Organizer": ["ABHILASH", "BHARGAV"]
    },
    {
      "_id": 2,
      "title": "CHESS",
      "Organizer": "BHARGAV"
    },
    {
      "_id": 3,
      "title": "SPELL-BEE",
      "Organizer": ["MANASA", "PRIYANKA"]
    },
    {
      "_id": 4,
      "title": "TREASURE HUNT",
      "Organizer": "VEDANTA"
    }
  ];


  const csc = [
    {
      "_id": 1,
      "title": "Anime Quiz",
      "Organizer": ["B.Druthi", "Y.Sneha"]
    },
    {
      "_id": 2,
      "title": "Chess Tournament",
      "Organizer": ["G.Uday teja", "G.Pranay kumar"]
    },
    {
      "_id": 3,
      "title": "Jam Session",
      "Organizer": ["G.kency Hadassah", "K.Deeksha"]
    },
    {
      "_id": 4,
      "title": "Emoji Game",
      "Organizer": ["B.Charan Teja Goud", "A.Chakradhar"]
    },
    {
      "_id": 5,
      "title": "Debate",
      "Organizer": ["Basanth Reddy", "M.Srihari"]
    }
  ];



  return (
    <div className={styles.container}>
      <h1 style={{
        color: '#ffff',
        fontSize: '2.2rem',
        textAlign: 'center',
        padding: '20px',
        textDecoration: 'underline'
      }}  >Non-Technical Events</h1>
      <Container>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of CSE</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {cse.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
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
                    </>
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
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of CSC (Cyber Security)</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {csc.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
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
                    </>
                  </Card.Text>
                  <a href={"index.razorpayLink"} target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                    Register
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of CSM (AI ML)</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {csm.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
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
                    </>
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
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of ECE</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {ece.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
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
                    </>
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
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of EEE</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {eee.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
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
                    </>
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
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of Mechanical</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {mech.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
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
                    </>
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
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of Civil</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {civil.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
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
                    </>
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
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of MBA</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {mba.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
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
                    </>
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
export default Nontechnical;

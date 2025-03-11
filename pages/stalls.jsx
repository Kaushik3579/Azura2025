import styles from '../styles/Home.module.css'
import StallsData from './data/StallsData.json'
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap'

const Stalls = () => {

  const data = [
    {
       "_id":"1",
       "title":"Hand Print stall",
       "organizer": "Siddartha"
    },
    {
       "_id":"2",
       "title":"Spiral potato",
       "organizer": "S.Akash"
    },
    {
        "_id":"3",
        "title":"Pani Puri stall",
        "organizer": "N.Santosh"
     },
     {
        "_id":"4",
        "title":"Hit the Glass",
        "organizer": "Bhanu Prakash"
     },
     {
        "_id":"5",
        "title":"Smoke biscuits",
        "organizer": "Manikiran"
     },
     {
        "_id":"6",
        "title":"hyderabadi chudwa",
        "organizer": "vamsi krishna"
     },
     {
         "_id":"7",
         "title":"momos",
         "organizer": "ch.krishna teja "
      },
      {
         "_id":"8",
         "title":"ice cola",
         "organizer": "Ratnakar"
      }
 
  ]
  return (
    <div className={styles.container}>
      <Container>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Row className={styles.title}>
          <h1><span>Stalls</span> for Azura 2k24</h1>
        </Row>
        <Row style={{
          cursor:'pointer'
        }}  xs={1} sm={1} md={2}>
          {data.map((stall) => (
            <Col key={stall._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <h5>{stall.title}</h5>
                  <p>Organizer: {stall.organizer}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}



        </Row>

      </Container>
    </div>
  )
}
export default Stalls
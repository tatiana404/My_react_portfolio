
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';
import Footer from './Footer';

function GroupExample() {
  return (
    <section>
      <br />
			<br />
      <div className="bottom-spacing">
        <a style={{color:"darkblue", font:"bold", fontSize: "25px"}} href={("/img/TetianaResume.pdf")} download="myFile">DOWNLOAD RESUME</a>
      </div>
      <br />
			<br />

      <CardGroup>
        <Card style={{backgroundColor: 'transparent'}}>
          <Card.Body >
            <Card.Title style={{ fontSize: "30px", background: "transparent", textAlign: "center" }}>Front-End and Back-End Proficiencies</Card.Title>
            <Card.Text style={{ fontSize: "25px", background: "transparent", textAlign: "center" }}>
              <div>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                  <li>version control/Git</li>
                  <li>APIs</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>Model View Controller (MVC)</li>
                  <li>Progressive Web Applications (PWA)</li>
                  <li>MySQL</li>
                  <li>Sequelize</li>
                  <li>NoSQL</li>
                  <li>MongoDB</li>         
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{backgroundColor: 'transparent'}}>
          <Card.Body >
            <Card.Title style={{ fontSize: "30px", textAlign: "center" }}>QA/QC skills</Card.Title>
            <Card.Text style={{  fontSize: "25px", background: "transparent", textAlign: "center" }}>
                  <li>Unit Testing</li>
                  <li>Integration Testing</li>
                  <li>Manual Testing</li>
                  <li>Functional Testing</li>
                  <li>Performance Testing</li>
                  <li>Regression Testing</li>
                  <li>Smoke Testing & Sanity Testing</li>
                  <li>Black Box Testing</li>
                  <li>Jira</li>
                  <li>TestRail</li>
                  <li>Postman</li>
                  <li>Confluence</li>
                  <li>DataDog</li>
                  <li>Google Cloud Platform</li>
                  <li>JMeter</li>
                  <li>Python basics</li>
                  <li>Test Strategy(updated)</li>
                  <li>Test Plan (updated)</li>
                  <li>Requirements Traceability Matrix (updated)</li> 
                  <li>Dependency Matrix (created/updated)</li>
            </Card.Text>
          </Card.Body>
        </Card>

      </CardGroup>
      <br />
			<br />
      <Footer />
    </section>
  );
}

export default GroupExample;
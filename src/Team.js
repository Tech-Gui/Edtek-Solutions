import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Team() {
  return (
    <div
      style={{
        background: "rgb(15, 12, 31)",
        paddingTop: "1rem",
        paddingBottom: "17rem",
      }}>
      <Container className="d-flex justify-content-evenly mt-5">
        <Row>
          <h3 className="mt-2" style={{ fontWeight: "bold", color: "#fff" }}>
            {" "}
            Meet Our Team
          </h3>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="circular-frame mt-5">
              <img
                src={process.env.PUBLIC_URL + "/linda.jpg"}
                alt="Linda"
                className="circular-image"
                width={"90%"}
              />
            </div>
            <h6 style={{ color: "#fff" }} className="mt-3">
              Linda Hasi
            </h6>
            <p className="job">Chief Exective Officer</p>
            <a
              href="https://www.linkedin.com/in/linda-hasi-b69b25111/"
              target="_blank"
              rel="noopener noreferrer"
              className="circular-linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>

          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="circular-frame mt-5">
              <img
                src={process.env.PUBLIC_URL + "/xolani.jpg"}
                alt="Paul"
                className="circular-image"
              />
            </div>
            <h6 style={{ color: "#fff" }} className="mt-3">
              Xolani Radebe
            </h6>
            <p className="job">Chief Technology Officer</p>
            <a
              href="https://www.linkedin.com/in/radebexf/"
              target="_blank"
              rel="noopener noreferrer"
              className="circular-linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>

          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="circular-frame mt-5">
              <img
                src={process.env.PUBLIC_URL + "/cyril.jpg"}
                alt="Cyril"
                className="circular-image"
              />
            </div>
            <h6 style={{ color: "#fff" }} className="mt-3">
              Cyril Chironda
            </h6>
            <p className="job">Senior Data Scientist</p>
            <a
              href="https://www.linkedin.com/in/cyril-tamuka-chironda/"
              target="_blank"
              rel="noopener noreferrer"
              className="circular-linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>

          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="circular-frame mt-5">
              <img
                src={process.env.PUBLIC_URL + "/olwethu.jpg"}
                alt="Paul"
                className="circular-image"
              />
            </div>
            <h6 style={{ color: "#fff" }} className="mt-3">
              Olwethu Sokabo
            </h6>
            <p className="job">Data Analyst</p>
            <a
              href="https://www.linkedin.com/in/olwethu-sokabo295/"
              target="_blank"
              rel="noopener noreferrer"
              className="circular-linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

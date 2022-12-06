import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions";

const MainSearch = () => {
  const [value, setValue] = useState("");

  const joblist = useSelector((state) => state.jobs.joblist);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(getJobsAction(value));
  };

  return (
    <div className="App">
      <div className="App-overlay">
        <Container>
          <Row>
            <div>
              <Col xs={12} className="mx-auto my-3">
                <h1 style={{ color: "white", textShadow: "black 0px 0px 3px" }}>
                  Remote Jobs Search
                </h1>
              </Col>
              <Col xs={10} className="mx-auto">
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    type="search"
                    value={value}
                    onChange={handleChange}
                    placeholder="type and press Enter"
                  />
                </Form>
                <Col xs={12}>
                  <div
                    className="d-flex justify-content-center mt-2"
                    style={{ width: "100%" }}
                  >
                    <Button
                      className="mybuttons px-5"
                      onClick={() => navigate("/favorites")}
                    >
                      My Favorites
                    </Button>
                  </div>
                </Col>
              </Col>
            </div>
            <div>
              <Col xs={10} className="mx-auto mb-5">
                {joblist.map((jobData) => (
                  <Job key={jobData._id} data={jobData} />
                ))}
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainSearch;

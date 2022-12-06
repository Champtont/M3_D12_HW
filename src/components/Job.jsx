import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VscSave } from "react-icons/vsc";
import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row
      className="mx-0 mt-3 py-3 px-0 align-items-center"
      style={{ border: "1px solid antiquewhite", borderRadius: 15 }}
    >
      <Col xs={1} className="d-flex align-items-center pl-0">
        <Button
          className="d-flex align-items-center savebuttons"
          onClick={() => {
            dispatch({ type: "ADD_TO_FAV", payload: data });
          }}
        >
          <VscSave style={{ fontSize: "20pt" }} />
        </Button>
      </Col>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8} className="px-0">
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;

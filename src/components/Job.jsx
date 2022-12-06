import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VscSave } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.companies);

  return (
    <Row
      className="mx-0 mt-3 py-3 px-0 align-items-center mylist-item"
      style={{
        borderRadius: 15,
        backgroundColor: "antiquewhite",
      }}
    >
      <Col xs={1} className="d-flex align-items-center pl-0">
        <Button
          className={`d-flex align-items-center ${
            favorites.includes(data) === true ? `saved` : `savebuttons`
          }`}
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

import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { GiShrug } from "react-icons/gi";
import { TfiTrash } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MyFavorites = () => {
  const favorites = useSelector((state) => state.favorites.companies);
  console.log(favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <h1 className="text-center mb-2">Saved for Later</h1>
        {favorites.length === 0 && (
          <Row className="text-center">
            <Col>
              <h2 className="display-4">
                No Favorites Yet <GiShrug />{" "}
              </h2>
            </Col>
          </Row>
        )}
      </Container>
      <Container className="d-flex flex-column justify-content-center">
        <ListGroup>
          {favorites.map((favorite) => {
            return (
              <ListGroup.Item
                key={favorite._id}
                className="d-flex justify-content-between"
              >
                <p>
                  <Link to={`/${favorite.company_name}`}>
                    {favorite.company_name}
                  </Link>
                </p>
                <p>{favorite.title}</p>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAV",
                      payload: favorite._id,
                    });
                  }}
                >
                  <TfiTrash />
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <Button
          className="mt-2"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
      </Container>
    </>
  );
};

export default MyFavorites;

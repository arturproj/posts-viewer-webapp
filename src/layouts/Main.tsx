import React, { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../_redux/reducers";
import { toggleUsersRequest } from "../_redux/actions/usersActions";
import { togglePostsRequest } from "../_redux/actions/postsActions";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Row, Col, Container, Button, Spinner } from "react-bootstrap";

function filterRegexAddress(logement: string, regex: any) {
  return logement.match(regex);
}

const Main: FunctionComponent = () => {
  const { pending, usersCount, postsCount, suite, appar } = useSelector(
    (state: RootState) => ({
      pending: state.users.pending && state.posts.pending,
      usersCount: state.users.users.length,
      postsCount: state.posts.posts.length,
      suite: state.users.users.filter((user: any) =>
        filterRegexAddress(user.address.suite, "Suite")
      ).length,
      appar: state.users.users.filter((user: any) =>
        filterRegexAddress(user.address.suite, "Apt")
      ).length,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleUsersRequest());
    dispatch(togglePostsRequest());
  }, []);

  return (
    <>
      <Navbar />
      {!pending ? (
        <>
          {" "}
          <Row className="mx-auto">
            <h5>Nombre de données disponibles </h5>
            <Col xs={6}>Users found : {usersCount}</Col>
            <Col xs={6}>Posts found : {postsCount}</Col>
          </Row>
          <Row className="mx-auto">
            <h5>Filtrer par type de logement</h5>
            <Col xs={6}>Suite found : {suite}</Col>
            <Col xs={6}>Appar found : {appar}</Col>
          </Row>
          <Outlet />
        </>
      ) : (
        <Container className="pending-contener d-flex justify-content-center align-self-center">
          <Button variant="primary" className="m-auto pending-loader" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </Button>
        </Container>
      )}
    </>
  );
};

export default Main;

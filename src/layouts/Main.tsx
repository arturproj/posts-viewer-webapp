import React, { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../_redux/reducers";
import { toggleUsersRequest } from "../_redux/actions/usersActions";
import { togglePostsRequest } from "../_redux/actions/postsActions";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Row, Col, Container, Button, Spinner } from "react-bootstrap";

const Main: FunctionComponent = () => {
  const { pending, usersCount, postsCount } = useSelector(
    (state: RootState) => ({
      pending: state.users.pending && state.posts.pending,
      usersCount: state.users.users.length,
      postsCount: state.posts.posts.length,
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
            {usersCount !== 0 ? (
              <Col xs={6}>Users found : {usersCount}</Col>
            ) : null}
            {postsCount !== 0 ? (
              <Col xs={6}>Posts found : {postsCount}</Col>
            ) : null}
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

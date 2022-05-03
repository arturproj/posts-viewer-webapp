import React, { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../_redux/reducers";
import { toggleActionRequest } from "../_redux/actions/usersActions";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Row, Col } from "react-bootstrap";

const Main: FunctionComponent = () => {
  const { usersList, postsList } = useSelector((state: RootState) => {
    console.log(state)
    return {
      usersList: state.users.users,
      postsList: state.posts.posts,
    };
  });

  console.log({ usersList, postsList });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleActionRequest());
  }, []);

  return (
    <>
      <Navbar />
      <Row className="mx-auto">
        <Col xs={6}>Users n° {usersList.length}</Col>
        <Col xs={6}>Posts n° {postsList.length}</Col>
      </Row>
      <Outlet />
    </>
  );
};

export default Main;

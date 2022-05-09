import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../_redux/reducers";

import { IUser } from "../../models/IUser";
import { IPost } from "../../models/IPost";

import { isNumber } from "../../helpers";

import InfoUser from "./InfoUser";
import PostsUser from "./PostsUser";
import "./style.css";

import { Container, Row, Col } from "react-bootstrap";

const PostsTable: FC = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col sx="12" md="4">
          <InfoUser />
        </Col>
        <Col sx="12" md="8">
          <PostsUser />
        </Col>
      </Row>
    </Container>
  );
};

export default PostsTable;

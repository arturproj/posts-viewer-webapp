import React, { FC, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../_redux/reducers";
import { toggleUsersRequest } from "../../_redux/actions/usersActions";
import { IUser } from "../../models/IUser";

import { Navbar, Container, Nav } from "react-bootstrap";
import "./style.css";
const NavBar: FC = () => {

  const { usersPending, postsPending } = useSelector((state: RootState) => ({
    usersPending: state.users.pending,
    postsPending: state.posts.pending,
  }));

  return (
    <Navbar bg="primary" variant="dark">
      <Container className="navbar-minautor rounded justify-content-between">
        <Navbar.Brand href="#home">
          <img
            alt="React Bootstrap logo"
            src="https://react-bootstrap.github.io/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Minautor react interview
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <span
            className={`material-icons ${
              usersPending && postsPending ? "rotate-icon-loandig" : ""
            }`}
          >
            autorenew
          </span>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

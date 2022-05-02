import React, { FunctionComponent, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { RootState } from "../_redux/reducers";
import { toggleActionRequest } from "../_redux/actions/usersActions";
import axios from "axios";
import { IUser } from "../models/IUser";

const UsersTable: FunctionComponent = () => {
    
  const dispatch = useDispatch();
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );
  useEffect(() => {
    dispatch(toggleActionRequest());
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: IUser) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;

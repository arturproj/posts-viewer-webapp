import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../_redux/reducers";

import { IUser } from "../../models/IUser";

import { Table } from "react-bootstrap";

const UsersTable: FC = () => {
  const { users } = useSelector((state: RootState) => state.users);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: IUser) => (
          <tr key={user.id}>
            <td>
              <a href={`/posts/${user.id}`}>{user.id} </a>
            </td>
            <td>
              <a href={`/posts/${user.id}`}>{user.name} </a>
            </td>
            <td>
              <a href={`/posts/${user.id}`}>{user.username} </a>
            </td>
            <td>
              <a href={`/edit/${user.id}`}>
                <span className="material-icons text-primary">edit_note</span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;

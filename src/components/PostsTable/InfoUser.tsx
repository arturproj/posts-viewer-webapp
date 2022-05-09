import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../_redux/reducers";

import { IUser } from "../../models/IUser";

import { isNumber } from "../../helpers";

const InfoUser: FC = () => {
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [address, setAddress] = useState(null);

  const [loding, setLoding] = useState(true);

  const { id } = useParams();
  const { pending, users } = useSelector((state: RootState) => ({
    pending: state.users.pending && state.posts.pending,
    users: state.users.users,
  }));

  const findUser = (id: string | undefined) => {
    if (!isNumber(id)) {
      return null;
    }
    return users.find((user: IUser) => user.id === Number(id));
  };

  useEffect(() => {
    if (isNumber(id)) {
      let user = findUser(id);

      if (user) {
        setName(user.name);
        setUsername(user.username);
        let fullAddress: any = `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
        setAddress(fullAddress);
        setLoding(false);
      }
    }
  }, []);

  console.log({ pending, loding, name, username });

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Admin"
              className="rounded-circle"
              width="150"
            />
            <div className="mt-3">
              <h4>{name}</h4>
              <p className="text-secondary mb-1">{username}</p>
              <p className="text-muted font-size-sm">{address}</p>
              <button className="btn btn-outline-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoUser;

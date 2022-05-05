import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../_redux/reducers";

import { IUser } from "../../models/IUser";
import { IPost } from "../../models/IPost";

import { isNumber } from "../../helpers";

const PostsTable: FC = () => {
  const { id } = useParams();

  const { pending, findUser, findPosts } = useSelector((state: RootState) => ({
    pending: state.users.pending && state.posts.pending,
    findUser: (id: string | undefined) => {
      if (!isNumber(id)) {
        return null;
      }
      return state.users.users.find((user: IUser) => user.id === Number(id));
    },
    findPosts: (userId: string | undefined) => {
      if (!isNumber(userId)) {
        return null;
      }
      return state.posts.posts.filter(
        (post: IPost) => post.userId === Number(userId)
      );
    },
  }));
  console.log("PostsTable", {
    user: findUser(id),
    posts: findPosts(id),
    isNumber: isNumber(id),
  });

  return <></>;
};

export default PostsTable;

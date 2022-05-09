import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../_redux/reducers";

import { IUser } from "../../models/IUser";
import { IPost } from "../../models/IPost";

import { isNumber } from "../../helpers";

const PostsUser: FC = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [loding, setLoding] = useState(true);
  const { id } = useParams();
  const { pending, allPosts } = useSelector((state: RootState) => ({
    pending: state.users.pending && state.posts.pending,
    allPosts: state.posts.posts,
  }));

  const findPosts = (userId: string | undefined) => {
    if (!isNumber(userId)) {
      return null;
    }
    return allPosts.filter((post: IPost) => post.userId === Number(userId));
  };
  useEffect(() => {
    if (isNumber(id) && userPosts.length === 0) {
      setUserPosts(findPosts(id));
      setLoding(false);
    }
  }, [userPosts]);

  console.log({ loding,pending, userPosts });
  return (
    <div className="profile-content">
      {/* begin tab-content */}
      <div className="tab-content p-0">
        {/* begin #profile-post tab */}
        <div className="tab-pane fade active show" id="profile-post">
          {/* begin timeline */}
          <ul className="timeline">
            {userPosts.map((post: IPost, idx: number) => (
              <li key={idx}>
                {/* begin timeline-icon */}
                <div className="timeline-icon">
                  <a href="">&nbsp;</a>
                </div>
                {/* end timeline-icon */}
                {/* begin timeline-body */}
                <div className="timeline-body">
                  <div className="timeline-header">
                    <span className="username">{post.title}</span>
                    <span className="pull-right text-muted">#{post.id}</span>
                  </div>
                  <div className="timeline-content">
                    <p>{post.body}</p>
                  </div>
                </div>
                {/* end timeline-body */}
              </li>
            ))}
          </ul>
          {/* end timeline */}
        </div>
        {/* end #profile-post tab */}
      </div>
      {/* end tab-content */}
    </div>
  );
};

export default PostsUser;

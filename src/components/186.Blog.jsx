import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/186.postActions";
import { SyncLoader } from "react-spinners";

const Blog = (props) => {
  console.log(props);

  const click = () => {
    props.dispatch(fetchPosts());
  };

  return (
    <div>
      <h1>New Blog entries</h1>
      <button onClick={click}>Fetch Posts</button>

      {props.blog.isFetching ? (
        <SyncLoader />
      ) : (
        <ul>
          {props.blog.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default connect((state) => {
  return state;
})(Blog);

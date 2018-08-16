import React, { Component } from 'react';
import Post from "./Post";
import posts from './data.js';

class PostList extends Component {

  render() {
    return (
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-11">
          {posts.map((post, index) => <Post post={post} key={index} />)}
        </div>
      </div>
    )
  }
}

export default PostList;
import React, { Component } from 'react';
import Post from "./Post";
import posts from './data.js';

class PostList extends Component {

  sortPosts(posts) {
    const indexedArray = [];
    posts.forEach(post => {
      indexedArray.push([post.votes, [post]]);
    });
    indexedArray.sort(function(a, b) {
      return a[0] < b[0];
    });
    console.log(indexedArray);
    const sortedArray = indexedArray.map(el => el[1][0]);
    return sortedArray;
  }

  render() {
    const sortedPosts = this.sortPosts(posts);
    return (
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-11">
          {sortedPosts.map((post, index) => <Post post={post} key={index} />)}
        </div>
      </div>
    )
  }
}

export default PostList;
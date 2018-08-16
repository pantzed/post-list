import React, { Component } from 'react';
import posts from './data.js';
import Post from "./Post";

class PostList extends Component {

  constructor(props){
    super(props);
    this.state = {
      sortBy: this.props.sortBy,
      posts: posts,
    }
    this.key = Date.now().toString();
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote(post) {
    post.votes += 1;
    posts.forEach((el, index) => {
      if (post.id === el.id){
        posts[index] = el;
      }
    })
    this.setState({posts: posts});
  }

  downVote(post) {
    console.log(post);
    if (post.votes > 0) {
      post.votes -= 1;
      posts.forEach((el, index) => {
        if (post.id === el.id){
          posts[index] = el;
        }
      })
      this.setState({posts: posts});
    }
  }

  sortPosts(posts, property) {
    const indexedArray = [];
    posts.forEach((post, index) => {
      indexedArray.push([post[property], [post]]);
    });
    indexedArray.sort(function(a, b) {
      return a[0] < b[0];
    });
    const sortedArray = indexedArray.map(el => el[1][0]);
    return sortedArray;
  }

  render() {
    const sortedPosts = this.sortPosts(posts, this.props.sortBy);
    return (
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-11">
          {sortedPosts.map((post, index) => <Post post={post} key={index.toString()} upVote={this.upVote} downVote={this.downVote} />)}
        </div>
      </div>
    )
  }
}

export default PostList;
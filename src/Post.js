import React, { Component } from 'react';
import './App.css';
import { library }  from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(far, fas)

class Post extends Component {

  constructor(props){
    super(props);
    this.state = {
      imgURL: this.props.post.imgURL,
      title: this.props.post.title,
      body: this.props.post.body,
      comments: this.props.post.comments,
      author: this.props.post.author,
      votes: this.props.post.votes,
    }
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote() {
    this.setState({votes: this.state.votes + 1});
  }

  downVote() {
    if (this.state.votes > 0) {
      this.setState({votes: this.state.votes - 1});
    }
  }

  render() {
    return (
      <div key={this.props.index} className="row mt-4 p-2 bg-light border rounded">
        <div className="col-3">
          <img className="img img-fluid" src={this.state.imgURL} alt="random"/>
        </div>
        <div className="col-7">
          <h4>{this.state.title}</h4>
          <span>Votes: {this.state.votes}</span>
          <FontAwesomeIcon icon={fas.faFire} className="ml-2 text-success button-cursor unselectable" onClick={this.upVote}/> 
          <FontAwesomeIcon icon={fas.faPoo} className="ml-2 text-danger button-cursor unselectable" onClick={this.downVote}/> 
          <p>{this.state.body}</p>
          <span>Comments</span>
          <ul>
            {
              this.state.comments.map((comment, index) => {
                return <li key={index}>{comment}</li>;
              })
            }
          </ul>
        </div>
        <div className="col-1">
          <span>{this.props.post.author}</span>
        </div>
      </div>
    )
  }
}

export default Post;
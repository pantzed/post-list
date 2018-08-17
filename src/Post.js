import React, { Component } from 'react';
import './App.css';
import { library }  from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(far, fas)

function CommentForm(props) {
  return (
    <form onSubmit={(e => {props.handleComments(e)})}>
      <div>
        <div className="form-group">
          <input id="comment" type="text" className="form-control" placeholder="comment here!" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Add Comment</button>
      </div>
    </form>
  );
}

function CommentList(props) {
  return (
    props.comments.map((comment, index) => <li key={index}>{comment}</li>)
  );
}

class Post extends Component {

  constructor(props){
    super(props);
    this.state = {
      isHidden: true,
    }
    this.key = Date.now();
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    console.log(this);
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  pluralize(word, n) {
    let singluar = ` ${word}`;
    let pluralized = ` ${word}s`;
    if (n === 1) {
      return singluar
    }
    return pluralized;
  }

  render() {
    return (
      <div key={this.props.post.index} className="row mt-4 p-2 bg-light border rounded">
        <div className="col-3">
          <img className="img img-fluid" src={this.props.post.imgURL} alt="random"/>
        </div>
        <div className="col-7">
          <h4>{this.props.post.title}</h4>
          <span>{`${this.pluralize('Vote', this.props.post.votes)}: ${this.props.post.votes}`}</span>
          <FontAwesomeIcon icon={fas.faFire} className="ml-2 text-success button-cursor unselectable" onClick={() => this.props.upVote(this.props.post)}/> 
          <FontAwesomeIcon icon={fas.faPoo} className="ml-2 text-danger button-cursor unselectable" onClick={() => this.props.downVote(this.props.post)}/> 
          <p>{this.props.post.body}</p>
          <span className="button-cursor text-primary" onClick={this.toggleHidden}>
            {this.props.post.comments.length} {this.pluralize('comment', this.props.post.comments.length)}
          </span>
          {this.state.isHidden ? null : <CommentList comments={this.props.post.comments}/>}
          {this.state.isHidden ? null : <CommentForm handleComments = {this.handleComments} />}
        </div>
        <div className="col-2">
          <span>{this.props.post.author}</span>
        </div>
      </div>
    )
  }
}

export default Post;
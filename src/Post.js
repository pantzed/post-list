import React, { Component } from 'react';
import { library }  from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(far, fas)

class Post extends Component {
  render() {
    return (
      <div key={this.props.index} className="row mt-4 p-2 bg-light border rounded">
        <div className="col-3">
          <img className="img img-fluid" src={this.props.post.imgURL} alt="random"/>
        </div>
        <div className="col-7">
          <h4>{this.props.post.title}</h4>
          <span>Votes: {this.props.post.votes}</span>
          <FontAwesomeIcon icon={fas.faFire} className="ml-2 text-success comment-cursor unselectable"/> 
          <FontAwesomeIcon icon={fas.faPoo} className="ml-2 text-danger comment-cursor unselectable"/> 
          <p>{this.props.post.body}</p>
          <span>Comments</span>
          <ul>
            {
              this.props.post.comments.map((comment, index) => {
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
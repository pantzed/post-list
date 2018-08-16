import React, { Component } from 'react';

class UtilityBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      sortBy: props.sortBy,
    }
  }

  render(){
    return (
      <div className="row mt-5">
        <div className="col-11">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort By {this.props.sortBy}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={(event) => this.props.updateSortBy(event)}>
              <a className="dropdown-item" href="/" value="title">Title</a>
              <a className="dropdown-item" href="/" value="author">Author</a>
              <a className="dropdown-item" href="/" value="votes">Votes</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UtilityBar;
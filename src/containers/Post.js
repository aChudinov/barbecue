import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';

@withRouteData
export default class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <div>
        <Link to="/blog/">{'<'} Back</Link>
        <br />
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';

@withRouteData
export default class Blog extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <h1>It's blog time.</h1>
        <br />
        All Posts:
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

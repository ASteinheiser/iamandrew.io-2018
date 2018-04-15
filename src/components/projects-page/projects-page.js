import React, { Component } from 'react';
import map                  from 'lodash.map';

import BlogPost from '../blog-post';
import posts    from '../../assets/blog-posts.json';
import './index.css';

export default class ProjectsPage extends Component {
  render() {
    let blogPosts = map(posts, post =>
      <BlogPost
        key={post.id}
        title={post.title}
        image={post.image}
        link={post.link} />
    );
    blogPosts.reverse();

    return (
      <div className='projects-page-layout'>
        <div className='projects-page-box-container'>
          <div className='projects-page-header'>
            {'projects'}
          </div>
          <div className='projects-page-body'>
            {'Web Programming/Design'}
            <br />
            {'Microservices/Servers'}
            <br />
            {'Internet of Things'}
            <br />
            {'Tutorials/Guides'}
          </div>
        </div>
        <div className='project-blog-posts-container'>
          { blogPosts }
        </div>
      </div>
    )
  }
}

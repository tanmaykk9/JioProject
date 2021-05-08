import React from 'react';
import blogpic from '../../assets/images/cards/1011.png';
import blogpicture from '../../assets/images/cards/1012.png';

const BlogPosts = ({blogObj}) => {
  return (
    <section className="blog-posts container">
      <h3>Develop for the next Billion internet users</h3>
      <div className="card-container">
        <div className="card-img">
          <img src={blogpic} className="img blog-image" alt="Blog" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{blogObj.Header}</h4>
          <p className="card-text">{blogObj.Para1}</p>
          <span><a href="#!" role="button" tabIndex={0} className="blog-link">Start developing</a></span>
        </div>
      </div>

      <div className="card-container">
        <div className="card-img">
          <img src={blogpicture} className="img blog-image" alt="Blog" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{blogObj.Header1}</h4>
          <p className="testimonial-text">"{blogObj.testimonial}"<br /><span className="author-name">- {blogObj.author}</span></p>
          <p className="card-text">{blogObj.blogPara2}</p>
          <span><a href="#!" role="button" tabIndex={0} className="blog-link">Sign up now</a></span>
        </div>
      </div>
    </section>
  )
}

export default BlogPosts;
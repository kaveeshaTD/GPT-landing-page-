import React from 'react'
import './blog.css'
import Artcle from '../../components/artcle/Artcle';
import {blog1, blog2, blog3, blog4, blog5 } from './import';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening,<br /> We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
        <img src={blog1} alt="blog image" />
        <div className="gpt3__blog-mydiv">
        <h6>Sep 26, 2021</h6>
        <p>GPT-3 and Open  AI is <br /> the future. Let us exlore how it <br /> is?</p>
        <h5>Read Full Article</h5>
        </div>
        </div>
        <div className="gpt3__blog-container_groupB">
        <img src={blog2} alt="blog image" />
        <img src={blog3} alt="blog image" />
        <img src={blog4} alt="blog image" />
        <img src={blog5} alt="blog image" />
        </div>
      </div>
    </div>
  )
}

export default Blog

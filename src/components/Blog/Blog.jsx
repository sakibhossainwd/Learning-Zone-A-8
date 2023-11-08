// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <img src="../../../images/1.jpg" alt="" />
            <div className="user-time">
                <div className="user">
                    <div className="user-img">
                        <img src="../../../images/boy1.png" alt="" />
                    </div>
                    <div className="user-name">
                        <h3>Mr.Raju</h3>
                        <p>Mar 14 - 4 Day ago</p>
                    </div>
                </div>
                <div className="read-time">
                    <p>05 min read</p>
                </div>
            </div>
            <div className="blog-heading">
                <h2>How to get your first job as a self-taught programmer</h2>
            </div>
            <div className="blog-tags">
                <p>#beginners #programming </p>
            </div>
            <div className="mark-read">
                <a href="#">Mark as read</a>
            </div>
        </div>
    );
};

export default Blog;
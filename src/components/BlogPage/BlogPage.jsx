// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Blogpage.css'
import Blog from '../Blog/Blog';

const BlogPage = () => {
    return (
        <div className='blog-page'>
            {
                <Blog></Blog>
            }
        </div>
    );
};

export default BlogPage;
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Blogpage.css'
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';


const BlogPage = () => {
    return (
        <div className='blog-page'>
            
                <Blog></Blog>
                
            <BookMark></BookMark>
        </div>
    );
};

export default BlogPage;
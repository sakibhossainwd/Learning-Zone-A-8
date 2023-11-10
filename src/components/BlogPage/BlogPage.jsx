// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Blogpage.css'
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';


const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    // cosnt [minutes, setMinutes] = useState(0);

    useEffect ( () => {
        fetch('../../../fakeData/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    })
    // console.log(blogs)

    // const readTimeHadler = () => {

    // }
   
    return (
        <div className='blog-page'>
            <div className="blogs-container">
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    ></Blog>  )
                }
            </div>
            
            <BookMark></BookMark>
        </div>
    );
};

export default BlogPage;
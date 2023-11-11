// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Blogpage.css'
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';


const BlogPage = () => {
    // This state for get data from json file
    const [blogs, setBlogs] = useState([]);
    // This state for get clicked read Time
    const [readTimes, setreadTimes] = useState([]);
    // Thos state for get clicked data
    const [bookedBlogs, setBookedBlogs] = useState([])

    useEffect ( () => {
        fetch('../../../fakeData/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    // console.log(blogs)

    return (
        <div className='blog-page'>
            <div className="blogs-container">
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    readTimes={readTimes}
                    setreadTimes={setreadTimes}
                    bookedBlogs={bookedBlogs}
                    setBookedBlogs={setBookedBlogs}
                    ></Blog> )
                }
            </div>
            
            <BookMark readTimes={readTimes} setreadTimes={setreadTimes} bookedBlogs={bookedBlogs} setBookedBlogs={setBookedBlogs}></BookMark>
        </div>
    );
};

export default BlogPage;
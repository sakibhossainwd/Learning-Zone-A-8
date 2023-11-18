// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css'
import { toast } from 'react-toastify';

const Blog = ({blog, readTimes, setreadTimes, bookedBlogs, setBookedBlogs}) => {
    // console.log(props.blog.cover)
    // const blog = props.blog
    const {cover, BlogName, userImg, userName, publishDate, readTime, hashTag} = blog;
    
    const markReadTime = (readTime) => {
        const isExist = readTimes.find(item => item.id === readTime.id);
        if(isExist){
            return  toast.error('The read time already exist!', {autoClose:2000});
        }

        const totalRealTime = [...readTimes, readTime];
        setreadTimes(totalRealTime);
        toast.success("Readt added successful", {
            autoClose:1000,
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
    
    const addbookMark = (bookMark) => {
        const isExist = bookedBlogs.find(item => item.id === bookMark.id);
        if(isExist){
            return  toast.error('The blog already exist!', {autoClose:2000});
        }

        const totalBookMark = [...bookedBlogs, bookMark];
        setBookedBlogs(totalBookMark)
        toast.success("Selected successful", {
            autoClose:1000,
            position: toast.POSITION.BOTTOM_RIGHT
        })
        
    }


    return (
        <div className='blog-container'>
            <img src={cover} alt="" />
            <div className="user-time">
                <div className="user">
                    <div className="user-img">
                        <img src={userImg} alt="" />
                    </div>
                    <div className="user-name">
                        <h3>{userName}</h3>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <div className="read-time">
                    <p>{readTime} min read</p>
                    <a href="#" className='bookMark' onClick={ () => addbookMark(blog)}>< FontAwesomeIcon icon={faBookmark} />
                    </a>
                </div>
            </div>
            <div className="blog-heading">
                <h2>{BlogName}</h2>
            </div>
            <div className="blog-tags">
                <p>{hashTag}</p>
            </div>
            <div className="mark-read">
                <a href="#" onClick={ () => markReadTime(blog)}>Mark as read</a>
            </div>
        </div>
    );
};

export default Blog;
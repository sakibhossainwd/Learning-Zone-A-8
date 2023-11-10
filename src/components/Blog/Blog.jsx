// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css'

const Blog = ({blog, }) => {
    // console.log(props.blog.cover)
    // const blog = props.blog
    const {id, cover, BlogName, userImg, userName, publishDate, readTime, hashTag} = blog;
    
    const markReadTime = () => {
        console.log('mark as read clicked')
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
                    <a href="" className='bookMark'>< FontAwesomeIcon icon={faBookmark} />
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
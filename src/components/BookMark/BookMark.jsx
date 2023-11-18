// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookMark.css'
import BookedBookMark from '../BookedBookMark/BookedBookMark';


const BookMark = ({readTimes, bookedBlogs, setBookedBlogs}) => {
    // console.log(readTimes)
    // console.log(bookedBlogs)
    const totalRealTime = readTimes.reduce((total, curr) => total + curr.readTime, 0)
    
    return (
        <div className='side-container'>
            <div className="spent-time">
                <h3>Spent time on read : {totalRealTime} min</h3>
            </div>
            <div className="bookMark-container">
                <h3>Bookmarked Blogs : {bookedBlogs.length}</h3>
            {
                bookedBlogs.map( bookedItem => <BookedBookMark key={bookedItem.id} bookedItem={bookedItem} bookedBlogs={bookedBlogs} setBookedBlogs={setBookedBlogs}></BookedBookMark>)
            }
            </div>
            
        </div>
    );
};

export default BookMark;
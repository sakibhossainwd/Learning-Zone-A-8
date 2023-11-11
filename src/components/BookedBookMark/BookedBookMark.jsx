// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookedBookMark.css'

const BookedBookMark = ({bookedItem}) => {
    console.log(bookedItem)
    return (
        <div>
            <div className="bookMark">
                <h5>{bookedItem.BlogName}</h5>
            </div>
        </div>
    );
};

export default BookedBookMark;
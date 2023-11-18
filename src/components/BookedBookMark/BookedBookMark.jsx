// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookedBookMark.css'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const BookedBookMark = ({ bookedItem }) => {
    console.log(bookedItem)
    return (
        <div>
            <div className="bookMark">
                <h5>{bookedItem.BlogName}</h5>
                <FontAwesomeIcon icon={faTrash} className='trash-icon' />
            </div>
        </div>
    );
};

export default BookedBookMark;
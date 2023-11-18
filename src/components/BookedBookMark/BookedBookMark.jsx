// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookedBookMark.css'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'


const BookedBookMark = ({ bookedItem, bookedBlogs, setBookedBlogs }) => {
    // console.log(bookedItem)
    console.log(bookedBlogs)
    const handleRemove = (id) => {
        console.log('trash icon clicked', id);
        // const swalWithBootstrapButtons = Swal.mixin({
        //     customClass: {
        //         confirmButton: "btn btn-success",
        //         cancelButton: "btn btn-danger"
        //     },
        //     buttonsStyling: false
        // });
        // swalWithBootstrapButtons.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonText: "Yes, delete it!",
        //     cancelButtonText: "No, cancel!",
        //     reverseButtons: true
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         const remainingItems = bookedBlogs.filter(item => item.id !== id)
        //         setBookedBlogs(remainingItems)
        //         swalWithBootstrapButtons.fire({
        //             title: "Deleted!",
        //             text: "Your file has been deleted.",
        //             icon: "success"
        //         });
        //     } else if (
        //         /* Read more about handling dismissals below */
        //         result.dismiss === Swal.DismissReason.cancel
        //     ) {
        //         swalWithBootstrapButtons.fire({
        //             title: "Cancelled",
        //             text: "Your imaginary file is safe :)",
        //             icon: "error"
        //         });
        //     }
        // });

        // Another one
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const remainingItems = bookedBlogs.filter(item => item.id !== id)
                setBookedBlogs(remainingItems)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
        // const remainingItems = bookedBlogs.filter(item => item.id !== id)
        // setBookedBlogs(remainingItems)
    }
    return (
        <div>
            <div className="bookMark">
                <h5>{bookedItem.BlogName}</h5>
                <button className='trash-icon' onClick={() => handleRemove(bookedItem.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default BookedBookMark;
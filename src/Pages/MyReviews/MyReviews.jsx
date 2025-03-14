import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../context/AuthProvider';
import Swal from 'sweetalert2'; // Import Swal for alerts
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const MyReview = () => {
    const { user } = useContext(Authcontext);
    const [reviews, setReviews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);  // For controlling modal visibility
    const [selectedReview, setSelectedReview] = useState(null); // For storing the review being edited
    const [updatedReviewText, setUpdatedReviewText] = useState('');
    const [updatedRating, setUpdatedRating] = useState(0);

    useEffect(() => {
        // if (!user) return;
        // fetch(`https://server-side-cyan-beta.vercel.app/review?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setReviews(data));
        axios.get(`https://server-side-cyan-beta.vercel.app/review?email=${user.email}`, {withCredentials : true})
            .then(res => setReviews(res.data))

    }, [user]);

    const handleDelete = (_id) => {
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
                fetch(`https://server-side-cyan-beta.vercel.app/review/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        setReviews(reviews.filter(review => review._id !== _id)); // Remove from state
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your review has been deleted.",
                            icon: "success"
                        });
                    });
            }
        });
    };

    const handleEdit = (review) => {
        setSelectedReview(review);  // Store the review being edited
        setUpdatedReviewText(review.review);
        setUpdatedRating(review.rating);
        setIsModalOpen(true);  // Open the modal
    };

    const handleUpdateReview = () => {
        if (!user) return;
        
        const updatedReview = {
            ...selectedReview,
            review: updatedReviewText,
            rating: updatedRating
        };

        fetch(`https://server-side-cyan-beta.vercel.app/review/${selectedReview._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedReview),
        })
        .then(res => res.json())
        .then(() => {
            // Update the review in the state
            setReviews(reviews.map(review => review._id === selectedReview._id ? updatedReview : review));
            setIsModalOpen(false); // Close the modal
            Swal.fire({
                title: "Updated!",
                text: "Your review has been updated.",
                icon: "success"
            });
        });
    };

    return (
        <div className="container mx-auto p-4">
            <Helmet><title>My Reviews</title></Helmet>
            <h2 className="text-3xl font-bold text-center mb-6">My Reviews</h2>

            {/* If no reviews are found */}
            {reviews.length === 0 ? (
                <p className="text-center text-lg">You haven't submitted any reviews yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Map through the reviews and display each one in a card */}
                    {reviews.map((review) => (
                        <div key={review._id} className="card w-full bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h1 className='font-bold text-3xl'>{review.serviceTitle}</h1>
                                <h3 className="card-title text-xl font-semibold">{review.title}</h3>
                                <p className="text-gray-600">{review.review}</p>
                                <div className="flex items-center">
                                    <span className="font-bold">Rating:</span>
                                    <span className="ml-2 text-yellow-500">{'★'.repeat(review.rating)}</span> {/* Simple star representation */}
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleEdit(review)} className="btn btn-primary btn-sm">Edit</button>
                                    <button onClick={() => handleDelete(review._id)} className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal for editing review */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="text-xl font-semibold mb-4">Edit Review</h2>
                        <textarea
                            value={updatedReviewText}
                            onChange={(e) => setUpdatedReviewText(e.target.value)}
                            className="textarea textarea-bordered w-full mb-4"
                            placeholder="Update your review"
                        />
                        <div className="rating mb-4">
                            {[1, 2, 3, 4, 5].map(star => (
                                <input
                                    key={star}
                                    type="radio"
                                    name="rating"
                                    className={`mask mask-star-2 bg-orange-400 ${updatedRating >= star ? 'checked' : ''}`}
                                    onClick={() => setUpdatedRating(star)} // Set the updated rating
                                />
                            ))}
                        </div>
                        <div className="modal-action">
                            <button onClick={handleUpdateReview} className="btn btn-primary">Update</button>
                            <button onClick={() => setIsModalOpen(false)} className="btn">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyReview;
import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../context/AuthProvider';

const MyReview = () => {
    const { user } = useContext(Authcontext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!user) {
            return
        }
        fetch(`http://localhost:5000/review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container mx-auto p-4">
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
                                <h3 className="card-title text-xl font-semibold">{review.title}</h3>
                                <p className="text-gray-600">{review.review}</p>
                                <div className="flex items-center">
                                    <span className="font-bold">Rating:</span>
                                    <span className="ml-2 text-yellow-500">{'★'.repeat(review.rating)}</span> {/* Simple star representation */}
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                    <button className="btn btn-primary btn-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyReview;
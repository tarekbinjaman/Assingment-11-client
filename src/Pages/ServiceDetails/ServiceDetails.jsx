import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../context/AuthProvider';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, category, companyName, date, description, price, serviceImage, title, userEmail, website } = service;
    const { user } = useContext(Authcontext);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(serv => setReviews(serv))
    }, [])
    
    const handleAddReview = () => {
        if (!user) {
            alert('You must login first to add review')
            return;
        }
        const newReview = {
            jobId: _id,
            email: user.email,
            review: reviewText,
            rating: rating,
            date: new Date().toDateString(),
        };


        // setReviews((prevReview) => [...prevReview, newReview]);

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
            .then(res => res.json())
            .then(dat => console.log(dat))
        setReviewText('');
    }
    return (
        <div>
            <h2>Title: {title}</h2>
            <p>{description}</p>
            <h2>jobId: {_id}</h2>
            <div>
                <h3>Add a Review</h3>
                <textarea
                    placeholder="write your review here..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="textarea textarea-bordered textarea-xs w-full max-w-xs"></textarea>
                {/* Star rating input */}
                <div className="rating">
                    {[1, 2, 3, 4, 5].map(star => (
                        <input
                            key={star}
                            type="radio"
                            name="rating"
                            className={`mask mask-star-2 bg-orange-400 ${rating >= star ? 'checked' : ''}`}
                            onClick={() => setRating(star)} // Set the rating when a star is clicked
                        />
                    ))}
                </div>
                <button onClick={handleAddReview}>Add review</button>

            </div>
            {/* reviews area */}
            <div>
                <h2>Reviews</h2>
                {reviews.length > 0 ? (
                    reviews.filter(review => review.jobId === _id).map((review, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
                            <p><strong>Email:</strong> {review.email}</p>
                            <p><strong>Job ID:</strong> {review.jobId}</p>
                            <p><strong>Date:</strong> {new Date(review.date).toLocaleString()}</p>
                            <p>{review.review}</p>
                            <p>Review:{review.rating}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet. Be the first to leave a review!</p>
                )}
            </div>
        </div>
    );
};

export default ServiceDetails;
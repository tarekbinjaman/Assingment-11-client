import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../context/AuthProvider';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, category, companyName, date, description, price, serviceImage, title, userEmail, website } = service;
    const { user } = useContext(Authcontext);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
   
    useEffect(() => {
        fetch('https://server-side-cyan-beta.vercel.app/review', 
            {
                credentials: 'include'
            }
        )
        .then(res => res.json())
        .then(serv => {
            setReviews(serv)
            console.log('reviews', reviews.length)
        })
    }, [reviews.length])
    
    const handleAddReview = () => {
        if (!user) {
            alert('You must login first to add review')
            return;
        }
        const newReview = {
            jobId: _id,
            serviceTitle: title,
            email: user.email,
            review: reviewText,
            rating: rating,
            date: new Date().toDateString(),
        };


        // setReviews((prevReview) => [...prevReview, newReview]);

        fetch('https://server-side-cyan-beta.vercel.app/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
            .then(res => res.json())
            .then(dat => {
                console.log(dat);
                fetch('https://server-side-cyan-beta.vercel.app/review')
                .then(res => res.json())
                .then(serv => setReviews(serv))
            })
        setReviewText('');
    }
    return (
        <div className='p-10'>
            <Helmet>Service Details</Helmet>
            <div className='flex flex-col'>
            <div>
                <img src={serviceImage} className='w-[550px] h-[250px] object-top' alt="" />
            <h2><strong> Title:</strong> {title}</h2>
            <p><strong>Description:</strong> {description}</p>
            <h3><strong>Price:</strong> {price}$</h3>
            </div>
            <div>
                <h3>Add a Review</h3>
                <textarea
                    placeholder="write your review here..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="textarea textarea-bordered textarea-xs w-full max-w-xs"></textarea>
                {/* Star rating input */}
                <div className=''>

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
                <button className='bg-gray-400 text-gray-950 hover:bg-gray-600 hover:text-white px-4 py-1 ml-4 rounded-2xl' onClick={handleAddReview}>Add review</button>
                </div>

            </div>

            </div>

            {/* reviews area */}
            <div>
                <h2>Reviews:</h2>
                {reviews.length > 0 ? (
                    reviews.filter(review => review.jobId === _id).map((review, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
                            <p><strong>Email:</strong> {review.email}</p>
                            <p><strong>Date:</strong> {new Date(review.date).toLocaleString()}</p>
                            <p>{review.review}</p>
                            <p> <strong>Review:</strong> {review.review}</p>
                            <p> <strong>Rating:</strong> {review.rating}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet. Be the first to leave a review!</p>
                )}
                {console.log(reviews.length)}
            </div>
        </div>
    );
};

export default ServiceDetails;
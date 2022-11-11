import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const AllReviews = () => {
    const allReviews = useLoaderData();
    const [allReview, setAllReview] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:5000/allreviews?service=${allReviews?.service}`)
        .then(res=> res.json())
        .then(data => {
            setAllReview(data)
        
        })
    },[allReviews?.service])

    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
                allReview.map(review=> <Review key={review._id} review={review}></Review>)
            }
        </div>
        </div>
    );
};

export default AllReviews;
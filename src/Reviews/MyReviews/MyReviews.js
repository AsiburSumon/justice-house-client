import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = id => {
    const procced = window.confirm('Are you sure?')
    if(procced){
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount > 0){
                alert('Deleted');
                const remaining = reviews.filter(review => review._id !== id);
                setReviews(remaining)
            }
        })
    }

}

  return (
    <div className="mx-10 my-20">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                Delete
              </th>
              <th>Service Name</th>
              <th>Review</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
                reviews.map(perReview => <ReviewRow key={perReview._id} perReview={perReview} handleDelete={handleDelete}></ReviewRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;

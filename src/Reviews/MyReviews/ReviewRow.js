import React, { useEffect, useState } from "react";

const ReviewRow = ({perReview, handleDelete}) => {
    const{review, name, service, _id} = perReview;
    const [reviewService, setReviewService] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews/${service}`)
        .then(res=> res.json())
        .then(data => setReviewService(data));
    }, [service])


  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost text-red-600 font-bold">
            X
          </button>
        </label>
      </th>
      <td>
          {name}
      </td>
      <td>{review}</td>
      <th>
        {/* <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button> */}
      </th>
    </tr>
  );
};

export default ReviewRow;

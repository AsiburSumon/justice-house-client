import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ReviewRow = ({ perReview, handleDelete }) => {
  const { review, name, service, _id } = perReview;
  const [reviewService, setReviewService] = useState({});

  useEffect(() => {
    fetch(`https://assignment-11-server-blond.vercel.app/reviews/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [service]);

  const handleUpdate = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const updateReview = form.updateReview.value;
    const newReview = {
      review: updateReview
    }
    fetch(`https://assignment-11-server-blond.vercel.app/reviews/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data)
    })
  }

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost text-red-600 font-bold text-xl"
          >
            <FaTrash></FaTrash>
          </button>
        </label>
      </th>
      <td>{name}</td>
      <td>{review}</td>
      <th>
        <label htmlFor={`my-modal-${_id}`} className="btn flex text-green-600">
            Edit
            <FaEdit className="ml-2 mt-1"></FaEdit>
        </label>

        <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
        <label htmlFor={`my-modal-${_id}`} className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <form onSubmit={()=>handleUpdate(_id)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Update your review for {_id}</span>
                </label>
                <textarea
                  className="pt-5 bg-gray-200"
                  name="updateReview"
                  cols="10"
                  rows="5"
                  placeholder="Type new review"
                ></textarea>
              </div>
              <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
              </div>
            </form>
          </label>
        </label>
      </th>
    </tr>
  );
};

export default ReviewRow;

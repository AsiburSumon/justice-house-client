import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewRow = ({ perReview, handleDelete }) => {
  const { review, name, service, _id } = perReview;
  const [reviewService, setReviewService] = useState({});

  useEffect(() => {
    fetch(`https://assignment-11-server-blond.vercel.app/reviews/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [service]);

  const handleEdit = () => {};

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
        <a href="#my-modal-2">
          <button onClick={handleEdit} className="flex text-green-600">
            Edit
            <FaEdit className="ml-2 mt-1"></FaEdit>
          </button>
        </a>
        <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <form>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Update your review</span>
              </label>
              <textarea className="pt-5 bg-gray-200" name="details" 
              cols="10" rows="5" placeholder="Type new review"></textarea>
              </div>
              <div className="form-control mt-6">
                <a href="#"><button type="submit" className="btn btn-primary">Submit</button></a>
              </div>
            </form>
          </div>
        </div>
      </th>
    </tr>
  );
};

export default ReviewRow;

import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FaUser } from "react-icons/fa";

const Review = ({ review }) => {
    const {user} = useContext(AuthContext);
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-2">
          <h2 className="card-title">{review.reviewer}</h2>
          <div className="avatar">
            <div className="w-15 rounded-full">
                {user?.photoURl?(
                    <>
                        <img src={user.photoURL} alt='no img' />
                    </>
                )
                :
                (
                   <>
                    <FaUser className="bg-gray-300 text-2xl"></FaUser>
                    </>
                )
                }
                
            </div>
          </div>
          </div>
          <p>{review.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;

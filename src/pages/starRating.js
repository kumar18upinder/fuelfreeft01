import React, { useState,useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';


const StarRating = ({ totalStars }) => {
  let id = useParams()
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };
  const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : NaN;
const uid = user._id;

const defaultValues = {
  rating: "",
  review: "",
};

const validationSchema = yup.object().shape({
  rating: yup.string().required("Rating is required"),
  review: yup.string().required("Review is required"),
});

const handleSubmit = async (values) => {
  try {
    let res = await axios.post(
      `https://app.fuelfree.in/review/create/${uid}/${id}`,
      values,
      {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const result = await res.data;
  } catch (error) {
    alert(error);
  }
};

/////// ============Review List============= //////
const [review, setReview] = useState({});
let reviewList = review.reviewList;

async function getReviewList() {
  let response = await axios.get(
    `https://app.fuelfree.in/review/productReviewList/${id}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  let reviewListData = await response.data;
  setReview(reviewListData);
}

useEffect(() => {
  getReviewList();
}, []);

const renderRatingStars = (rating) => {
  const filledStars = Math.floor(rating);
  const remainingStars = 5 - filledStars;

  return (
    <>
      {[...Array(filledStars)].map((_, index) => (
        <FaStar style={{ color: "gold" }} key={index} />
      ))}
      {[...Array(remainingStars)].map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </>
  );
};

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={starValue <= rating ? 'star selected' : 'star'}
            onClick={() => handleStarClick(starValue)}
          >
            &#9733;
            <input type='checkbox' value={index} />
          </span>
        );
      })}
      <div className="tanker">
        <div className="p-details-des p-bg my-5 ps-3 py-4">
          <div className="row pt-3 px-2">
            <div className="col-md-3 pr-border">
              <h6 className="p-des">Add Review</h6>

              <Formik
                initialValues={defaultValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div>
                    <h1>Star Rating</h1>
                    <StarRating
                      totalStars={5}
                      onRatingChange={handleRatingChange}
                    />
                    <p>Selected rating: {selectedRating}</p>
                  </div>
                  <Field
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="rating" />
                  </p>

                  <Field
                    type="text"
                    name="review"
                    placeholder="Review"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="review" />
                  </p>
                  <button
                    type="submit"
                    className="btn btn-primary userlogin-btn mt-3"
                  >
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>

            <div className="col-md-9">
              <h4 className="p-desc-weight">Reviews</h4>
              {reviewList && reviewList.length > 0 ? (
                reviewList.map((data) => (
                  <>
                    <h6>{data.review}</h6>
                    <div>{renderRatingStars(data.rating)}</div>
                    <hr />
                  </>
                ))
              ) : (
                <p>0 Review</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarRating;

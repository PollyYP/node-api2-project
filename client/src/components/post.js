import React from "react";
//import { useHistory } from "react-router-dom";
//import axios from "axios";

const Post = () => {
  //   const deletePlant = () => {
  //     axiosWithAuth()
  //       .delete(`/plants/${plant.plant_id}`)
  //       .then((res) => {
  //         console.log(res);
  //         const result = [
  //           ...plantList.filter(
  //             (item) => `${item.plant_id}` !== res.data.plant_id
  //           ),
  //         ];
  //         setPlantList(result);
  //         console.log(result);
  //         console.log(res.data.plant_id);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="d-flex flex-column comment-section">
            <div className="bg-white p-2">
              <div className="d-flex flex-row user-info">
                <img
                  className="rounded-circle"
                  src="https://i.imgur.com/RpzrMR2.jpg"
                  style={{ width: "40" }}
                  alt="avatar"
                />
                <div className="d-flex flex-column justify-content-start ml-2">
                  <span className="d-block font-weight-bold name">
                    Marry Andrews
                  </span>
                  <span className="date text-black-50">
                    Shared publicly - Jan 2020
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <p className="comment-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="bg-white">
              <div className="d-flex flex-row fs-12">
                <div className="like p-2 cursor">
                  <i className="fa fa-thumbs-o-up"></i>
                  <span className="ml-1">Like</span>
                </div>
                <div className="like p-2 cursor">
                  <i className="fa fa-commenting-o"></i>
                  <span className="ml-1">Comment</span>
                </div>
                <div className="like p-2 cursor">
                  <i className="fa fa-share"></i>
                  <span className="ml-1">Share</span>
                </div>
              </div>
            </div>
            <div className="bg-light p-2">
              <div className="d-flex flex-row align-items-start">
                <img
                  className="rounded-circle"
                  src="https://i.imgur.com/RpzrMR2.jpg"
                  style={{ width: "40" }}
                  alt="avatar"
                />
                <textarea className="form-control ml-1 shadow-none textarea"></textarea>
              </div>
              <div className="mt-2 text-right">
                <button
                  className="btn btn-primary btn-sm shadow-none"
                  type="button"
                >
                  Post comment
                </button>
                <button
                  className="btn btn-outline-primary btn-sm ml-1 shadow-none"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

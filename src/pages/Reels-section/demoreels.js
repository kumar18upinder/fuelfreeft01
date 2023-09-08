import "./reels.css";
import axios from "axios";
import Header from "../../components/header";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import agenc from "../../../src/images/tata.png";
import sound from "../../../src/images/sound.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import soundunmute from "../../../src/images/sound-unmute.png";

function VideoPlayer({ src, description, reelLikes, reelId }) {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoVisibility = (entries) => {
    const [entry] = entries;
    setIsPlaying(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleVideoVisibility, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Like section
  const [like, setLike] = useState(false);
  const [execute, setExecute] = useState(false);
  const [likeId, setLikeId] = useState();

  const handleLike = () => {
    setLike(!like);
    setExecute(true);
    setLikeId(reelId);
  };

  const addLike = async (isLiked, id) => {
    setLike(!like);
    const reeLikes = {
      reeLikes: isLiked ? reelLikes + 1 : reelLikes - 1,
    };
    let res = await axios.patch(
      `https://app.fuelfree.in/reels/like/${id}`,
      reeLikes,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    let data = await res.data;
  };

  useEffect(() => {
    if (execute) {
      addLike(like, likeId);
    }
    setExecute(false);
  }, [like]);

  // Add comment
  const goLogin = () => {
    navigate("/login");
  };

  let userInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  let userId = userInfo ? userInfo._id : "";

  const [comments, setComments] = useState("");

  const addComment = async (reelId) => {
    let userID = userId ? userId : goLogin();
    const comment = {
      reelComment: comments,
    };
    let res = await axios.post(
      `https://app.fuelfree.in/comment/comment/${reelId}/${userID}`,
      comment,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    let result = await res.data;
  };

  // ReelList
  const [commentType, setCommentType] = useState("");

  const getReelCommentList = async (reelId) => {
    let res = await axios.get(
      `https://app.fuelfree.in/reels/commentList/${reelId}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let allList = await res.data;
    let comment = await allList.comments;
    setCommentType(comment);
  };

  return (
    <div className="reels-content">
      <div className="reels-top">
        <div className="reels-top-heading">
          <img src={agenc} alt="reel icon" />
          <p>Ola test drive</p>
        </div>
        <Link>Visit store</Link>
      </div>
      <video ref={videoRef} src={src} muted={isMuted} autoPlay={isPlaying} />
      <button className="mute-unmute" onClick={toggleSound}>
        {isMuted ? (
          <img src={soundunmute} alt="unmuted" />
        ) : (
          <img src={sound} alt="muted" />
        )}
      </button>
      <div className="reels-action">
        <span className="like">
          {like ? (
            <p onClick={() => handleLike()}>
              <AiFillHeart />
            </p>
          ) : (
            <p onClick={() => handleLike()}>
              <AiOutlineHeart />
            </p>
          )}
        </span>

        <button
          className="soundmute-un"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <FaRegComment onClick={() => getReelCommentList(reelId)} />
        </button>
        <p>1.6KLikes</p>
        <p>{description}</p>
      </div>

      <div
        className="modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Comments
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="rels-commets-outer">
              {commentType &&
                commentType.map((data) => (
                  <div className="rels-comments">
                    <FaUserCircle />
                    <div className="comnrt-content">
                      {data.userID ? <p>{data.userID.userName}</p> : ""}
                      <p>{data.reelComment}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="comment-input">
              <FaUserCircle />
              <input
                placeholder="Comment Here"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></input>
              <button onClick={() => addComment(reelId)}>Add comment</button>{" "}
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reels() {
  const [videos, setVideos] = useState([]);

  const getReels = async () => {
    let res = await axios.get(`https://app.fuelfree.in/reels/list`, {
      headers: {
        Accept: "application/json",
      },
    });
    let result = await res.data;
    let allVideos = result.blogData;
    setVideos(allVideos);
  };

  useEffect(() => {
    getReels();
  }, []);

  return (
    <>
      <section id="reels">
        <Header />
        <div className="tanker">
          <section id="reels-section">
            <div className="reels-section-outer">
              <div className="venders-list" style={{ display: "none" }}></div>
              <div className="Reels-div">
                <div className="Reels-header">
                  <h1>Fuelfree Reels</h1>
                </div>
                <div className="reels-div">
                  <div className="reels-div-left">
                    <h3>Recent Stories</h3>
                    <div className="recent-post">
                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories" />
                        </Link>
                      </div>

                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories" />
                        </Link>
                      </div>

                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories" />
                        </Link>
                      </div>

                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories" />
                        </Link>
                      </div>

                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories" />
                        </Link>
                      </div>

                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="reels-right">
                    {videos &&
                      videos.map((data) => (
                        <div key={data._id}>
                          <VideoPlayer
                            src={`https://app.fuelfree.in/${data.video}`}
                            description={data.description}
                            reelLikes={data.reelLikes}
                            reelId={data._id}
                            muted
                            autoPlay
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default Reels;

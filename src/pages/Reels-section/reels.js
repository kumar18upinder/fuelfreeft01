import './reels.css' 
import { Link, useNavigate } from "react-router-dom";
// import logo from "../pages/images/logo.png";
import logo from '../../pages/images/logo.jpeg'
import agenc from "../../../src/images/tata.png";
import Header from "../../components/header";
import { FaRegComment } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import soundunmute from "../../../src/images/sound-unmute.png";
import sound from "../../../src/images/sound.png";
import axios from "axios";

function VideoPlayer({ src, description, reelLikes,reelId }) {
  const navigate=useNavigate()
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = videoRef.current.muted;
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
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  //Like section
  const [like, setlike] = useState(false);
  const [execute, setExecute] = useState();
  const [likeid,setlikeid]=useState()
  const likesfunction = () => {
    setlike(!like);
    setExecute(true);
    setlikeid(reelId)
  };

        const addLike=async(value,id)=>{
          console.log(value,id,'data')
            setlike(!like)
            const reeLikes={
              reeLikes:value
            }
          let res=await axios.patch(`https://app.fuelfree.in/reels/like/${id}`,reeLikes,{
            headers:{
              "Content-type":"application/json"
            }
          })
          let data=await res.data
          console.log(data,'res like')
        }

  const   likes= like;
  const ReelsID= likeid;
 
  useEffect(() => {
    if (execute) {
        addLike()
    }
    setExecute(false);
  }, [like]);

  //add comment
   const gologin=()=>{
    navigate('/login')
   }
  let userInfo=localStorage.getItem('user')?( JSON.parse(localStorage.getItem('user'))):''
  let userid= userInfo?(userInfo._id):''    
  const [commentId,setcommentId]=useState()
  const [comments,setComment]=useState('')

  
  const addcomment =async(IDD)=>{
    let userID=userid ?(userid):gologin()
       const comment={
        reelComment:comments
       }
      let res=await axios.post(`https://app.fuelfree.in/comment/comment/${IDD}/${userID}`,comment,{
         headers:{
          "Content-type":"application/json"
        }
      })
      let result= await res.data
  }
 
//ReelList

const [commentType,setCommentType]=useState('')

const getReelcommentList=async(IIDD)=>{
      let res=await axios.get(`https://app.fuelfree.in/reels/commentList/${IIDD}`,{
        headers:{
          "Accept":"application/json"
        }
      })
      let allList=await res.data
      let comment=await allList.comments
      setCommentType(comment)
      console.log(allList ,'list heee')
}


 
  return (
    <div className="reels-content">
      <div className="reels-top">
        <div className="reels-top-heading">
          <img src={logo} alt="reel icon"></img>
          <p></p>
        </div>
        {/* <Link>Visit store</Link> */}
      </div>
      <video ref={videoRef} src={src} muted={isMuted} autoPlay={isPlaying} />
      <button className="mute-unmute" onClick={toggleSound}>
        {isMuted ? (
          <img src={soundunmute} alt="unmuted" />
        ) : (
          <img src={sound} alt="unmuted" />
        )}
      </button>
      <div className="reels-action">
        <span className="like">
          {like===true ? (
            <p onClick={()=>addLike(false,reelId)}>{<AiFillHeart />}</p>
          ) : (
            <p onClick={()=>addLike(true,reelId)}>{<AiOutlineHeart />}</p>
          )}
        </span>
        
        <button
          className="soundmute-un"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
        <FaRegComment  onClick={()=>getReelcommentList(reelId)} />
        </button>
        {/* <p>{reelLikes}Likes</p> */}
        <div class="reel-delks">
        <p>1.6KLikes</p>
        <p>{description}</p>
        </div>
      </div>

      <div
        class="modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Comments
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="rels-commets-outer">
              {/* ======================================== */}
              {commentType&&commentType.map(data=>(
                    <div className="rels-comments">
                {/* {data.userID?(<img src={`https://app.fuelfree.in/${data.userID.profilePic}`} alt="comment-user"></img>):''}     */}
                <FaUserCircle/>
                    <div className="comnrt-content">
                  {data.userID?(<p>{data.userID.userName}</p>):''}    
                      <p>{data.reelComment}</p>
                    </div>
                  </div>
              ))}
              
              {/* ================================================= */}
             
            </div>
            <div className="comment-input">
            <FaUserCircle/>
              <input Placeholder="Comment Here" value={comments} onChange={(e)=>setComment(e.target.value)} ></input>
              <button onClick={()=>addcomment(reelId)} >Add comment</button>  <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reels() {
  const [video, setvideos] = useState("");
  console.warn(video, "data");
  const getReels = async () => {
    let res = await axios.get(`https://app.fuelfree.in/reels/list`, {
      headers: {
        Accept: "application/json",
      },
    });
    let result = await res.data;
    let allvideos = result.blogData;
    setvideos(allvideos);
  };

  useEffect(() => {
    getReels();
  }, []);

  return (
    <>
      <section id="reels">
        <Header />
        <div className="mobile-tanker">
          <section id="reels-section">
            <div className="reels-section-outer">
              <div className="venders-list" style={{ display: "none" }}>
                <Link>
                  <img src={agenc} alt="agency-icon"></img>
                </Link>

                <Link>
                  <img src={agenc} alt="agency-icon"></img>
                </Link>

                <Link>
                  <img src={agenc} alt="agency-icon"></img>
                </Link>
              </div>
              <div className="Reels-div">
                <div className="Reels-header">
                  <h1>Fuelfree Reels</h1>
                  {/* <input placeholder="Search Reel"></input> */}
                  {/* <button>Add Reel</button> */}
                </div>
                <div className="reels-div">
                  <div className="reels-div-left">
                    <h3>Recent Stories</h3>
                    <div className="recent-post">
                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories"></img>
                        </Link>
                      </div>

                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories"></img>
                        </Link>
                      </div>

                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories"></img>
                        </Link>
                      </div>

                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories"></img>
                        </Link>
                      </div>

                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories"></img>
                        </Link>
                      </div>

                      <div className="recent-post-content">
                        <Link className="agency-list">
                          <img src={agenc} alt="stories"></img>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="reels-right">
                    {/* ============================================== */}

                    {video &&
                      video.map((data) => (
                        <div>
                          <VideoPlayer
                            key={data._id}
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

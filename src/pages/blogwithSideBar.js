import React from "react";
import "./BlogwithSideBar.css";
import { HiChevronLeft } from "react-icons/hi";
import { AiOutlineComment } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";
import { AiTwotoneEye } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import Header from "../components/header";
import Footer from "../components/footer";
const blogwithSideBar = () => {
  return (
    <>
      <Header />
      <div className="Full-blog-page">
        <div className="tanker">
          <div>
            <div className="Slide-img">
              <div className="Slide-img1">
                <img src="background-img.jpeg" alt="" />
              </div>
              <div className="Slide-img2">
                <img src="background-img.jpeg" alt="" />
              </div>
              <div className="Slide-img3">
                <img src="background-img.jpeg" alt="" />
              </div>
            </div>

            <div className="Header-blog">
              <div className="left-button-slide">
                <button>
                  <HiChevronLeft />
                </button>
              </div>
              <div className="header-title">
                <div className="headers-links">
                  <ul className="heaers-li">
                    <li>
                      <a href="/">News</a>
                    </li>
                    <li>
                      <a href="/">AUGUST 24TH,2019</a>
                    </li>
                    <li>
                      <a href="/">24 COMMENTS</a>
                    </li>
                  </ul>
                </div>
                <div className="mid-title">
                  <h2 className="title">
                    Toyota Cars 2019, The <br /> Change of Interior
                  </h2>
                  <p className="title-para">
                    Here’s a quick recap of the important aspects engineers
                    touched in the all-new 2019 Honda CRV Chevy started with a
                    larger and <br />
                    lighter frame using more...
                  </p>
                </div>
              </div>
              <div className="right-button-slide">
                <button>
                  <HiChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* mid-section-blog */}

          <div className="mid-full-page">
            <section className="mid-section-blog ">
              <div className="blog-list-container">
                <div className="blog-img">
                  <img src="Trending-car.jpg" alt="" />
                </div>
                <div className="blog-info">
                  <span className="News">
                    <a href="/">News</a> |<p>july 30,2022</p>
                  </span>
                  <span className="news-title">
                    <h5>
                      <a href="/">
                        Price list of Toyota Cars 2019, The Change of Interior &
                        Exterior
                      </a>
                    </h5>
                    <p>
                      If you want the widest powertrain choices or you need your
                      pickup to be safe and secure when towing...
                    </p>
                  </span>
                  <hr />
                  <span className="commnet-and-others">
                    <p className="blog-comment">
                      <AiOutlineComment /> 0 comments |
                    </p>
                    <p>
                      <AiTwotoneEye /> 83 Viewed |
                    </p>
                    <p className="blog-share">
                      <AiOutlineShareAlt /> Share
                    </p>
                  </span>
                  <p className="hr">
                    <hr />
                  </p>
                </div>
              </div>
              <div className="blog-list-container">
                <div className="blog-img">
                  <img src="Trending-car.jpg" alt="" />
                </div>
                <div className="blog-info">
                  <span className="News">
                    <a href="/">News</a> |<p>july 30,2022</p>
                  </span>
                  <span className="news-title">
                    <h5>
                      <a href="/">
                        Price list of Toyota Cars 2019, The Change of Interior &
                        Exterior
                      </a>
                    </h5>
                    <p>
                      If you want the widest powertrain choices or you need your
                      pickup to be safe and secure when towing...
                    </p>
                  </span>
                  <hr />
                  <span className="commnet-and-others">
                    <p className="blog-comment">
                      <AiOutlineComment /> 0 comments |
                    </p>
                    <p>
                      <AiTwotoneEye /> 83 Viewed |
                    </p>
                    <p className="blog-share">
                      <AiOutlineShareAlt /> Share
                    </p>
                  </span>
                  <p className="hr">
                    <hr />
                  </p>
                </div>
              </div>
              <div className="blog-list-container">
                <div className="blog-img">
                  <img src="Trending-car.jpg" alt="" />
                </div>
                <div className="blog-info">
                  <span className="News">
                    <a href="/">News</a> |<p>july 30,2022</p>
                  </span>
                  <span className="news-title">
                    <h5>
                      <a href="/">
                        Price list of Toyota Cars 2019, The Change of Interior &
                        Exterior
                      </a>
                    </h5>
                    <p>
                      If you want the widest powertrain choices or you need your
                      pickup to be safe and secure when towing...
                    </p>
                  </span>
                  <hr />
                  <span className="commnet-and-others">
                    <p className="blog-comment">
                      <AiOutlineComment /> 0 comments |
                    </p>
                    <p>
                      <AiTwotoneEye /> 83 Viewed |
                    </p>
                    <p className="blog-share">
                      <AiOutlineShareAlt /> Share
                    </p>
                  </span>
                  <p className="hr">
                    <hr />
                  </p>
                </div>
              </div>
              <div className="blog-list-container">
                <div className="blog-img">
                  <img src="Trending-car.jpg" alt="" />
                </div>
                <div className="blog-info">
                  <span className="News">
                    <a href="/">News</a> |<p>july 30,2022</p>
                  </span>
                  <span className="news-title">
                    <h5>
                      <a href="/">
                        Price list of Toyota Cars 2019, The Change of Interior &
                        Exterior
                      </a>
                    </h5>
                    <p>
                      If you want the widest powertrain choices or you need your
                      pickup to be safe and secure when towing...
                    </p>
                  </span>
                  <hr />
                  <span className="commnet-and-others">
                    <p className="blog-comment">
                      <AiOutlineComment /> 0 comments |
                    </p>
                    <p>
                      <AiTwotoneEye /> 83 Viewed |
                    </p>
                    <p className="blog-share">
                      <AiOutlineShareAlt /> Share
                    </p>
                  </span>
                  <p className="hr">
                    <hr />
                  </p>
                </div>
              </div>
              <div className="blog-list-container">
                <div className="blog-img">
                  <img src="Trending-car.jpg" alt="" />
                </div>
                <div className="blog-info">
                  <span className="News">
                    <a href="/">News</a> |<p>july 30,2022</p>
                  </span>
                  <span className="news-title">
                    <h5>
                      <a href="/">
                        Price list of Toyota Cars 2019, The Change of Interior &
                        Exterior
                      </a>
                    </h5>
                    <p>
                      If you want the widest powertrain choices or you need your
                      pickup to be safe and secure when towing...
                    </p>
                  </span>
                  <hr />
                  <span className="commnet-and-others">
                    <p className="blog-comment">
                      <AiOutlineComment /> 0 comments |
                    </p>
                    <p>
                      <AiTwotoneEye /> 83 Viewed |
                    </p>
                    <p className="blog-share">
                      <AiOutlineShareAlt /> Share
                    </p>
                  </span>
                  <p className="hr">
                    <hr />
                  </p>
                </div>
              </div>
              <div className="blog-list-container">
                <div className="blog-img">
                  <img src="Trending-car.jpg" alt="" />
                </div>
                <div className="blog-info">
                  <span className="News">
                    <a href="/">News</a> |<p>july 30,2022</p>
                  </span>
                  <span className="news-title">
                    <h5>
                      <a href="/">
                        Price list of Toyota Cars 2019, The Change of Interior &
                        Exterior
                      </a>
                    </h5>
                    <p>
                      If you want the widest powertrain choices or you need your
                      pickup to be safe and secure when towing...
                    </p>
                  </span>
                  <hr />
                  <span className="commnet-and-others">
                    <p className="blog-comment">
                      <AiOutlineComment /> 0 comments |
                    </p>
                    <p>
                      <AiTwotoneEye /> 83 Viewed |
                    </p>
                    <p className="blog-share">
                      <AiOutlineShareAlt /> Share
                    </p>
                  </span>
                  <p className="hr">
                    <hr />
                  </p>
                </div>
              </div>
              <div className="pagination-blog-list">
                <button>
                  <HiChevronLeft />
                  PREVIOUS
                </button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>8</button>
                <button>
                  Next
                  <HiChevronRight />
                </button>
              </div>
            </section>
            <section className="right-section">
              <div className="top-section">
                <h5>SEARCH</h5>
                <div className="form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Name or email"
                    className="form-control"
                  />
                </div>
              </div>
              <ul className="categouries-list">
                <h5 className="text-of-categouries">CATEGOURIES</h5>
                <li>
                  <a href="/">News</a>
                  <span className="list-number">(12)</span>
                </li>
                <li>
                  <a href="/">Inspiration</a>
                  <span className="list-number">(6)</span>
                </li>
                <li>
                  <a href="/">Review</a>
                  <span className="list-number">(24)</span>
                </li>
                <li>
                  <a href="/">Technology</a>
                  <span className="list-number">(5)</span>
                </li>
                <li>
                  <a href="/">Community</a>
                  <span className="list-number">(9)</span>
                </li>
              </ul>
              {/* populer-posts */}
              <h5 className="populer-posts-heading">Populer posts</h5>
              <div className="populer-posts">
                <div className="populer-post-img">
                  <img src="Trending-car.jpg" alt="" />
                </div>
                <div className="populer-post-link">
                  <span className="News populer-head">
                    <a href="/">News</a> |<p>july 30,2022</p>
                  </span>
                  <a href="/" className="populer-details">
                    Danoh ABR 2019, The Attraction from Traditional Brand.
                  </a>
                </div>
              </div>

              <div className="populer-posts">
                <div className="populer-post-img">
                  <img src="Trending-car.jpg" alt="" />
                </div>
                <div className="populer-post-link">
                  <span className="News populer-head">
                    <a href="/">News</a> |<p>july 30,2022</p>
                  </span>
                  <a href="/" className="populer-details">
                    Danoh ABR 2019, The Attraction from Traditional Brand.
                  </a>
                </div>
              </div>
              <div className="populer-posts">
                <div className="populer-post-img">
                  <img src="Trending-car.jpg" alt="" />
                </div>
                <div className="populer-post-link">
                  <span className="News populer-head">
                    <a href="/">News</a> |<p>july 30,2022</p>
                  </span>
                  <a href="/" className="populer-details">
                    Danoh ABR 2019, The Attraction from Traditional Brand.
                  </a>
                </div>
              </div>

              <div className="newSelter-full-box">
                <div>
                  <h5 className="selter-head selter">NEWSLETTER</h5>
                  <p className="selter-para selter">
                    Subscribe to our newsletter to get the latest cars discount
                    promotions, and other latest news.
                  </p>
                  <div className="form selter-form">
                    <input
                      type="email"
                      name="email"
                      placeholder=" email"
                      className="form-control"
                    />
                    <div className="auth-btn">
                      <button className="btn-main">SUBSCRIBE</button>
                      <p className="spam-text">don'nt worry ! we no span</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="populer-tags">
                <h6 className="populer-text">POPULER TAGS</h6>
                <div className="populer-button">
                  <div className="pagination-blog-list">
                    <button>vehical</button>
                    <button>inventory</button>
                    <button>wordpress</button>
                    <br />
                    <button>technology</button>
                    <button>dealership</button>
                    <button>mileage</button>
                    <button>car</button>
                    <button>automatic</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default blogwithSideBar;

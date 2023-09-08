import React,{useEffect} from "react";
import "./pageNotFound.css";
import {useNavigate} from 'react-router-dom'

const PageNotFound = () => {
  const navigate=useNavigate()
      useEffect(()=>{
         setTimeout(() => {
          navigate('/')
         }, 2000);
      },[])
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                <div className="background_page_not_found">
                  <h1 className="text-center not_found_margin">404</h1>
                </div>

                <div className="not_found_content">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not availble!</p>

                  <a href="/" className="go_home">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;

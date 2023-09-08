import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Exchangevehicledetail () {


  return (
    <div id="product_page_id">
      <Header />
      <div className="tanker">
        <div className="charging-cls">
          <div className="dealer-banner">
            <img
              src=""
              alt=""
            />
          </div>
          <div className="charging-page">
            <div>
              <div className="store-para1">
               
                
                                 
                   

                      <Formik
                      >
                        <div className="div-2">
                          <h2>See Offer Now</h2>
                          <Form>
                            <Field
                              type="number"
                              name="placeYourBid"
                              placeholder="Bid Amount"
                            />
                            <button
                              type="submit">
                              Exchange Vehicle
                            </button>
                          </Form>
                          <p className="text-danger">
                            <ErrorMessage name="placeYourBid" />
                          </p>
                        </div>
                      </Formik>
                      </div>

                    </div>
                 
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exchangevehicledetail;

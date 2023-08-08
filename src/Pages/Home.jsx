import React from 'react';
import { FiFacebook } from "react-icons/fi";
import {AiOutlineTwitter , AiOutlineGooglePlus , AiOutlineDribbble} from "react-icons/ai";
import { Link } from "react-router-dom";
import MyPic from "../assets/myPic.jpg";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2" style={{marginTop: -110}} data-aos="fade-up" data-aos-duration="3000">
          <div className="col">
            <img className="profile" src={MyPic} alt="Hi, This is Pasha" />
          </div>
          <div className="col">
            <div className="row text-center">
              <h2>About</h2>
            </div>
            <h3 className="pt-4">I'm A Designer</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
            <ul className="list-inline py-3 social-icons">
              <li className="list-inline-item"><FiFacebook/></li>
              <li className="list-inline-item"><AiOutlineTwitter/></li>
              <li className="list-inline-item"><AiOutlineGooglePlus/></li>
              <li className="list-inline-item"><AiOutlineDribbble/></li>
            </ul>
            <Link className="text-uppercase btn-contact" exact="/contact">Contact me!</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
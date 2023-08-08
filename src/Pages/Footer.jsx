import React from 'react';
import {FiFacebook} from "react-icons/fi";
import {AiOutlineTwitter , AiOutlineGooglePlus , AiOutlineDribbble} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row p-3">
          <div className="col">
            <h3>Let's Talk</h3>
            <p className='py-3'>A challenging environment where I can improve my skill and use my full potential for the growth of the organization and make my mark in the industry.</p>
            <p>prasanna99navale@gmail.com</p>
            <ul className="list-inline py-3 social-icons">
              <li className="list-inline-item"><FiFacebook/></li>
              <li className="list-inline-item"><AiOutlineTwitter/></li>
              <li className="list-inline-item"><AiOutlineGooglePlus/></li>
              <li className="list-inline-item"><AiOutlineDribbble/></li>
            </ul>
          </div>
          <div className="col">
            <h3>Newsletter</h3>
            <p className='py-3'>A boy from a slum area who wants to change the world. He hopes to change the lives of his parents and make them one proud...</p>
            <div class="col-12 px-4">
              <input className="rounded-pill input-mail" type="mail" placeholder="Enter Email address"/>
            </div>
            <div class="col-12 my-3 px-4">
              <button className="btn rounded-pill btn-sub">subscribe</button>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col text-center">
            <p>&copy; Copyright &copy;2023 All rights reserved | This template is made by PN.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
import React from 'react';
import { GrMapLocation } from "react-icons/gr";
import { BsFillPhoneFill , BsEnvelopeOpen } from "react-icons/bs";
import { BiSitemap } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row" style={{marginTop: -120}} data-aos="fade-up" data-aos-duration="3000">
          <div className="row text-center">
            <h2>Contact</h2>
          </div>
          <span className="text-uppercase text-center">Contact</span>
          <h3 className="text-center">Contact Me</h3>
          <div className="col">
            <h4>My Address</h4>
            <p className="px-4 py-3"><GrMapLocation/> 60/5 A, Parvati Darshan, Pune-411009, Maharashtra</p>
            <p className="px-4"><BsFillPhoneFill/> +91 7775 082 198</p>
            <p className="px-4 py-3" style={{color: "#CA82F8"}}><BsEnvelopeOpen/> prasanna99navale@gmail.com</p>
            <p className="px-4"><BiSitemap/> </p>
          </div>
          <div className="col">
            <form className="row g-3 needs-validation" novalidate>
              <div className="col-12">
                <textarea className="form-control" rows="7" id="validationTextarea" placeholder="Message" required></textarea>
                <div className="valid-feedback">
                  Please enter a message in the textarea.
                </div>
              </div>
              <div class="col-md-6">
                <input type="text" className="form-control" id="validationCustom01" required placeholder='Name' />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-md-6">
                <input type="e" className="form-control" id="validationCustom02" placeholder='Email' required />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-12">
                <button className="btn btnMsg" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
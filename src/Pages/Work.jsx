import React from 'react';
import { Link } from 'react-router-dom';
import Project1 from "../assets/project-1.png"
import Project2 from "../assets/project-2.png"
import Project3 from "../assets/project-3.png"
import Project4 from "../assets/project-4.png"
import Project5 from "../assets/project-5.png"

const Work = () => {
  return (
    <>
      <div className="container">
        <div className="row" style={{marginTop: -120}} data-aos="fade-up" data-aos-duration="3000">
          <div className="row text-center">
            <h2>Works</h2>
          </div>
          <span className="text-uppercase text-center">Portfolio</span>
          <h3 className="text-center">Demo Projects</h3>
          <div className="col-12 py-4">
            <div class="card border-0 p-4">
              <img src={Project1} class="card-img-top p-3" alt="..."/>
              <div class="card-img-overlay">
                <h5 class="card-title">Moviedb</h5>
              </div>
              <div class="card-body col-md-6 col-lg-4 mx-auto">
                <p class="card-text">This is full responsive single page application create using react and redux. Fetach API in this app with help of imdb database API's and deploy on server.</p>
                <Link to="https://movieimdb-2023.netlify.app/" className="read">View Details</Link>
              </div>
            </div>
          </div>
          <div className="col-12 py-4" data-aos="zoom-in" data-aos-duration="4000">
            <div class="card border-0 p-4">
              <img src={Project2} class="card-img-top p-3" alt="..."/>
              <div class="card-img-overlay">
                <h5 class="card-title">Destino RWD</h5>
              </div>
              <div class="card-body col-md-6 col-lg-4 mx-auto">
                <p class="card-text">This full responsive application made by using HTML, CSS, javaScript and also use of Bootstrap 5.</p>
                <Link to="" className="read">View Details</Link>
              </div>
            </div>
          </div>
          <div className="col-12 py-4" data-aos="zoom-in" data-aos-duration="5500">
            <div class="card border-0 p-4">
              <img src={Project3} class="card-img-top p-3" alt="..."/>
              <div class="card-img-overlay">
                <h5 class="card-title">Google Clone App</h5>
              </div>
              <div class="card-body col-md-6 col-lg-4 mx-auto">
                <p class="card-text">This is full resposive single page application made by using react, tailwind CSS and google API's to fetch data from google db.</p>
                <Link to="https://google-search-app-2k23.netlify.app/" className="read">View Details</Link>
              </div>
            </div>
          </div>
          <div className="col-12 py-4" data-aos="zoom-in" data-aos-duration="6500">
            <div class="card border-0 p-4">
              <img src={Project4} class="card-img-top p-3" alt="..."/>
              <div class="card-img-overlay">
                <h5 class="card-title">Wise RWD</h5>
              </div>
              <div class="card-body mx-auto col-md-6 col-lg-4">
                <p class="card-text">This full responsive application made by using HTML, CSS, javaScript and also use of Bootstrap 5.</p>
                <Link to="" className="read">View Details</Link>
              </div>
            </div>
          </div>
          <div className="col-12 py-4" data-aos="zoom-in" data-aos-duration="7500">
            <div class="card border-0 p-4">
              <img src={Project5} class="card-img-top p-3" alt="..."/>
              <div class="card-img-overlay">
                <h5 class="card-title">Demo Site</h5>
              </div>
              <div class="card-body mx-auto col-md-6 col-lg-4">
                <p class="card-text">This full responsive single page application made by using react and bootstrap 5.</p>
                <Link to="https://demo-site-2023.netlify.app/" className="read">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
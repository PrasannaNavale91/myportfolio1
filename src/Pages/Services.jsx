import React from 'react';

const Services = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 p-sm-4" style={{marginTop: -120}} data-aos="fade-up" data-aos-duration="3000">
          <div className="col">
            <div className="row text-center">
              <h2>Services</h2>
            </div>
            <span className='text-uppercase'>My services</span>
            <h3>Here Are Some of My Skills</h3>
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <h6 className="text-uppercase">1 - graphic design</h6>
                <ul>
                  <li className='py-2 text-muted'>UI Design</li>
                  <li className='py-2 text-muted'>Website & Digital Design</li>
                  <li className='py-2 text-muted'>Brading & Visual Identity</li>
                  <li className='py-2 text-muted'>Print Design</li>
                </ul>
              </div>
              <div className="col">
                <h6 className="text-uppercase">2 - illustration</h6>
                <ul>
                  <li className='py-2 text-muted'>Editorial</li>
                  <li className='py-2 text-muted'>Narrative</li>
                  <li className='py-2 text-muted'>Motion Graphics</li>
                  <li className='py-2 text-muted'>Animation</li>
                  <li className='py-2 text-muted'>Visual Effects</li>
                </ul>
              </div>
              <div className="col">
                <h6 className="text-uppercase">1 - frontend development</h6>
                <ul>
                  <li className='py-2 text-muted'>HTML / CSS</li>
                  <li className='py-2 text-muted'>JS & jQuery Startup</li>
                  <li className='py-2 text-muted'>Wordpress</li>
                  <li className='py-2 text-muted'>Jomla</li>
                </ul>
              </div>
              <div className="col">
                <h6 className="text-uppercase">4 - web marketing</h6>
                <ul>
                  <li className='py-2 text-muted'>Sales Marketing</li>
                  <li className='py-2 text-muted'>Inovice</li>
                  <li className='py-2 text-muted'>eCommerce</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <img className="serviceImg" src="https://preview.colorlib.com/theme/noah/images/services-img-1.jpg.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
import React, { useState } from 'react';
import MyLogo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose , AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  return (
    <>
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg shadow-md">
              <div className="container-fluid p-2">
                <Link className="navbar-brand text-primary mr-0">
                  <img src={MyLogo} alt='..' className='logoImg'/>
                </Link>
                <div className="form-inline ml-auto">
                  <div className="btn btn-primary" onClick={ToggleSidebar} >
                    <FaBars/>
                  </div>
                </div>
              </div>
            </nav>
            <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
              <div className="sd-header">
                <div className="btn border-0 btnClose" onClick={ToggleSidebar}><AiOutlineClose/></div>
                <div className="input-group">
                  <input type='text' class="form-control" placeholder='Enter keyword to search' />
                  <button className='btn btnSearch' type='button'><AiOutlineSearch/></button>
                </div>
              </div>
              <div className="sd-body">
                <ul>
                  <li>
                    <Link className='sd-link' to="/">Home</Link>
                  </li>
                  <li>
                    <Link className='sd-link' to="/services">Service</Link>
                  </li>
                  <li>
                    <Link className='sd-link' to="/work">Work</Link>
                    </li>
                  <li>
                    <Link className='sd-link' to="/contact">Contact</Link>
                    </li>
                </ul>
              </div>
            </div>
            <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
import React , { useEffect } from 'react';
import { preLoaderAnim } from "../animation/index.jsx";
import "./preloader.css";

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    }, []);

  return (
    <>
        <div className="preloader">
            <div className="text-container">
                <span>Developer, </span>
                <span>Creator, </span>
                <span>Gamer.</span>
            </div>
        </div>
    </>
  );
}

export default Preloader;
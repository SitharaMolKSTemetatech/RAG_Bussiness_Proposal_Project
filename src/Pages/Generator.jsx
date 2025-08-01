import React from 'react';
import './Generator.css';
import bussinessproposal from '../assets/bussinessproposal.jpg';
import { Link } from 'react-router-dom';
const Generator = () => {
  return (
    <div className="generator-container">
      <div className="generator-content">
        <h1 className="main-heading">Create Winning Business Proposals</h1>
        <p className="sub-heading">
          Control every step of your proposal process with ease. Generate, customize,
          and share professional proposals with clients—effortlessly.
        </p>
        <div className="buttons">
          <Link to='/createworkspace'>
          <button className="btn-white">Start Now</button>
          </Link>
           <Link to="/bookdemo">
            <button className="btn-blue">Book a Demo</button>
          </Link>
        
        </div>
      </div>
     <div className="generator-image">
        <img src={bussinessproposal} alt="Proposal Demo" />
      </div>
    </div>
  );
};

export default Generator;

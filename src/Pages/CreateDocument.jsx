import React from "react";
import "./CreateDocument.css";
import { FaSearch, FaFileAlt, FaTrash, FaUser, FaBook, FaGlobe, FaCog, FaPlus } from "react-icons/fa";
import foldericon from '../assets/foldericon.jpg';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"; // Ensure these are imported
const CreateDocument = () => {
  return (
  
<div className="doc-container">
      {/* Dark Icon Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-icons">
          {/* Each icon wrapped in a Link with a common class for styling */}
          <Link to="/createdocument" className="sidebar-icon-link">
            <FaGlobe />
          </Link>
          <Link to="/createlibrary" className="sidebar-icon-link">
            <FaFileAlt />
          </Link>
          <Link to="/userpage" className="sidebar-icon-link">
            <FaUser />
          </Link>
          <Link to="/clientspage" className="sidebar-icon-link">
            <FaBook />
          </Link>
          <Link to="/integrationpage" className="sidebar-icon-link">
            <FaPlus />
          </Link>
          <Link to="/settingspage" className="sidebar-icon-link">
            <FaCog />
          </Link>
        </div>
      </aside>

      {/* Light Button Panel */}
      <aside className="sidebar-panel"> {/* Changed class name here */}
        <button className="new-doc-btn">+ New Document</button>
        <div className="menu-options">
          <button className="menu-btn active"><FaFileAlt /> Documents</button>
          <button className="menu-btn"><FaTrash /> Trash</button>
        </div>
        <button className="feedback-btn">Submit feedback</button>
      </aside>

      <main className="main-content">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search list by document title or account" />
        </div>

        <div className="empty-state">
          {/* Ensure you have an 'foldericon.png' in your public folder or adjust the path */}
          <img src={foldericon} alt="Proposal Demo" />
      
          <h2>No documents yet</h2>
          <p>Documents created will appear here.</p>
          <button className="main-new-doc-btn"><FaPlus /> New Document</button>
        </div>

        <div className="status-filters">
          {["All", "Draft", "Approval", "Approved", "Sent", "Viewed", "Awaiting Signature", "Lost", "Won"].map((status, i) => (
            <button key={i} className={`status-btn ${status === "All" ? "selected" : ""}`}>
              {status}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CreateDocument;
import React from "react";
import "./CreateLibrary.css";
import { FaSearch, FaFileAlt, FaTrash, FaUser, FaBook, FaGlobe, FaCog, FaPlus } from "react-icons/fa";
import libraryIcon from '../assets/foldericon.jpg'; // Replace with a suitable icon for libraries
import { Link } from "react-router-dom";
import { Sparkles } from 'lucide-react';
const CreateLibrary = () => {
  return (
   <div className="library-container">
      {/* Dark Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-icons">
 <Link to="/createdocument" className="sidebar-icon-link"><FaGlobe /></Link>
             <Link to="/createlibrary" className="sidebar-icon-link"><FaFileAlt /></Link>
             <Link to="/userpage" className="sidebar-icon-link"><FaUser /></Link>
             <Link to="/clientspage" className="sidebar-icon-link"><FaBook /></Link>
             <Link to="/integrationpage" className="sidebar-icon-link"><FaPlus /></Link>
             <Link to="/settingspage" className="sidebar-icon-link"><FaCog /></Link>

        </div>
      </aside>

      {/* Light Panel */}
      <aside className="sidebar-panel">

        <p><b>Content Library</b></p><br></br>
        
        
        <div className="button-container">
          <button className="new-library-btn">+ New Asset</button>
         {/*<button className="side-action-button content-library">
            <FaBook /> Content Library
          </button>*/}
          <button className="side-action-button generate-template">
            <Sparkles size={16} className="sparkle-icon" />
            Generate template
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search library by title or tag" />
        </div>

        <div className="empty-state">
          <img src={libraryIcon} alt="Library Placeholder" />
          <h2>No assets yet</h2>
          <p>You can create reusable asstes to drag and drop into documnets.</p>
          <button className="main-new-library-btn"><FaPlus /> Add to Library</button>
        </div>

        <div className="status-filters">
          {["All", "Images", "Videos", "Documents", "Templates"].map((filter, i) => (
            <button key={i} className={`status-btn ${filter === "All" ? "selected" : ""}`}>
              {filter}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CreateLibrary;

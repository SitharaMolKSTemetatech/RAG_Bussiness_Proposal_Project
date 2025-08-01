import React from 'react';
import './SettingsPage.css';
import {
  FaSearch, FaFileAlt, FaTrash, FaUser, FaBook, FaGlobe, FaCog, FaPlus
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

const SettingsPage = () => {
  return (
    // Main container for the entire page, including sidebar and content
    <div className="settings-page-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-icons">
          {/* Link components for navigation */}

 <Link to="/createdocument" className="sidebar-icon-link"><FaGlobe /></Link>
             <Link to="/createlibrary" className="sidebar-icon-link"><FaFileAlt /></Link>
             <Link to="/userpage" className="sidebar-icon-link"><FaUser /></Link>
             <Link to="/clientspage" className="sidebar-icon-link"><FaBook /></Link>
             <Link to="/integrationpage" className="sidebar-icon-link"><FaPlus /></Link>
             <Link to="/settingspage" className="sidebar-icon-link"><FaCog /></Link>


        </div>
      </aside>

      {/* Main content area for Account Settings, now wrapped by <main> */}
      <main className="integration-content">
        <div className="account-settings-content">
          <h1 className="account-settings-title">Account Settings</h1>

          <div className="settings-cards-wrapper">
            {/* Company Info Card - Now a clickable Link */}
            <Link to="/companysettingspage" className="setting-card-link"> {/* Wrap the card with Link */}
              <div className="setting-card">
                <div className="card-icon">
                  {/* SVG for Company Info icon (building) */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-building">
                    <rect x="3" y="10" width="18" height="12" rx="2" ry="2"></rect>
                    <path d="M12 2L12 10"></path>
                    <line x1="17" y1="6" x2="17" y2="10"></line>
                    <line x1="7" y1="6" x2="7" y2="10"></line>
                  </svg>
                </div>
                <span className="card-text">Company Info</span>
              </div>
            </Link>

            {/* Billing Card - Example with Link */}
            <Link to="/billingpage" className="setting-card-link">
              <div className="setting-card">
                <div className="card-icon">
                  {/* SVG for Billing icon (credit card) */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                </div>
                <span className="card-text">Billing</span>
              </div>
            </Link>

            {/* Available Fonts Card - Example with Link */}
            <Link to="/fontpage" className="setting-card-link">
              <div className="setting-card">
                <div className="card-icon">
                  {/* SVG for Available Fonts icon (folder with 'A') */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">A</text>
                  </svg>
                </div>
                <span className="card-text">Available Fonts</span>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
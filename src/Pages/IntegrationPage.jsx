import React, { useState } from 'react';
import './IntegrationPage.css';
import {
  FaSearch, FaFileAlt, FaTrash, FaUser, FaBook, FaGlobe, FaCog, FaPlus
} from "react-icons/fa";
import { Link } from "react-router-dom";

const integrations = [
  {
    name: 'Hubspot',
    category: 'CRM',
    description: 'Edit and manage Proposify documents directly within HubSpot using the dedicated widget, while syncing contacts, pricing and deal stages automatically.',
  /*  logo: 'https://upload.wikimedia.org/wikipedia/commons/7/71/HubSpot_Logo.png'*/
  },
  {
    name: 'Salesforce',
    category: 'CRM',
    description: 'Create and edit proposals directly within Salesforce and pull data from any object into your documents.',
    /*logo: 'https://1000logos.net/wp-content/uploads/2021/10/Salesforce-logo.png'*/
  },
  {
    name: 'Microsoft Dynamics',
    category: 'CRM',
    description: 'Sync contacts, opportunities and proposal data between Proposify and Microsoft Dynamics for a unified sales process with automatic CRM updates.',
   /* logo: 'https://download.logo.wine/logo/Microsoft_Dynamics/Microsoft_Dynamics-Logo.wine.png'*/
  },
  {
    name: 'Aspire',
    category: 'CRM',
    description: 'Pull data from Aspire into your proposals and track deal progress throughout your sales pipeline.',
  /*  logo: 'https://www.aspireapp.com/_next/static/media/logo-dark.62e0066b.svg' */// high-quality SVG logo
  }
];


const IntegrationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredIntegrations = selectedCategory === 'All'
    ? integrations
    : integrations.filter(item => item.category === selectedCategory);

  return (
    <div className="library-container">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="integration-content">
        <div className="integration-header">
          <h2>Integrations</h2>
          <input className="search-input" placeholder="Search…" />
        </div>
        <div className="category-list">
          {['All', 'CRM'].map(cat => (
            <div
              key={cat}
              className={`category-item ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className="integrations-grid">
          {filteredIntegrations.map(item => (
            <div key={item.name} className="integration-card">
  {  /*   <img src={item.logo} alt={item.name} className="logo" />*/}
              <h3>{item.name}</h3>
              <p className="category-label">{item.category}</p>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default IntegrationPage;

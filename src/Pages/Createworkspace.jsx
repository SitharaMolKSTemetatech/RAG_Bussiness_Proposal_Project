import React, { useState } from 'react';
import './CreateWorkspace.css';
import { Link } from 'react-router-dom';
const CreateWorkspace = () => {
  const [companyName, setCompanyName] = useState('');
  const [subdomainName, setSubdomainName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Workspace details submitted:', { companyName, subdomainName });
    // For demonstration purposes, we'll use a simple alert.
    // In a production app, consider a custom modal or navigation to the next step.
    alert('Workspace setup initiated!');
  };

  return (
    <div className="create-workspace-container">
      <div className="workspace-card">
        <h1>You're in! Let's set up your workspace.</h1>
        <p>Choose something your team and prospects will recognize.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            {/* Company Name Input */}
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company name"
              required
            />
          </div>

          <div className="input-group subdomain-group">
            {/* Subdomain Name Input */}
            <input
              type="text"
              id="subdomainName"
              value={subdomainName}
              onChange={(e) => setSubdomainName(e.target.value)}
              placeholder="Subdomain name"
              required
            />
            {/* Subdomain Suffix */}
            <span className="subdomain-suffix">.proposify.com</span>
          </div>

          {/* Continue Button */}
    <Link to="/firstpage">    
          <button type="submit">Continue</button>
      </Link> 
        </form>
      </div>
    </div>
  );
};

export default CreateWorkspace;

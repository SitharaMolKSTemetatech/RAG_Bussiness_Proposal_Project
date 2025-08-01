import React, { useState } from 'react';
import './UserPage.css';
import {
  FaSearch, FaFileAlt, FaTrash, FaUser, FaBook, FaGlobe, FaCog, FaPlus
} from "react-icons/fa";
import { Link } from "react-router-dom";

const users = [
  {
    name: 'S',
    initials: 'SK',
    role: 'Account Owner',
    isLoggedIn: false
  }
];

function UserPage() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user.name);
    alert(`Logged in as ${user.name}`);
  };

  return (
    <div className="settings-page-container">
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

      {/* Main content */}
      <div className="users-container">
        <div className="users-header">
          <h1>Users</h1>
          <p>Users have their own account and can log in to work on proposals.</p>
          <button className="invite-btn">+ Invite New User</button>
        </div>

        <div className="user-card-container">
          {users.map((user, index) => (
            <div className="user-card" key={index}>
              <div className="user-avatar">{user.initials}</div>
              <button className="role-badge" onClick={() => handleLogin(user)}>
                {user.role}
              </button>
              <div className="user-name">{user.name}</div>
            </div>
          ))}
        </div>

        {loggedInUser && <p className="logged-in-msg">Logged in as: {loggedInUser}</p>}
      </div>
    </div>
  );
}

export default UserPage;

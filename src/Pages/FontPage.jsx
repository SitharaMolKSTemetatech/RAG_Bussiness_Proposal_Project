import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaFileAlt, FaUser, FaBook, FaPlus, FaCog } from 'react-icons/fa';
import './FontPage.css';

const fonts = [
  { name: "Abel", preview: "The quick brown fox jumps over the lazy dog", tags: ["Latin"], installed: false },
  { name: "Abril Fatface", preview: "The quick brown fox jumps over the lazy dog", tags: ["Latin", "Latin Extended"], installed: false },
  { name: "Aclonica", preview: "The quick brown fox jumps over the lazy dog", tags: ["Latin"], installed: false },
  { name: "Adamina", preview: "The quick brown fox jumps over the lazy dog", tags: ["Latin"], installed: false },
  { name: "Advent Pro", preview: "The quick brown fox jumps over the lazy dog", tags: ["Latin", "Latin Extended"], installed: false },
  { name: "Aguafina Script", preview: "The quick brown fox jumps over the lazy dog", tags: ["Latin", "Latin Extended"], installed: false },
];

const FontsPage = () => {
  const [search, setSearch] = useState('');
  const [showInstalled, setShowInstalled] = useState(false);

  const filteredFonts = fonts.filter(font => {
    const matchesSearch = font.name.toLowerCase().includes(search.toLowerCase());
    return showInstalled ? font.installed && matchesSearch : matchesSearch;
  });

  const toggleFont = (fontName) => {
    const index = fonts.findIndex(f => f.name === fontName);
    fonts[index].installed = !fonts[index].installed;
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

      {/* Fonts Page Content */}
      <div className="fonts-page-content">
        <button className="back-btn">← Back</button>
        <h2>Fonts</h2>
        <p>
          To speed up the load time of the editor, you can turn on only the fonts you're using.
          Our library includes 700 fonts from <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer">Google Fonts</a>.
        </p>

        <div className="fonts-toolbar">
          <input
            type="text"
            placeholder="Search font library"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setShowInstalled(!showInstalled)}>
            {showInstalled ? "Show All Fonts" : "Show Installed Fonts"}
          </button>
        </div>

        <div className="fonts-list">
          {filteredFonts.map((font, index) => (
            <div key={index} className="font-item">
              <div className="font-meta">
                <span className="font-name">{font.name}</span>
                {font.tags.map((tag, idx) => (
                  <span key={idx} className="font-tag">{tag}</span>
                ))}
              </div>
              <p className="font-preview" style={{ fontFamily: font.name }}>
                {font.preview}
              </p>
              <label className="switch">
                <input type="checkbox" checked={font.installed} onChange={() => toggleFont(font.name)} />
                <span className="slider round"></span>
              </label>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button>«</button>
          <button className="active">1</button>
          <button>2</button>
          <button>»</button>
        </div>
      </div>
    </div>
  );
};

export default FontsPage;

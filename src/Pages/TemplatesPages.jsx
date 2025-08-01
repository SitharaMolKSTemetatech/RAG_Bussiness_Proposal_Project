import React, { useState } from 'react';
import './TemplatesPages.css';
import { Link } from 'react-router-dom';

import blueblacktemplates from '../assets/blueblacktemplate.jpg';// Added S to  
import brochuretemplate from '../assets/brochuretemplate.jpg';
import bussinessbrochuretemplate from '../assets/bussinessbrochuretemplate.jpg';
import colourfultemplate from '../assets/colourfultemplate.jpg';
import flatetemplate from '../assets/flatetemplate.jpg';
import modernbusinesstemplate from '../assets/modernbusinesstemplate.jpg';

const templates = [
  { title: "Landwise", image: blueblacktemplates },
  { title: "Blue Servers", image: brochuretemplate },
  { title: "Golden IO", image: bussinessbrochuretemplate },
  { title: "Green Energy",image: colourfultemplate },
  { title: "Nature Care",image: flatetemplate },
  { title: "Revive Media",image: modernbusinesstemplate },
  { title: "Squawk Media", image: colourfultemplate },
  { title: "Solar Energy", image: brochuretemplate },
];

const TemplateSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const openModal = (template) => {
    setSelectedTemplate(template);
  };

  const closeModal = () => {
    setSelectedTemplate(null);
  };

  return (
    <div className="template-selector-container">
      <h2>Select a template</h2>
      <p className="subtext">Now pick a look and feel that you like. All text, images and colors are fully customizable.</p>

      <div className="template-grid">
        {templates.map((template, index) => (
          <div key={index} className="template-card" onClick={() => openModal(template)}>
            <img src={template.image} alt={template.title} />
            <p>{template.title}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTemplate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedTemplate.title}</h3>
            <img src={selectedTemplate.image} alt={selectedTemplate.title} className="modal-image" />
            <div className="modal-actions">
              <Link to={`/edit-template/${selectedTemplate.title}`} className="edit-btn">Edit This Template</Link>
              <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;

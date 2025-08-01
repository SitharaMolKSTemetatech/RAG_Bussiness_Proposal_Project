import React from 'react';
import './FirstPage.css'; // Assuming you'll put your CSS here
import { Link } from 'react-router-dom';
const FirstPage = () => {
    return (
        <div className="proposal-template-container">
            <div className="left-section">
                <h1>Now let's set you up with your first template.</h1>
                <p>Templates are the MVP when it comes to ensuring fast, error-free impressive proposals every time.</p>
                <p>Templates allow your team to:</p>

                <div className="template-feature">
                    <div className="icon-box icon-design">
                        {/* Placeholder for icon */}
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" width="24" height="24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM9.5 12c.83 0 1.5.67 1.5 1.5S10.33 15 9.5 15 8 14.33 8 13.5 8.67 12 9.5 12zm5 0c.83 0 1.5.67 1.5 1.5S15.33 15 14.5 15 13 14.33 13 13.5 13.67 12 14.5 12z"/>
                        </svg>
                    </div>
                    <p><strong>Keep proposal design on-brand</strong> and content up-to-date.</p>
                </div>

                <div className="template-feature">
                    <div className="icon-box icon-save">
                        {/* Placeholder for icon */}
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" width="24" height="24">
                            <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14zM12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
                        </svg>
                    </div>
                    <p>Save and reuse pre-approved content. No starting from scratch.</p>
                </div>

                <div className="template-feature">
                    <div className="icon-box icon-lightning">
                        {/* Placeholder for icon */}
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" width="24" height="24">
                            <path d="M11 20v-5H6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5H11V8L17 14l-6 6z"/>
                        </svg>
                    </div>
                    <p>Quickly create and send winning proposals before the competition.</p>
                </div>
            </div>

            <div className="right-section">
                <div className="signature-box">
                    <h3 className="company-name">Bussiness Proposal</h3>
              {/*      <p className="submitted-by-label">Submitted by</p>*/}
                    <p className="signer-name">Gen(I)</p>
                    {/*<p className="signer-company">Jenny's Cleaning Services</p>*/}
                    <div className="signature-image-placeholder">
                        {/* This is a placeholder for the signature image. In a real app, it would be an <img> tag. */}
                        <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 30 C 60 50, 100 10, 150 40" stroke="#4a90e2" strokeWidth="2" fill="none"/>
                            <path d="M30 40 C 70 70, 120 20, 170 50" stroke="#4a90e2" strokeWidth="2" fill="none"/>
                        </svg>
                        <div className="signature-line"></div>
                    </div>
                </div>
            </div>

            <div className="bottom-action">
                 <Link to="/createdocument">
                <button className="amazing-button">Amazing, let's do it!</button>
                </Link>
            </div>
        </div>
    );
};

export default FirstPage;
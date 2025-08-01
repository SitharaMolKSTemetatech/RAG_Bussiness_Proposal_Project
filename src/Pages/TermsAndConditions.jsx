import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p className="date">Effective Date: June 17, 2025</p>

      <section>
        <h2>1. Eligibility</h2>
        <p>
          You must be at least 18 years old and capable of entering into a legally binding contract to use this service.
        </p>
      </section>

      <section>
        <h2>2. Use of the Service</h2>
        <p>
          You agree to use the platform only for lawful purposes, including generating, editing, and sharing business proposals.
        </p>
        <ul>
          <li>Do not use the service for unlawful or unauthorized purposes.</li>
          <li>Do not attempt to gain unauthorized access to other user accounts or systems.</li>
        </ul>
      </section>

      <section>
        <h2>3. Account Responsibility</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account. Notify us of any unauthorized use immediately.
        </p>
      </section>

      <section>
        <h2>4. Intellectual Property</h2>
        <p>
          All materials and templates provided on the platform are the property of TemetaTech and protected by copyright.
        </p>
      </section>

      <section>
        <h2>5. User Content</h2>
        <p>
          You retain ownership of your uploaded content but grant us a license to use it as needed to operate the platform.
        </p>
      </section>

      <section>
        <h2>6. Data Privacy</h2>
        <p>
          Please refer to our <a href="/privacy-policy">Privacy Policy</a> to understand how we handle your information.
        </p>
      </section>

      <section>
        <h2>7. Payment & Subscription</h2>
        <p>
          All subscription payments must be made as described. Non-payment may result in access suspension.
        </p>
      </section>

      <section>
        <h2>8. Termination</h2>
        <p>
          We may suspend or terminate your account if you violate these terms or use the platform inappropriately.
        </p>
      </section>

      <section>
        <h2>9. Disclaimer</h2>
        <p>
          The platform is provided "as is" without warranty of any kind. We do not guarantee error-free service.
        </p>
      </section>

      <section>
        <h2>10. Limitation of Liability</h2>
        <p>
          We are not liable for any indirect or consequential damages resulting from the use of our platform.
        </p>
      </section>

      <section>
        <h2>11. Changes to Terms</h2>
        <p>
          We may update these terms at any time. Continued use of the platform constitutes acceptance of the revised terms.
        </p>
      </section>

      <section>
        <h2>12. Governing Law</h2>
        <p>
          These terms are governed by the laws of India . Disputes will be resolved in India.
        </p>
      </section>

      <section>
        <h2>13. Contact Us</h2>
        <p>
          If you have questions about these terms, please email us at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;

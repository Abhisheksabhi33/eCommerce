import React from "react";
import "./contact-card.scss";
import Footer from "../footer/Footer";

const ContactCard = () => {
  return (
    <main className="contact-container">
      <div className="contact-card">
        <div className="card-title">REACH US AT</div>
        <div className="card-info">
          <div>
            <div className="card-mail">support@kicksup.com</div>
            <div>for any technical support</div>
          </div>
          <div>
            <div className="card-mail">info@kicksup.com</div>
            <div>for more information</div>
          </div>
          <div>
            <div className="card-mail">feedback@kicksup.com</div>
            <div>to send your feedback</div>
          </div>
          <div>
            <div className="card-mail">jobs@kicksup.com</div>
            <div>to work with us</div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ContactCard;

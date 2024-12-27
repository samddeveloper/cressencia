import React from "react";
import { InlineWidget } from "react-calendly";
import "./BookingPage.css"; // Importera CSS för att styla widgeten

const BookingPage = () => {
  return (
    <div className="booking-page">
      <h1 className="booking-text">Boka din tid</h1>
      <div className="calendly-widget-container">
        <InlineWidget url="https://calendly.com/cesar-lopezc80/healing-behandling?back=1&month=2024-11" />
      </div>
    </div>
  );
};

export default BookingPage;

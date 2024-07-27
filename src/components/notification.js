// Notification.js
import React, { useEffect } from "react";

const Notification = ({ message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Automatically close the notification after 10 seconds
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "500px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "white",
        color: "green",
        padding: "1rem",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        zIndex: 1000,
        transition: "bottom 0.3s ease-in-out",
        width: "90%", // Default width for small screens
        maxWidth: "500px", // Max width for larger screens
      }}
    >
      <span style={{ flex: 1 }}>{message}</span>
    </div>
  );
};

export default Notification;

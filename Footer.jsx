import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#FA6695", // Bright pink
    color: "#fff",
    padding: "1.5rem 1rem", // reduced padding
    marginTop: "2rem",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "1.25rem", // slightly smaller heading
    marginBottom: "0.75rem",
    fontWeight: "600",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 0.75rem",
    fontSize: "0.95rem",
  };

  const paragraphStyle = {
    fontSize: "0.9rem",
    marginTop: "0.75rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={headingStyle}>🌸 Bloosm Flower Cart</div>
      <div>
        <a href="/about" style={linkStyle}>About Us</a>
        <a href="/products" style={linkStyle}>Shop</a>
        <a href="/cart" style={linkStyle}>Cart</a>
      </div>
      <p style={paragraphStyle}>
        Contact: bloosm@flowers.com | +92 300 1234567
      </p>
      <p style={{ ...paragraphStyle, fontSize: "0.85rem" }}>
        &copy; 2025 Bloosm Flower Cart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;



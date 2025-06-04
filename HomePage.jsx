import React from "react";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="my-4">
      <h1>🌻Welcome to Bloosm Flower Cart!</h1>
      <p>Browse beautiful flowers and add your favorites to the cart.</p>
       <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      </div>
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <img
          src="https://houseofflowers.pk/cdn/shop/files/mothers_day_2025_web_31434f47-afa6-476c-997a-85a8318ff138.jpg?v=1745995401&width=2000"
          alt="Flower Bouquet "
          style={{
      
            width: "100%",
            maxWidth: "1300px",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
          }}
        />
      </div>

    </Container>
    

  );
};

export default HomePage;


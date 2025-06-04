import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Category: {product.category}</Card.Text>
        <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
        <Button
          variant="primary"
          onClick={() => onAddToCart(product)}
          className="mt-auto"
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;




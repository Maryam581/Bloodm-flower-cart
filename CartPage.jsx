import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

const CartPage = ({ cartItems, onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <Container className="my-4">Your cart is empty.</Container>;
  }

  return (
    <Container className="my-4">
      <h2>Cart Summary</h2>
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            <div>
              {item.name} x {item.quantity} (${(item.price * item.quantity).toFixed(2)})
            </div>
            <Button variant="danger" size="sm" onClick={() => onRemoveFromCart(item.id)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>
    </Container>
  );
};

export default CartPage;





import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, description, img, price } = service;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h4 className="text-danger">${price}</h4>
          <Link to="/checkout" className="btn btn-primary">
            Explore
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;

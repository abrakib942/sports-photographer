import React from "react";
import { Card } from "react-bootstrap";
import cricket from "../../images/cricket.jpg";
import tennis from "../../images/tenis.jpg";
import personal from "../../images/personal.jpg";

const OtherActivities = () => {
  return (
    <div className="container">
      <h2 className="text-primary text-center my-4">Other Activities</h2>

      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4 cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={cricket} />
          <Card.Body>
            <Card.Title>CWC-19 preview</Card.Title>
            <Card.Text>
              It was the great journey with cricket for me. I was in cricket
              ground. As a sports photographer it's a great achievement for me.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img style={{ height: "220px" }} variant="top" src={tennis} />
          <Card.Body>
            <Card.Title>Miami Open Tennis</Card.Title>
            <Card.Text>
              I am always stay in football ground. But it's special for me to
              other activities. This open is mind blowing.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={personal} />
          <Card.Body>
            <Card.Title>Personal Graphy</Card.Title>
            <Card.Text>
              It is very good to see that I captured you and your family. If you
              need to me, this site is for you.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default OtherActivities;

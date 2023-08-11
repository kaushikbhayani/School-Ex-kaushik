import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ImageCard(prop) {
  return (
    <Card style={{ width: "25rem", borderRadius: "20px", overflow: "hidden" }}>
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
        <Card.Text>{prop.text}</Card.Text>
        <Button variant="primary">Visit This Page</Button>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;

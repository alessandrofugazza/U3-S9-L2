import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class BookGenreRow extends Component {
  render() {
    return (
      <Container>
        <h3 className="mb-4 h2">{this.props.genre}</h3>
        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 gy-4 mb-5">
          {this.props.books.map(book => (
            <Col key={`${book.asin}`} className="d-flex">
              <Card>
                <Card.Img src={book.img} variant="top" style={{ height: "200px" }} className="object-fit-contain" />
                <Card.Body>
                  <Card.Title className="fs-6">{book.title}</Card.Title>
                  <Card.Text>`${book.price}`</Card.Text>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookGenreRow;

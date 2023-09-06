import { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

// let expanded = false;
let colNumVar = 6;

const showMoreHide = e => {
  if (expanded && e.target.classList.contains("more")) {
    this.setState({ display: "d-none" });
    e.target.innerText = "More";
    expanded = false;
  } else if (!expanded) {
    this.setState({ display: "d-block" });
    e.target.innerText = "Hide";
    expanded = true;
  }
};
class BookGenreRow extends Component {
  state = {
    display: "d-block",
    expanded: false,
    showHideBtnText: "More",
  };
  render() {
    return (
      <section>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className=" h2 m-0">{this.props.genre}</h3>
          <Button
            variant="primary"
            onClick={() => {
              if (this.state.expanded && e.target.classList.contains("more")) {
                this.setState({ display: "d-none" });
                this.setState({ showHideBtnText: "Hide" });
                this.setState({ expanded: false });
              } else if (!this.state.expanded) {
                this.setState({ display: "d-block" });
                this.setState({ showHideBtnText: "More" });
                this.setState({ expanded: true });
              }
            }}
          >
            More
          </Button>
        </div>
        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 gy-4 mb-5">
          {this.props.books.map((book, index) => (
            <Col key={`${book.asin}`} className={`${this.state.display} ${index < colNumVar ? null : "d-none more"}`}>
              <Card>
                <Card.Img src={book.img} variant="top" style={{ height: "200px" }} className="object-fit-contain" />
                <Card.Body>
                  <Card.Title className="fs-6">{book.title}</Card.Title>
                  <Card.Text>{`$${book.price.toFixed(2)}`}</Card.Text>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    );
  }
}

// const cols =

// for (let i; i<4;i++) {

// }

export default BookGenreRow;

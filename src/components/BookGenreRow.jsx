import { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

let expanded = false;
let colNum = 6;

const showMoreHide = e => {
  if (expanded) {
    const row = e.target.closest("section").querySelector(".row");
    const cols = row.querySelectorAll(".col");
    const colsLen = cols.length;
    for (let i = colNum; i < colsLen; i++) {
      cols[i].classList.add("d-none");
    }
    e.target.innerText = "More";
    expanded = false;
  } else {
    const section = e.target.closest("section");
    const hiddenCols = section.querySelectorAll(".col.d-none");
    hiddenCols.forEach(col => {
      col.classList.remove("d-none");
    });
    e.target.innerText = "Hide";
    expanded = true;
  }
};
class BookGenreRow extends Component {
  state = {
    cols: colNum,
  };
  render() {
    return (
      <section>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className=" h2 m-0">{this.props.genre}</h3>
          <Button variant="primary" onClick={showMoreHide}>
            More
          </Button>
        </div>
        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 gy-4 mb-5">
          {this.props.books.map((book, index) => (
            <Col key={`${book.asin}`} className={`d-flex ${index < this.state.cols ? null : "d-none"}`}>
              {/* // <Col key={`${book.asin}`} className="d-flex"> */}
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

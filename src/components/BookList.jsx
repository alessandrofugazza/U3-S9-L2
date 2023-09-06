import { Col, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    filterString: "",
  };
  filterBookList = string => {
    this.setState({ filterString: string });
  };
  render() {
    return (
      <>
        <InputGroup className="mb-3">
          <Form.Control placeholder="Cerca.." onChange={e => this.filterBookList(e.target.value)} />
        </InputGroup>
        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 gy-4 mb-5">
          {this.props.books
            .filter(book => book.title.toLowerCase().includes(this.state.filterString.toLowerCase()))
            .map(book => {
              return (
                <Col key={book.asin} className="d-flex">
                  <SingleBook book={book} />
                </Col>
              );
            })}
        </Row>
      </>
    );
  }
}

export default BookList;

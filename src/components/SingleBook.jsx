import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  highlightSelected = () => {
    this.setState({ selected: this.state.selected ? false : true });
  };
  render() {
    return (
      <Card onClick={this.highlightSelected} style={this.state.selected ? { border: "2px solid red" } : null}>
        <Card.Img src={this.props.book.img} variant="top" style={{ height: "200px" }} className="object-fit-contain" />
        <Card.Body>
          <Card.Title className="fs-6">{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasyBooks from "./data/fantasy.json";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <Container>
        <BookList books={fantasyBooks} />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;

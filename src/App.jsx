import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <Welcome/>
      <AllTheBooks/>
      <MyFooter/>
    </div>
  );
}

export default App;

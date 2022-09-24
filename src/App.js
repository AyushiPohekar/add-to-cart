
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Product/>
    <Footer/>
    </div>
  );

}
export default App;


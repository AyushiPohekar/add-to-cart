import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Product from "./Components/Product";

function App() {
  const data = [
    {
      id: '1',
      title: "Item1",
      mutedprice: "",
      price: "$40.00-$50.00",
      img: "https://dummyimage.com/450x400/dee6e4/4c757d.jpg",
      sale: false,
      rating: 3,
      AddedCart: true,
      amount:1
    },

    {
      id: '2',
      title: "Item2",
      mutedprice: "",
      price: "$30.00-$40.00",
      img: "https://dummyimage.com/450x400/dee6e4/4c757d.jpg",
      sale: true,
      rating: 5,
      AddedCart: true,
      amount:1
    },

    {
      id: '3',
      title: "Item3",
      mutedprice: "$50.00",
      price: "$45.00",
      img: "https://dummyimage.com/450x400/dee6e4/4c757d.jpg",
      sale: true,
      rating: 3.5,
      AddedCart: false,
      amount:1
    },

    {
      id: '4',
      title: "Item4",
      mutedprice: "$80.00",
      price: "$65.00",
      img: "https://dummyimage.com/450x400/dee6e4/4c757d.jpg",
      sale: false,
      rating: 4,
      AddedCart: false,
      amount:1
    },
    {
      id: '5',
      title: "Item5",
      mutedprice: "",
      price: "$40.00-$50.00",
      img: "https://dummyimage.com/450x400/dee6e4/4c757d.jpg",
      sale: true,
      rating: 5,
      AddedCart: false,
      amount:1
    },
    {
      id: '6',
      title: "Item6",
      mutedprice: "",
      price: "$40.00-$50.00",
      img: "https://dummyimage.com/450x400/dee6e4/4c757d.jpg",
      sale: false,
      rating: 3,
      AddedCart: true,
      amount:1
    },

    {
      id: '7',
      title: "Item7",
      mutedprice: "",
      price: "$40.00-$50.00",
      img: "https://dummyimage.com/450x400/dee6e4/4c757d.jpg",
      sale: false,
      rating: 3,
      AddedCart: true,
      amount:1
    },

    {
      id: '8',
      title: "Item8",
      mutedprice: "$40.00",
      price: "$39.00",
      img: "https://dummyimage.com/450x400/dee6e4/4c757d.jpg",
      sale: true,
      rating: 3,
      AddedCart: true,
      amount:1
    },
  ];

  const [cart, setCart] = useState([]);
  const handleClick = (product,id) => {
  
    setCart([...cart, product]);
    document.getElementById("btn"+id).disabled=false;
    document.getElementById("btn"+id).style.opacity = "1";
    document.getElementById("btnadd"+id).disabled=true;
    document.getElementById("btnadd"+id).style.opacity = "0.5";
  };

  const size = cart.length;



  return (
    <div className="App">
      <Navbar size={size} />
      <Header />
      <div className="container Product">
        <div className="row">
          {data.map((pr) => (
            <Product
              key={pr.id}
              id={pr.id}
              product={pr}
              amount={pr.amount}
              sale={pr.sale}
              handleClick={handleClick}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default App;

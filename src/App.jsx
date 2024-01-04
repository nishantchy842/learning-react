import "./App.css";
import HomeOne from "./home";
import { Header } from "./container/header";
import Test from "./test";
// import Navbar from "./header";
import { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import FirstUseState from "./practise/firstUseState";
import Product from "./container/product/product";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./home";
import ProductDetailsPage from "./container/product/productDetailPage";
import Navbar from "./component/navBar";
import Form from "./container/form/form";
import PageNotFound from "./container/pageNotFound";
import RefLearning from "./container/refLearning";
import TodoApp from "./container/todo";

const App = () => {
  //javascript code
  const [fullName, setFullName] = useState({});

  const handleFullName = (e) => {
    let fullName = e.target.value;
    let splitText = fullName.split(" ");

    console.log(splitText);

    if (splitText.length === 2) {
      setFullName({
        firstName: splitText[0],
        lastName: splitText[splitText.length - 1],
      });
    }
  };
  //
  // //slice method
  // //join method array method
  // ['sipalay','info','tech','balkumari']
  // {
  //   firstName: 'sipalay info tect',
  //   lastName:'balkumari'
  // }

  const originalProductList = [
    {
      name: "Cooker",
      price: 30,
      image: "https://m.media-amazon.com/images/I/51XzoKlhEBL.jpg",
      backgroundColor: "orange",
      isLiked: false,
      count: 0,
    },
    {
      name: "Ball",
      price: 31,
      image:
        "https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png",
      backgroundColor: "grey",
      isLiked: true,
      count: 20,
    },
    {
      name: "Keybord",
      price: 3000,
      image:
        "https://www.pngkey.com/png/full/429-4290320_redragon-k579-mechanical-gaming-keyboard-wired-rgb-iball.png",
      backgroundColor: "pink",
      isLiked: true,
      count: 0,
    },
    {
      name: "HeadPhone",
      price: 3500,
      image:
        "https://cdn.shopify.com/s/files/1/0573/2309/4216/products/LosAngeles_SandGold_001.png?v=1650876856",
      backgroundColor: "orange",
      isLiked: false,
      count: 30,
    },
  ];
  const navigate = useNavigate();
  const [role, setRole] = useState("USER");
  const handleRole = (role) => {
    setRole(role);
    localStorage.setItem("role", role);
    // if (role === "ADMIN") {
    //   navigate("/");
    // } else {
    //   navigate("/product");
    // }
  };
  let localData = localStorage.getItem("role");
  console.log(localData);
  return (
    <div className="App">
      <Navbar />
      <button onClick={() => handleRole("USER")}>User</button>
      <button onClick={() => handleRole("ADMIN")}>Admin</button>
      {role} <br />
      {localData === "USER" ? (
        <Routes>
          <Route
            path="/product"
            element={<Product data={originalProductList} />}
          />
          <Route path="/product/1" element={<ProductDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/ref" element={<RefLearning />} />
          <Route path="/form" element={<Form />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/ref" element={<RefLearning />} />
          <Route path="/form" element={<Form />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      )}
    </div>
  );
};

export default App;

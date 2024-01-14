import "./App.css";
// import HomeOne from "./home";
// import { Header } from "./container/header";
// import Test from "./test";
// import Navbar from "./header";
import { useEffect, useState } from "react";
// import { FaBeer } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";

// import FirstUseState from "./practise/firstUseState";
// import Product from "./container/product/product";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import Home from "./home";
// import ProductDetailsPage from "./container/product/productDetailPage";
import Navbar from "./component/navBar";
import TodoApp from "./container/todo";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "./redux/reducer";
import { Route, Routes } from "react-router-dom";
import LearningRedux from "./container/learningRedux";
import Learning from "./container/learningRedux/learning";
// import Form from "./container/form/form";
// import PageNotFound from "./container/pageNotFound";
// import RefLearning from "./container/refLearning";
// import TodoApp from "./container/todo";
// import State from "./container/hook/state";

const App = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(incrementCount(10));
  };
  const handleDre = () => {
    dispatch(decrementCount(20));
  };
  return (
    <div className="App">
      <Navbar />
      <TodoApp />
      <Routes>
        <Route path="/learning-redux" element={<LearningRedux />}></Route>
        <Route path="/todo-list" element={<Learning />}></Route>
      </Routes>
    </div>
  );
};

export default App;

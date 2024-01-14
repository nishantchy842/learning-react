import { Button } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../../redux/productReduces";
import { setBackgroundColor } from "../../redux/reducer";

export default function LearningRedux() {
  //useDispatch
  //useSelector

  const dispatch = useDispatch();

  const todoes = useSelector((state) => state.todo);

  const products = useSelector((state) => state.product);

  const { count, todo, playerDetails, box } = todoes;

  const handleCount = () => {
    dispatch(incrementCount(10));
  };

  const handleColor = () => {
    dispatch(setBackgroundColor("blue"));
  };
  return (
    <div>
      <p>{count}</p>
      {/* <div>
        {todo.map((item, id) => {
          return <p>{item}</p>;
        })}
      </div> */}

      <p>{playerDetails.name}</p>

      <Button onClick={handleCount}>count</Button>
      <Button onClick={() => handleCount()}>decrement</Button>
      <Button onClick={handleColor}>Blue</Button>

      <div style={todoes?.box}>fasdfasdfasdf</div>
    </div>
  );
}

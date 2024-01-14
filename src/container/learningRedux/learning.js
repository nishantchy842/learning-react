import React from "react";
import CustomeCard from "../../component/card";
import { useSelector } from "react-redux";

export default function Learning() {
  const todoList = useSelector((state) => state.todo);
  console.log(todoList?.todo, "todo llist");

  return (
    <div>
      {todoList.todo.map((item, id) => {
        return <CustomeCard item={item} />;
      })}
    </div>
  );
}

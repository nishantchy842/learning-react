import React, { useState } from "react";
import { Input, Space } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const { Search } = Input;

export default function Form() {
  const [todo, setTodo] = useState([]);

  // ['reading book','watching movie']
  //task
  // [
  //   {
  //     title:'reading book',
  //     completed:false
  //   },
  //   {
  //     title:'watching movie'
  //     completed:false,
  //   }
  // ]

  const onSearch = (value, _e, info) => {
    console.log(value, info, "value");
    setTodo([...todo, { title: value, completed: false }]);
  };
  console.log(todo, "todo");

  const handleDelete = (todoId) => {
    const copytodo = [...todo];
    let upatedTodo = copytodo.filter((item, id) => id !== todoId);

    setTodo(upatedTodo);
  };

  //updated

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Add"
        size="large"
        onSearch={onSearch}
      />
      {todo.map((item, id) => {
        return (
          <Space>
            <p>{item}</p>
            <MdDeleteForever onClick={() => handleDelete(id)} />
            <CiEdit />
          </Space>
        );
      })}
    </div>
  );
}

import React, { useState } from "react";
import { Input, Space } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Button, Modal } from "antd";
const { Search } = Input;

export default function Form() {
  const [todo, setTodo] = useState([]);
  const [updateValue, setUpdateValue] = useState("");
  const [updatedId, setUpatedId] = useState("");

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
    setTodo([...todo, value]);
  };
  console.log(todo, "todo");

  const handleDelete = (todoId) => {
    const copytodo = [...todo];
    let upatedTodo = copytodo.filter((item, id) => id !== todoId);

    setTodo(upatedTodo);
  };

  //updated

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (value, id) => {
    setIsModalOpen(true);
    setUpdateValue(value);
    setUpatedId(id);
  };
  const handleOk = () => {
    setIsModalOpen(false);

    const copyTodo = [...todo];
    copyTodo[updatedId] = updateValue;

    setTodo(copyTodo);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Add"
        size="large"
        onSearch={onSearch}
      />
      <div>
        {todo.map((item, id) => {
          return (
            <Space>
              <p>{item}</p>
              <MdDeleteForever onClick={() => handleDelete(id)} />
              <CiEdit onClick={() => showModal(item, id)} />
            </Space>
          );
        })}
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          defaultValue={updateValue}
          onChange={(e) => setUpdateValue(e.target.value)}
        />
      </Modal>
    </div>
  );
}

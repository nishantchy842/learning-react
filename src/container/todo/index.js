import React, { useState } from "react";
import { Button, Checkbox, DatePicker, Form, Input } from "antd";
import moment from "moment";
import { MdDelete, MdEdit } from "react-icons/md";
import { Space, Typography } from "antd";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
const { Text, Link } = Typography;
const { TextArea } = Input;

const TodoApp = () => {
  const [todo, setTodo] = useState([]);

  const { count } = useSelector((state) => state);

  const [update, setUpdate] = useState(null);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const data = {
      ...values,
      complete: values?.complete ? true : false,
    };
    if (update === null) {
      setTodo([...todo, data]);
    } else {
      const copyTodo = [...todo];

      copyTodo[update] = {
        ...copyTodo[update],
        title: data?.title,
        complete: data?.complete,
        date: data?.date,
      };

      setTodo(copyTodo);
      setUpdate(null);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleDelete = (indexId) => {
    let updateTodo = todo.filter((item, id) => id !== indexId);
    setTodo(updateTodo);
  };

  const handleChecked = (id, action) => {
    const copyTodo = [...todo];

    copyTodo[id] = { ...copyTodo[id], complete: !action };

    setTodo(copyTodo);
  };

  const onFill = (item, id) => {
    console.log(item, "item");
    form.setFieldsValue({
      title: item?.title,
      complete: item?.complete,
      description: item?.description,
      date: dayjs(item?.date),
    });
    setUpdate(id);
  };

  // git add .
  //git commit -m "commit your code"
  //git push origin main

  return (
    <div>
      {count}
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="description" name="description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item label="complete" name="complete" valuePropName="checked">
          <Checkbox></Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {update != null ? "Update" : "Submit"}
          </Button>
        </Form.Item>
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        {todo.map((item, id) => {
          return (
            <div className="todo">
              <Text delete={item?.complete === true ? true : false}>
                {item?.title}
              </Text>
              <p>{moment(item?.date).format("MMMM Do YYYY")}</p>
              <p>{item?.description}</p>
              <Checkbox
                checked={item?.complete}
                onChange={(value) => handleChecked(id, item?.complete)}
              ></Checkbox>
              <MdDelete onClick={() => handleDelete(id)} />
              <MdEdit onClick={() => onFill(item, id)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TodoApp;

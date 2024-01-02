import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const FirstUseState = (a) => {
  console.log(a, "props");

  const { name, lastName, image } = a;

  // props = {
  //   data:'hello i am children of app component'
  // }

  const obj = {
    name: "balen",
    lastName: "shah",
  };

  const [styles, setStyles] = useState({
    height: "100px",
    width: "100px",
    border: "1px solid red",
  });

  const handleChange = (value) => {
    const intoarray = value.split(":");

    setStyles({ ...styles, [intoarray[0]]: intoarray[1] });
  };

  return (
    <div style={{ display: "flex", border: "1px solid black", width: "200px" }}>
      <img src={image} width={100} height={100} alt="/" />
      <div>
        <p>{name}</p>
        <p>{lastName}</p>
      </div>
    </div>
  );
};

export default FirstUseState;

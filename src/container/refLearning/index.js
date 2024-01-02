import { useState, useEffect, useRef } from "react";

const RefLearning = () => {
  const [inputValue, setInputValue] = useState("");
  const inputElement = useRef();
  //   console.log(count);

  //   useEffect(() => {
  //     count.current = count.current + 1;
  //     // console.log("render");
  //     // setInputValue("render");
  //   });

  const focusInput = () => {
    console.log(inputElement.current.style.height);
    inputElement.current.style.height = "20px";
    inputElement.current.type = "password";
    inputElement.current.className = "input";

    inputElement.current.focus();
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        ref={inputElement}
        style={{ height: "50px" }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p ref={inputElement}>useRef</p>
      {/* <h1>Render Count: {count.current}</h1> */}
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};
export default RefLearning;

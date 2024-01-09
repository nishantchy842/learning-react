import React, { useEffect, useRef, useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1000);
  }, []);

  const testRef = useRef(10);

  //http methods
  //get post put patch delete

  //dependency if there is no dependency, execute infinitely
  //useState
  //useEffect
  //useRef
  //useCallback
  //useMemo
  //custome hook
  const handleRef = () => {
    console.log(testRef?.current.className);
    testRef.current.className = "update_classs";

    testRef.current.style.color = "blue";
  };

  const category = [
    {
      name: "category",
      subCategory: [
        {
          name: "subCategory3",
        },
      ],
    },
    {
      name: "categor1",
      subCategory: [
        {
          name: "subCategory2",
          subCategory: [
            {
              name: "third category",
            },
          ],
        },
      ],
    },
    {
      name: "categor2",
      subCategory: [
        {
          name: "subCategory5",
        },
      ],
    },
  ];

  const [categori, setCategory] = useState(category);

  const handleIncrement = (action) => {
    if (action === "inc") {
      let sum = count + 1;
      setCount(sum);
      //   console.log(sumV, "sum");
    } else {
      let sum = count - 1;
      setCount(sum);
    }

    if (count === 10) {
      setCount(0);
    }
  };

  return (
    <div ref={testRef} className="ref">
      {/* <p className=" font-[700] text-[32px]"> {testRef.current}</p> */}
      <p className="font-[600] text-[40px]">{count}</p>
      {categori.map((item, id) => {
        return (
          <div key={id}>
            <p>Main category</p>
            <p>{item?.name}</p>
            {/* <p>Sub Category</p> */}
            {item.subCategory.map((sub) => {
              return <p>{sub?.name}</p>;
            })}
          </div>
        );
      })}
      <button onClick={() => handleIncrement("inc")}>Increment</button>
      <button onClick={() => handleIncrement("dec")}>decrement</button>
    </div>
  );
}

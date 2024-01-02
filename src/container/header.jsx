import Home from "../home";
import "./header.css";

export const Header = (props) => {
  console.log(props, "hearder");

  // props = {
  //   data: {
  //     name: "football",
  //     playerName: "messi",
  //     tournament: "world cup",
  //     year: "2023",
  //   },
  // role:'user',
  // address:'ktm',
  //increment: incrementCount(),
  //count: '12'
  // };

  const { data, role, address, increment, count } = props;

  console.log(typeof increment, "function");

  const { name, playerName, tournament, year } = data;

  return (
    <div className="header">
      {count}
      {role === "user" ? "this is first component" : "this is second component"}
      <p onClick={increment}>{name}</p>
      <p>{playerName}</p>
      <p>{tournament}</p>
      <p>{year}</p>
      <form>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </form>
    </div>
  );
};

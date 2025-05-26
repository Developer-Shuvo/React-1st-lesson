import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> React Jurney Start</h1>
      <Person></Person>
    </>
  );
}

function Person() {
  const age = 22;
  const money = 500;
  const name = ["John", "Doe", "Smith"];
  return <h2>My Name is {name[0]} and I am {age} Years Old and I have {money} $</h2>;
}

export default App;

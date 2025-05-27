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
      <div></div>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Device name="Laptop" price ="20000 Taka"></Device>
      <Device name="Desktop" price ="80000"></Device>
      <Device name="Macbook" price ="200000"></Device>
    </>
  );
}
// ______________Person Component____________________
function Person() {
  const age = 22;
  const money = 500;
  const name = ["John", "Doe", "Smith"];
  return (
    <>
      <h2>My Name is: {name[1]}</h2>
      <h2>I am {age} years old</h2>
    </>
  );
}
// ______________Student Component____________________
function Student() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button
        style={{
          backgroundColor: "yellow",
          color: "black",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
        onClick={() => setShowDetails(true)}
      >
        Show Details
      </button>
      {showDetails && (
        <div className="showDetails">
          <h2 style={{ color: "yellow", fontSize: "40px" }}> Name: Shuvo</h2>
          <h3 style={{ color: "lightgreen", fontSize: "30px" }}>
            Profession: Front End Developer
          </h3>
        </div>
      )}
    </div>
  );
}

// ______________Developer Component____________________
function Developer (){
  const titleStyle = {
    color : "darkblue",
    fontSize: "28px",
    fontWeight: "bold",  //added style in here
  }
  const developerStyle = {
    backgroundColor: "lime",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    marginTop: "40px",
    color: "black",
  }
  return(
    <div style={developerStyle}> 
      <h2 style={titleStyle}>Web Application Development</h2>
      <h3>i have to learn React, Node.js, and MongoDB</h3>
    </div>
  )
}

function Device (props){
  return(
    <div style={{border:"2px solid black", padding:"20px", margin:"20px" , backgroundColor:"white", borderRadius:"10px"}}>
      <h2 style={{color:"red"}}>Device : {props.name}</h2>
      <h2 style={{color:"yellowgreen"}}>Price : {props.price}</h2>
    </div>
  )
}

export default App;

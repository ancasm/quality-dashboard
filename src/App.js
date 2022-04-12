import React from "react";
import logo from "./logo.svg";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "roboto",
      }}
    >
      <img src={logo} style={{width: "100px"}} alt="Quality Logo"/>
      <h1 style={{ color: "#6EC177", margin: 0 }}>
        Quality Financial Dashboard.
      </h1>
      <p>an example</p>
    </div>
  );
};

export default App;

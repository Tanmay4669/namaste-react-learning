import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => <h1 className="head">Namaste React!!!</h1>;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>Namaste React using Functional Component</h1>
    </div>
  );
};

root.render(<HeadingComponent />);

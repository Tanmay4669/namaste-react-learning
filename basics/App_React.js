import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {
//     id:"head",
// }, "Hello World from React!");

// console.log(heading); //object


{
  /* <div id="parent">
    <div id="child1">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
    </div>
    <div id="child2">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
    </div>
</div> */
}

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", { id: "heading_1" }, "Heading 1"),
//     React.createElement("h2", { id: "heading_2" }, "Heading 2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "heading_1" }, "Heading 1"),
//     React.createElement("h2", { id: "heading_2" }, "Heading 2"),
//   ]),
// ]);

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

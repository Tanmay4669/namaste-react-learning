# Assignment 8

### 1. How do you create Nested Routes react-router-dom cofiguration?

- To create nested routes in a React application using `react-router-dom`, you define routes within routes. This allows you to structure your UI hierarchically with corresponding URLs.

- Here's a basic example:

  ```jsx
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

  const ParentComponent = () => {
    return (
      <div>
        <h1>Parent Component</h1>
        <Switch>
          <Route path="/parent/child1">
            <ChildComponent1 />
          </Route>
          <Route path="/parent/child2">
            <ChildComponent2 />
          </Route>
        </Switch>
      </div>
    );
  };

  const ChildComponent1 = () => {
    return <h2>Child Component 1</h2>;
  };

  const ChildComponent2 = () => {
    return <h2>Child Component 2</h2>;
  };

  const App = () => {
    return (
      <Router>
        <Switch>
          <Route path="/parent">
            <ParentComponent />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </Router>
    );
  };

  export default App;
  ```

- In this example, `ParentComponent` has nested routes for `/parent/child1` and `/parent/child2`. When navigating to `/parent`, React renders `ParentComponent`, and based on the nested routes, either `ChildComponent1` or `ChildComponent2` is displayed depending on the URL path.

### 2. Read about createHashRouter, createMemoryRouter from React Router docs.

- ## createHashRouter

  - `createHashRouter` is a router implementation in the React Router library. It utilizes the hash portion of the URL (hash fragments) to synchronize the UI with the URL. This router is commonly used in applications that do not support server-side rendering or need to accommodate older browsers lacking full support for the HTML5 History API.

    - ### Example:

      ```jsx
      import { createHashRouter } from "react-router-dom";

      const App = () => {
        return <createHashRouter>{/* Your routes go here */}</createHashRouter>;
      };

      export default App;
      ```

- ## createMemoryRouter

  - `createMemoryRouter` is another router implementation provided by React Router. Unlike traditional routers, it does not rely on the browser's URL location but instead manages navigation state entirely in memory. This makes it particularly useful for testing purposes or for applications that need to manage navigation independently from the browser's history.

    - ### Example:

      ```jsx
      import { createMemoryRouter } from "react-router-dom";

      const App = () => {
        return (
          <createMemoryRouter>{/* Your routes go here */}</createMemoryRouter>
        );
      };

      export default App;
      ```

- Both `createHashRouter` and `createMemoryRouter` offer similar functionality to the traditional `BrowserRouter` but provide different approaches to managing navigation within React applications based on specific use cases and requirements.

### 3. What is the order of life cycle method calls in Class Based Components?

- In a class-based React component, the lifecycle methods are called in a specific order during the component's lifecycle. Here is the typical order of lifecycle method calls:

  - **Mounting Phase:**

    - `constructor()`: This is called when an instance of the component is being created.
    - `static getDerivedStateFromProps()`: This is called right before rendering when new props are received.
    - `render()`: This method is mandatory and must be implemented. It returns the JSX to be rendered.
    - `componentDidMount()`: This is called after the component is mounted (inserted into the tree). It's commonly used for initialization tasks and network requests.

  - **Updating Phase:**

    - `static getDerivedStateFromProps()`: This is called again when new props are received, after the initial rendering but before rendering when receiving new props or updating state.
    - `shouldComponentUpdate()`: This is called before rendering when new props or state are being received. It allows for optimizations by determining if the component needs to re-render.
    - `render()`: This is called again to re-render the component if `shouldComponentUpdate()` returns true.
    - `getSnapshotBeforeUpdate()`: This is called right before the changes from the Virtual DOM are to be reflected in the DOM. It allows you to capture some information from the DOM before it is potentially changed.
    - `componentDidUpdate()`: This is called after the component is re-rendered due to changes in props or state. It's commonly used for side effects like fetching data based on prop changes.

  - **Unmounting Phase:**

    - `componentWillUnmount()`: This is called just before the component is unmounted (removed from the tree). It's used for cleanup tasks like removing event listeners or cancelling network requests.

  - **Error Handling Phase:**

    - `static getDerivedStateFromError()`: This is called when an error has been thrown during rendering. It allows the component to update its state in response to the error.
    - `componentDidCatch()`: This is called after an error has been thrown during rendering, allowing the component to perform side effects or log the error information.

- It's worth noting that some lifecycle methods are considered legacy and may be deprecated in future versions of React. Additionally, with the introduction of Hooks in React 16.8, there are alternatives to class-based components and lifecycle methods.

### 4. Why do we use componentDidMount?

- The `componentDidMount()` lifecycle method in React class components is used for performing tasks that require interaction with the DOM or other external APIs after the component has been mounted (inserted into the tree).

- Here are the common use cases for `componentDidMount()`:

  1. **Initialization**
  2. **Data Fetching**
  3. **DOM Manipulation**
  4. **Third-party Libraries Integration**

### 5. Why do we use componentWillUnmount? Show with example

- We use the `componentWillUnmount()` lifecycle method in React class components to perform cleanup tasks before the component is unmounted and destroyed. This is useful for tasks like removing event listeners, cancelling network requests, or clearing timers to prevent memory leaks and ensure that resources are properly cleaned up when the component is no longer needed.

- Here's an example of how `componentWillUnmount()` can be used:

  ```jsx
  import React, { Component } from "react";

  class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.timerID = null;
    }

    componentDidMount() {
      this.timerID = setInterval(() => {
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID); // Cleanup: stop the timer
    }

    render() {
      return (
        <div>
          <h1>Timer</h1>
          <p>Seconds elapsed: {this.state.count}</p>
        </div>
      );
    }
  }

  export default Timer;
  ```

- In this example, the `Timer` component sets up a timer when it's mounted using `componentDidMount()`. The timer increments a count every second. However, to prevent memory leaks, we need to stop the timer when the component is unmounted. We achieve this by clearing the interval in the `componentWillUnmount()` method. This ensures that the timer is stopped and resources are properly cleaned up when the component is removed from the DOM.

### 6. (Research) Why do we use super(props) in constructor?

- In React, `super(props)` is used in the constructor of a class component to call the constructor of the parent class (i.e., the `Component` class from React). This is necessary if the component needs to access `this.props` within its constructor or if it needs to pass `props` to the constructor of the parent class.

- Here's why we use `super(props)`:

  - **Accessing Props**:

    - When you want to access `this.props` within the constructor to initialize state based on props, you need to call `super(props)` to ensure that the `props` are available within the constructor.

  - **Passing Props to Parent Constructor**:
    - If the parent class has its own constructor that accepts `props` as an argument (which is often the case in React components), you need to pass `props` to the parent constructor using `super(props)` to ensure that the parent class is properly initialized with the props.

### 7. (Research) Why can't we have the callback function of useEffect async?

- In React's `useEffect` hook, you can't make the callback function asynchronous directly because the return value of the callback function is expected to either be undefined or a cleanup function.

- Here's why you can't make the callback function of `useEffect` async directly:

  1. **Cleanup Function**:

     - The return value of the callback function in `useEffect` is expected to be either undefined or a cleanup function.
     - If the callback function is async, it will implicitly return a promise, which is neither undefined nor a cleanup function, leading to unexpected behavior.

  2. **Synchronization**:

     - `useEffect` is designed to handle side effects synchronously after rendering.
     - Making the callback function async would introduce asynchronicity, which could lead to unpredictable behavior and potential race conditions, especially when managing state and props changes.

- However, you can still use asynchronous code inside the `useEffect` callback by defining an async function inside the callback and invoking it immediately:

  ```javascript
  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const result = await fetch("https://api.example.com/data");
          // Handle data fetching
        } catch (error) {
          // Handle error
        }
      };

      fetchData();
    },
    [
      /* dependency array */
    ]
  );
  ```

- By defining an async function and invoking it immediately inside the `useEffect` callback, you can effectively use asynchronous code while adhering to the synchronous nature of `useEffect`.

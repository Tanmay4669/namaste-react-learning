# Assignment 11

### 1. What is prop drilling?

- **Prop drilling** in React refers to passing data (through props) down multiple nested component levels until it reaches the component that actually needs it.

- Imagine a deep nest of components where data needs to travel from the topmost grandpa component all the way down to the grandchild component. Each child component in between just acts as a relay station, passing the data down without using it itself.

- This can become cumbersome and error-prone as your application grows.

### 2. What is lifting the state up?

- **Lifting state up** in React is a technique for managing shared state between components. It involves moving the state from a child component to its closest common ancestor component that needs it.

- Here's the benefit:

  - **Single Source of Truth**: The common ancestor component becomes the central authority for the shared state, ensuring consistency and avoiding data conflicts.

- Imagine two sibling components needing the same data. Lifting the state up to their parent keeps the data in sync and avoids prop drilling through multiple levels.

### 3. What is Context Provider and Context Consumer?

- **In React**, the **Context API** provides a way to share data across components without explicitly passing props down through every level. It involves two parts:

  - **Context Provider**: This component creates a context, which acts like a central store for the data. You wrap the part of your component tree that needs access to the data with the Provider component. The Provider takes the data you want to share as a prop (value).

  - **Context Consumer**: This component allows child components to access the data from the nearest Context Provider above them in the component tree. You can use either a render prop function or a hook (`useContext`) to retrieve the data from the context.

- Here's the benefit:

  - **Avoids Prop Drilling**: You can share data across components without passing props through every level, making your component hierarchy cleaner and easier to manage.

### 4. If you don’t pass a value to the provider does it take the default value?

- Yes, if you don't pass a value to the Context Provider, it will take the default value.

- When creating a context using `createContext()`, you can provide a default value as an argument. This default value will be used by the Context Provider if no value is explicitly provided to it.

- Here's an example:

  ```jsx
  import React, { createContext } from "react";

  // Create a context with a default value
  const MyContext = createContext("Default Value");

  // Using the Context Provider without providing a value
  function App() {
    return (
      <MyContext.Provider>
        {/* Components consuming the context */}
      </MyContext.Provider>
    );
  }
  ```

- In this example, since no value is provided to the `MyContext.Provider`, it will use the default value `'Default Value'` specified when creating the context. Components consuming the context will receive this default value if no other value is provided by a higher-level provider in the component tree.

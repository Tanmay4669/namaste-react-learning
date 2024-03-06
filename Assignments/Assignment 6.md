# Assignment 6

### 1. What is a Microservice?

1.  Imagine a large restaurant with a complex menu. Instead of having one giant kitchen handling everything, the kitchen is divided into smaller stations, each responsible for a specific part of the meal.

    - One station might handle appetizers, another handles main courses, and another handles desserts.
    - Each station has its own dedicated chefs and cooks who are experts in their area.
    - When an order comes in, the wait staff relays it to the different stations, and each station prepares its assigned part of the order.
    - Finally, all the components are assembled and delivered to the customer.

2.  This is similar to a microservice architecture. In software development, **microservice is a small, independent service that performs a specific task**.

3.  Here's how it translates to the real-life example:

- The **restaurant** is the **application**.
- Each **kitchen station** is a **microservice**.
- The **wait staff** is the **API (Application Programming Interface)**, which acts as a messenger between the different services.
- The **chefs and cooks** are the **developers** who maintain and update each microservice.
- An order is a user request.
- Each **microservice** prepares its assigned part of the response (like preparing the appetizer or the main course).
- Finally, the **services communicate** to **assemble the final response** and deliver it to the user.

### 2. What is Monolith architecture?

1. A traditional software design where all components (user interface, business logic, data access) are bundled tightly together into a single application.
2. Think of a giant department store where all sections (clothing, electronics, etc.) operate within one building and under a single management team.

### 3. What is the difference between Monolith and Microservice?

1. #### Monolithic Architecture

   - Entire application as a single unit.
   - Tight coupling between components.
   - Scaling involves replicating entire application.
   - Simple development but can become complex to maintain.

2. #### Microservices Architecture

   - Application broken into smaller, independent services.
   - Loose coupling between services.
   - Granular scalability.
   - Faster development cycles and easier maintenance.

3. We Choose between them based on factors like application size, scalability needs, and development team structure.

### 4. Why do we need a useEffect Hook?

- **Side Effect Management**: `useEffect` allows functional components to perform side effects, such as data fetching or DOM manipulation, which are essential in many applications.
- **Lifecycle Management**: It provides a way to execute code at specific points in the component's lifecycle, like after the component mounts, updates, or unmounts.

- **Asynchronous Operations**: `useEffect` facilitates asynchronous operations without blocking the rendering of the component, ensuring smooth user experiences.

- **Dependency Tracking**: It accepts a dependency array to specify values that the effect depends on. React re-runs the effect whenever these dependencies change, ensuring synchronization with component state.

- **Cleanup**: `useEffect` enables cleanup tasks, like unsubscribing from subscriptions or clearing timers, when the component unmounts or when dependencies change.

- In summary, useEffect is crucial for managing side effects, handling asynchronous operations, tracking dependencies, and performing cleanup tasks in React functional components.

### 5. What is Optional Chaining?

1. Optional chaining is like a shortcut in JavaScript that helps us get things from inside objects or arrays without worrying if something in between is missing.

2. It's like using a safe path to reach for what we want.

3. If we use it and find something missing along the way, instead of throwing an error, it just gives us `undefined`.

For example:

```javascript
const result = obj?.property?.nestedProperty;
```

4. In this code, `result` will be the value of `obj.property.nestedProperty` if all of them exist, or `undefined` if any of them is missing. So, it's a handy way to navigate through nested data without causing errors.

### 6. What is Shimmer UI?

1. Shimmer UI is a technique used in apps and websites to show that content is loading.

2. It involves animating placeholder elements, like moving lines or gradients, to give the impression of activity.

3. It's created using CSS or animation libraries. Shimmer UI helps manage user expectations by providing visual feedback during content loading.

### 7. What is the difference between JS expression and JS statement?

- **JavaScript Expression:**

  - Produces a value.
  - Examples:
    - `5 + 3` (produces the value `8`)
    - `x` (produces the value stored in the variable `x`)
    - `myFunction()` (produces the return value of the function `myFunction()`)

- **JavaScript Statement:**

  - Performs an action or controls program flow.
  - Examples:
    - Variable declaration: `var x = 5;`
    - Function declaration: `function myFunction() { }`
    - Conditional statement: `if (x === 5) { }`
    - Loop statement: `for (var i = 0; i < 5; i++) { }`

- In short, expressions produce values, while statements perform actions or control program flow in JavaScript.

### 8. What is Conditional Rendering? Explain with a code example.

1. Conditional rendering involves displaying different content or components based on certain conditions or criteria in an application.

2. It allows developers to dynamically control what appears on the screen depending on the state of the application or specific variables.

3. Here's a simple example in JavaScript using React:

```jsx
import React from "react";

function ExampleComponent({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>;
}
```

4. In this example, the component `ExampleComponent` renders different messages based on the value of the `isLoggedIn` prop. If `isLoggedIn` is `true`, it displays "Welcome back!", otherwise, it shows "Please log in."

### 9. What is CORS?

1. CORS (Cross-Origin Resource Sharing) is like a gatekeeper in web browsers that ensures websites play nice with each other.

2. Imagine each website is a house with its own gate. CORS checks if one house (website) wants to access something in another house (website).

3. If the owners of both houses agree, CORS opens the gate, and data can flow safely between them.

4. But if there's no agreement, CORS keeps the gate closed to prevent unauthorized access and protect users' data from being stolen or misused.

5. It's a security feature that helps maintain the integrity and privacy of web applications.

### 10. What is async and await?

- **async Function**: The `async` keyword is used to define a function as asynchronous. An async function always returns a promise, and the value of the promise will be whatever the async function returns explicitly, or it will be resolved with the value the async function resolves to.

  ```javascript
  async function myFunction() {
    return "Hello";
  }
  ```

- **await Operator**: The `await` keyword is used to pause the execution of an async function until a promise is resolved. It can only be used inside an async function. When `await` is used, the function will wait for the promise to settle (either resolve or reject) and will then resume execution.

  ```javascript
  async function myAsyncFunction() {
    const result = await someAsyncOperation();
    console.log(result);
  }
  ```

- Here, `myAsyncFunction` will wait for `someAsyncOperation` to complete, and then it will continue with the execution.

- Using `async` and `await` together simplifies working with asynchronous code, especially when dealing with promises. It helps avoid nested callback structures (known as "callback hell") and makes asynchronous code more readable and maintainable.

- In summary, `async` marks a function as asynchronous, allowing it to return a promise, while `await` pauses the execution of an async function until a promise is settled, making it easier to work with asynchronous operations in JavaScript.

### 11. What is the use of `const json = await data.json();` in getRestaurants()?

- The line `const json = await data.json();` in the `getRestaurants()` function is used to parse the response data received from an asynchronous operation as JSON format.

- Here's a breakdown of what it does:

  1. `data.json()`: This is a method provided by the Fetch API (commonly used to make HTTP requests in JavaScript) that parses the response body as JSON format. It returns a promise that resolves to the JSON representation of the response body.

  2. `await`: The `await` keyword is used to pause the execution of the `getRestaurants()` function until the promise returned by `data.json()` is resolved. This ensures that the function doesn't proceed to the next line of code until the JSON data is fully parsed.

  3. `const json = ...`: Once the promise is resolved and the JSON data is available, it is assigned to the variable `json`. This variable can then be used to access the parsed JSON data and work with it further within the `getRestaurants()` function.

- In summary, `const json = await data.json();` is used to asynchronously parse the response data received from a Fetch API request as JSON format, allowing the function to work with the parsed JSON data in a convenient manner.

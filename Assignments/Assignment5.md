# Assignment 5

### 1. What is the difference between Named Export, Default export and \* as export?

1.  Named Export: Exports multiple values with custom names, imported with specific names (e.g., `export const add = (a, b) => a + b; import { add } from "./math";`).

2.  Default Export: Exports only one value, imported with any name (e.g., `export default function sayHello() { ... }; import Hello from "./greetings";`).

3.  **\* as export:** Imports all exports from a module into a single object variable (e.g., `export * from "./utils"; import allUtils from "./utils";`).
4.  Remember, use named exports for multiple named values, default for one main value, and \* as export for importing everything in bulk.

### 2. What is the importance of config.js file?

1. A config.js file acts as the central hub for configuring different aspects of your application or project.

2. It stores and manages essential settings like API keys, environment variables, theme preferences, and other configurations needed for your code to run properly.

3. Think of it as the blueprint or recipe for your project, keeping everything organized and easily accessible in one place.

4. This improves maintainability, flexibility, and collaboration, especially when working with teams or sharing configurations across environments.

### 3. What are React Hooks?

1. React Hooks are like tools you can "hook into" React features without needing a class component.

2. Imagine React as a kitchen and your components as recipes. Usually, you need special pots and pans (classes) to do certain things. Hooks are like handy gadgets that let you do those things even with a simple mixing bowl (function component).

   - Need to remember ingredients? Use the useState hook to store and edit data.
   - Want to preheat the oven before baking? Use the useEffect hook for timing and actions.
   - Have a secret sauce recipe? Create a custom hook to share it across all your dishes!

3. Hooks bring the power of classes to function components, making your React code simpler and more flexible.

### 4. Why do we need a useState Hook?

1. Function components in React are stateless by default, but sometimes you need data that reacts to user actions or changes from external sources. That's where useState comes in! It serves as your memory bank for function components, letting you:

   - Store and update internal data: Think of it like a variable that changes within your component, influencing its behavior and rendering.
   - Trigger re-renders: When you update the state with useState, your component refreshes with the new information, keeping your UI in sync.
   - Manage complex state logic: You can chain and combine state updates for dynamic and responsive interfaces.

2. Without useState, function components wouldn't be as versatile as class components with their built-in state management. It's the key to adding interactivity and dynamic behavior to your React creations!

3. Imagine your React component as a magic trick. You want to pull a rabbit out of a hat, but the hat is empty! useState is your secret stash. It lets you:

   - Store the rabbit (your data): Think of it like a hidden compartment in the hat.
   - Make the rabbit appear (update the UI): When you want to reveal the rabbit (change the data), useState tells the audience (your component) to refresh and see the magic (updated UI).
   - Change the rabbit (update data further): Need a different, bigger rabbit? Update the state with useState and voilà!

4. Basically, useState lets you remember things within your component and magically transform them into changes you see on the screen. No more boring empty hats!

# Assignment 7

### 1. What are various ways to add images into our App? Explain with code examples?

There are several ways to add images to a web application. Here are the most common methods along with code examples:

1. **Using the `<img>` Tag**:

   - The simplest way to display an image is by using the HTML `<img>` tag.
   - Specify the `src` attribute with the path to the image file.
   - Example:
     ```html
     <img src="path/to/image.jpg" alt="Description of the image" />
     ```

2. **Importing Images in JavaScript/TypeScript**:

   - In modern JavaScript/TypeScript applications, you can import images directly into your JavaScript or TypeScript files using module bundlers like Webpack or Parcel.
   - Example:

     ```javascript
     import imageSrc from "./path/to/image.jpg";

     function MyComponent() {
       return (
         <div>
           <img src={imageSrc} alt="Description of the image" />
         </div>
       );
     }
     ```

3. **Using CSS `background-image` Property**:

   - You can use CSS to set an image as the background of an element using the `background-image` property.
   - Example:

     ```css
     .background-image {
       background-image: url("path/to/image.jpg");
     }
     ```

     ```html
     <div class="background-image"></div>
     ```

4. **Inline Data URLs**:

   - You can encode images into a data URL and use them directly in your HTML or CSS.

   - **Example**:

     ```html
     <img src="data:image/jpeg;
     ```

### 2. What would happen if we do console.log(useState())?

1. If we do **console.log(useState())**, we get an array `[undefined, function]` where first item in an array is state is undefined and the second item in an array is setState function is bound `dispatchSetState`.

### 3. How will useEffect behave if we don't add a dependency array ?

1. Without a dependency array, the `useEffect` hook runs its effect function after every render, including the initial render.

2. This can lead to performance issues or unintended behavior if the effect function performs operations that don't need to run on every render.

3. It's important to include dependencies in the dependency array to control when the effect should run.

### 4. What is SPA?

1. SPA (Single Page Application) is a web application that dynamically updates the current page instead of loading entirely new pages from the server.

2. It offers a smoother user experience with seamless transitions, client-side routing, API-driven interactions, and responsive design.

3. SPAs are commonly built using JavaScript frameworks like React, Angular, or Vue.js and are ideal for applications requiring frequent updates and interactions without full page reloads.

### 5. What is difference between Client Side Routing and Server Side Routing?

- Here's a brief comparison between client-side routing and server-side routing:

  - **Client-Side Routing**:

    - Navigation handled by the client (browser) using JavaScript.
    - Updates URL and renders components without server requests.
    - Faster and smoother transitions within the browser.
    - Examples: React Router, Vue Router.

  - **Server-Side Routing**:
    - Navigation handled by the server.
    - Sends requests to the server for each URL change.
    - Full page reloads upon each request.
    - Examples: Traditional multi-page web applications.

- In summary, client-side routing happens within the browser, providing faster transitions, while server-side routing relies on the server and involves full page reloads.

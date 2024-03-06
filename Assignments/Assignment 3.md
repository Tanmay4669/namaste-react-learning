# Assignment 3

### 1. What is JSX?
1.  JSX is a syntax extension to JavaScript that allows you to write HTML-like code in your JavaScript files. 


### 2. Enlist Superpowers of JSX?
1. Expressive Syntax

2. Component-Based Development

3. Direct DOM Manipulation

4. Virtual DOM Optimization

5. Data Binding and Reactivity

6. Type Safety and TypeScript Support

7. Wide Community and Tooling

8. Declarative Style and Predictable Output

9. Accessibility Support

10. Cross-Platform Development

### 3. Role of type attribute in script tag? What options can I use there?
1. The type attribute in the script tag specifies the type of script being embedded. It informs the browser how to interpret the content within the script tags. This attribute is crucial for ensuring compatibility and proper execution of the embedded script.

2. Read the Question 16 of Assignment 2 for more details


### 4. ```{TitleCompoenent}``` vs ```{<TitleComponent />}``` vs ```{<TitleComponent> </TitleComponent>}``` in JSX?
1. In JSX, the curly braces and parentheses have specific meanings when defining and rendering React components. 

2. Here's a breakdown of the three expressions you provided:

    -   ```{TitleCompoenent}```:
        This expression refers to the TitleComponent itself, not an instance of the component. It's often used when importing a component and accessing its properties or methods within JSX code. 

    -   ```{<TitleComponent />}```: This expression renders an instance of the TitleComponent without passing any props. It's the most common way to use a React component in JSX, directly creating an instance and rendering it within the parent component's JSX code.

    -   ```{<TitleComponent> </TitleComponent>}```:This expression also renders an instance of the TitleComponent but encloses it in self-closing tags. It's generally not recommended and is considered redundant syntax, as JSX components don't require closing tags.

3. The preferred approach is to use parentheses for rendering components and curly braces for destructuring props or accessing component properties.

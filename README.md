# Todo App with React
### Final project for React Front End Class 

[React Front End Course Outline](https://learn.codethedream.org/cockatoo-react/)

Using the application user can add a new todos, delete existing ones, and sort todos in ascending and descending order. The application is designed to be user-friendly and easy to navigate.
Here is  a screenshot of the application in action:
![screenshot](./public/screenshot.png)
As you can see, the interface is simple and intuitive, with clear buttons and labels for adding, deleting, and sorting todos. With this application, users can easily keep track of their daily tasks and stay organized.

**[Click here](https://github.com/Code-the-Dream-School/react/wiki) to redirect to the Wiki for this repository.

### Dependencies
To create this todo application, several dependencies were used, including **create-react-app**, **react-router**, **Prop-Types**, **useEffect**, and **useMemo**.

- create-react-app is a command-line utility that sets up a React project with a modern build infrastructure. It provides a boilerplate configuration to start building the application and simplifies the development process by providing a live development server, optimized production build, and other useful features.

- react-router-dom is a routing library for React that allows the creation of single-page applications with multiple views. It enables navigation between components, URLs, and even external websites. With react-router-dom, the todo application has multiple views for adding, deleting, and sorting todos.

- Prop-Types is a runtime type-checking library for React props. It ensures that the props passed to a component match the expected type, and if not, it throws a warning in the console. Using Prop-Types helps to catch bugs early in the development process.

- useEffect is a React hook that runs side effects, such as fetching data or manipulating the DOM, after the component has rendered. It's used in the todo application to fetch and update the list of todos from a backend server.

- useMemo is another React hook that memoizes expensive computations, preventing unnecessary re-renders of components. It's used in the todo application to sort the list of todos in ascending or descending order based on the user's preference.


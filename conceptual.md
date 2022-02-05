### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
It is useful for single page applications and for managing the history states that
keeps the application (the data and the state) in sync with the browser URL. 

- What is a single page application?
A web app implementation that loads only a single web document, then updates the body 
content of the document via JS APIs. You can retrive data from a URL without having to 
do a full page refresh.

- What are some differences between client side and server side routing?
Server-side Routing: 
- Will only request the data needed. 
- Every request results in a full-page refresh, disgarding the old page.
- Everytime a link is clicked, it requests a new page from the server.

Client-side Routing:
- When a link is clicked, the URL changes but the request to the server is prevented. 
- Adjustment to the URL results in a changed state of the app that will render a 
different view of the page. (a differnent component, or a request to the server that 
the app will turn into HTML elements.)
- The whole page won't refresh. The page will change partially.

- What are two ways of handling redirects with React Router? When would you use each?
Using useNavigate, when a form is submitted or when a task is complete and we need to move to the next page.
Using redirect component, when you land on a wrong page, when routing to an error page.

- What are two different ways to handle page-not-found user experiences using React Router? 
Redirecting to a different page, rendering a 404 page.

- How do you grab URL parameters from within a component using React Router?
As of v5.1, React Router comes with a useParams Hook that returns an object with a mapping between the URL parameter and its value.

- What is context in React? When would you use it?
Context provides a way to pass data through the component tree without having to pass props down manually at every level. It can be used to authenticate user, theme, user preferences that we want to pass to other components
without having the user pass down their data to every component being rendered.

- Describe some differences between class-based components and function
  components in React.
 A functional component is just a plain JS function that returns JSX. On the other hand, a class component is a JS class that extends React.component that has a render method. 
 Handling state was only available in class-based components until React 16.8 React Hook was introduced in functional components.
 UseEffect is used for both mounting and unmounting where in class-based components methods such as; 
 componentWillUnmount, componentDidMount are used for mounting/unmounting component lifecycle.

- What are some of the problems that hooks were designed to solve?
Implementing the same funtionality by writing less code and creating custom hooks that can be shared 
across different components. 
# ReactJS-Redux

Redux is a state management library for JavaScript applications, commonly used with React. It helps manage the state of your application in a predictable way by using a central store. Here are the key concepts in Redux:

Store: The central place where the state of your application is kept. It is created using the createStore function.

Actions: Plain JavaScript objects that represent an intention to change the state. They must have a type property that indicates the type of action being performed.

Reducers: Functions that specify how the state changes in response to an action. They take the current state and an action as arguments and return the new state.

Dispatch: The method used to send actions to the store. When an action is dispatched, the store's reducer processes it and updates the state.

Selectors: Functions that extract and return a piece of the state from the store.

Middleware: Extensions that can be added to the Redux dispatch mechanism to handle side effects like asynchronous actions, logging, or crash reporting.

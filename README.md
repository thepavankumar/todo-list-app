Just practising to do application!


Online demo : https://todo-list-app-pavansuresh.vercel.app/




note : 
1) The code useState(Array(tasks.length).fill(false)) is using the useState hook in React to initialize a state variable with an array of false values!
The useState hook is used to declare a state variable and its initial value. In this case, the initial state is set to the array [false, false, false].

2) const updatedTasks = tasks.filter((_, i) => i !== index); in the App.js file is using the filter method to create a new array of tasks with one task removed.
(https://stackoverflow.com/questions/23903183/javascript-what-does-function-mean)
(_, i): In the function passed to filter, the first parameter is _, which is a convention in JavaScript to indicate an unused parameter. In this case, it's used because we're only interested in the index (i) of the array elements.
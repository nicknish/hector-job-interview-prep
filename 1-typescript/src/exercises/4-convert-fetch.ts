/**
 * Exercise 4: Lookup the API response and write the response types.
 */

interface Todo {}

function fetchTodo(): Promise<Todo> {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
}

// TODO: What if we want to fetch multiple todos?
function fetchTodos(): Promise<any> {
  return fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
}

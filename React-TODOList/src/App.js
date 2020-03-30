import React, { useCallback, useState, useEffect } from 'react';

// Functional Component
// function App() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// Should not use var at all!

const App =( ) => {
  // hooks go here!
  const[newTodo, setNewTodo] = useState('');
  const[todos, setTodos] = useState([]);

  const onNewTodoChange = useCallback((event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  }, []);

  const formSubmitted = useCallback((event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length+1,
        content: newTodo,
        done: false,
      }
    ]);
    setNewTodo('');
    console.log('Form was submitted!');
  }, [newTodo,todos]);

  useEffect(() => {
    console.log('todos', todos);
  }, [todos]);

  return (
    <div>
      <form onSubmit={formSubmitted}>
        <label htmlFor="newTodo">Enter a task:</label>
        <input 
          id="newTodo"
          name="newTodo"
          value={newTodo}
          onChange={onNewTodoChange}
        />
        <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

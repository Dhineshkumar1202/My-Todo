import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import StatusFilter from './components/StatusFilter';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo === updatedTodo ? updatedTodo : todo)));
  };

  const deleteTodo = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo !== todoToDelete));
  };

  const filteredTodos = todos.filter((todo) => {
    if (status === 'All') return true;
    return todo.status === status;
  });

  return (
    <div className="App">
      <h1>My todo</h1>
      <TodoForm addTodo={addTodo} />
      <StatusFilter status={status} setStatus={setStatus} />
      <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;

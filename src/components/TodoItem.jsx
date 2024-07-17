import React from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const handleStatusChange = (e) => {
    updateTodo({
      ...todo,
      status: e.target.value,
    });
  };

  return (
    <div>
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
      <p>Status:
        <select value={todo.status} onChange={handleStatusChange}>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </p>
      <button onClick={() => updateTodo({ ...todo, isEditing: true })}>Edit</button>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  );
};

export default TodoItem;

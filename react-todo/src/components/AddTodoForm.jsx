import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new todo"
        className="flex-1 border p-2 rounded-l"
        data-testid="todo-input"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r"
        data-testid="add-btn"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;

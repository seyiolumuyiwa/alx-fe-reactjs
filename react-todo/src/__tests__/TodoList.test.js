import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-btn');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass('line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByTestId('delete-btn');
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});

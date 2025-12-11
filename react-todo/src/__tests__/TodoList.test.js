import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

// Initial Render Test
describe('TodoList Component - Initial Render', () => {
  test('renders correctly with initial state', () => {
    render(<TodoList />);
    
    expect(screen.getByText('My Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master React Testing')).toBeInTheDocument();
  });
});

// Test Adding Todos
describe('TodoList Component - Adding Todos', () => {
  test('can add a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Simulate user input
    fireEvent.change(input, { target: { value: 'New Todo' } });
    
    // Simulate form submission
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });
});

// Test Toggling Todos
describe('TodoList Component - Toggling Todos', () => {
  test('can toggle todo between completed and not completed', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    
    // Initially not completed
    expect(todoText).toHaveStyle('text-decoration: none');
    
    // Click to complete
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Click to uncomplete
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none');
  });
});

// Test Deleting Todos
describe('TodoList Component - Deleting Todos', () => {
  test('can delete a todo', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
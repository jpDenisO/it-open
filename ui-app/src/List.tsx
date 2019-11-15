import React, { useState, useEffect } from 'react';
import API from './api';
import { Todo } from './model';
import AddNew from './AddNew';

const List: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo> | null>(null);
  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    const todos: Array<Todo> = await API.getTodos();
    setTodos(todos);
  }

  async function handleSubmit(newTodo: Partial<Todo>) {
    await API.createTodo(newTodo);
    fetchTodos();
  }

  if (!todos) return <div>loading...</div>;
  return (
    <div>
      <AddNew onSubmit={handleSubmit}></AddNew>
      <div>
        {todos.length ? (
          todos.map(({ id, name, description }) => (
            <div key={id}>
              {name}: {description}{' '}
              <button
                onClick={async () => {
                  await API.deleteTodo(id);
                  fetchTodos();
                }}>
                X
              </button>
            </div>
          ))
        ) : (
          <div>no todos yet</div>
        )}
      </div>
    </div>
  );
};

export default List;

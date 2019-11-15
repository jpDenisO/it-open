import React, { useState, useEffect } from 'react';
import API from './api';

interface Todo {
  name: string;
  priority: number;
  description: string;
  done: boolean;
}

const List: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo> | null>(null);

  useEffect(() => {
    (async () => {
      const todos: Array<Todo> = await API.getTodos();
      setTodos(todos);
    })();
  }, []);

  return <div>{todos}</div>;
};

export default List;

import React, { useState } from 'react';
import { Todo } from './model';

const AddNew: React.FC<{
  onSubmit: (newTodo: Partial<Todo>) => void;
}> = ({ onSubmit }) => {
  const [newTodoName, setNewTodoName] = useState<string>('');
  const [newTodoDescription, setNewTodoDescription] = useState<string>('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit({
          name: newTodoName,
          description: newTodoDescription,
          done: false,
          priority: 0
        });
        setNewTodoName('');
        setNewTodoDescription('');
      }}>
      <input
        type="text"
        name="name"
        placeholder="add name"
        value={newTodoName}
        onChange={(e: any) => setNewTodoName(e.target.value)}></input>
      <input
        type="text"
        name="description"
        placeholder="add description"
        value={newTodoDescription}
        onChange={(e: any) => setNewTodoDescription(e.target.value)}></input>
      <button type="submit">Create new</button>
    </form>
  );
};

export default AddNew;

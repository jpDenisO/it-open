export default class {
  static async getTodos(): Promise<any> {
    const res: Response = await fetch('/todos');
    const json = await res.json();
    return json;
  }

  static async getTodo(id: string): Promise<any> {
    const res: Response = await fetch(`/todos/${id}`);
    const json = await res.json();
    return json;
  }

  static async postTodo(data: object): Promise<any> {
    const res: Response = await fetch(`/todos/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    return json;
  }

  static async editTodo(id: string, data: object): Promise<any> {
    const res: Response = await fetch(`/todos/create/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    return json;
  }

  static async deleteTodo(id: string): Promise<any> {
    const res: Response = await fetch(`/todos/create/${id}`, {
      method: 'DELETE'
    });
    const json = await res.json();
    return json;
  }
}

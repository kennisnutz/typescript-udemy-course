import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  Todo with id: ${id} has a title of ${title},
  is it finished? ${completed}
  `);
};

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const completed = todo.completed;
  const title = todo.title;
  logTodo(id, title, completed);
});

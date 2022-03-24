import { Todo } from './models/todo';
import axios from 'axios';

//un metodo per il fetch senza axios

export async function getTodos(): Promise<Todo[]> {
  return await (await fetch('assets/db.json')).json();
}

//un metodo per il fetch con axios

export async function getTodosWithAxios(): Promise<Todo[]> {
  const res = (await axios.get<Todo[]>('assets/db.json')).data;
  return res;
}

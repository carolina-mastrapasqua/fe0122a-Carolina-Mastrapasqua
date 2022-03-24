import { Posts } from './models/posts';

export async function getPosts(): Promise<Posts[]> {
  return await (await fetch('assets/db.json')).json();
}

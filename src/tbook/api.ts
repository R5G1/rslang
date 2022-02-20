import { IWord } from '../audio/interfases';

export default class API {
  server = 'https://rss-lang-task.herokuapp.com/';

  getWords = async (group: number, page: number): Promise<Array<IWord>> => {
    const response = await fetch(`https://rss-lang-task.herokuapp.com/words?page=${page}&group=${group}]`);
    return response.json();
  };
}

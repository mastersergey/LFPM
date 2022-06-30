import { FilmType } from 'Components/FilmList/film-data';

export function useStorage() {
  function setItem(key: string, value: string | FilmType[]) {
    try {
      const item = JSON.stringify(value);
      localStorage.setItem(key, item);
    } catch (e) {
      console.log(e);
    }
  }

  function getItem(key: string) {
    const item = String(localStorage.getItem(key));
    return item !== 'user' || item !== null ? JSON.parse(item) : item;
  }

  return { setItem, getItem };
}

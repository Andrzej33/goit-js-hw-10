import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      if (response.status === 404) {
        Notify.failure('Oops, there is no country with that name', {
          showOnlyTheLastOne: true,
          clickToClose: true,
        });
        return [];
      }
      throw new Error(responce.status);
    }
    return response.json();
  });
}

import './css/styles.css';
import { fetchCountries } from './fecthCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.getElementById('search-box'),
  countries: document.querySelector('.country-list'),
  country: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));

function onCountryInput(evt) {
  evt.preventDefault();
  const name = refs.input.value.trim();
  clearPage();
  if (name !== '') {
    fetchCountries(name)
      .then(countries => {
        if (countries.length === 1) {
          createSingleCountry(countries);
        } else if (countries.length >= 2 && countries.length <= 10) {
          makeCountryList(countries);
        } else if (countries.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.',
            {
              showOnlyTheLastOne: true,
              clickToClose: true,
            }
          );
        }
      })
      .catch(error => {
        countries = [];
        console.log(error.message);
      });
  }
}

function makeCountryList(data) {
  const markup = data.reduce(
    (acum, country) =>
      (acum += `<li class=country-item>
             <img src="${country.flags.svg}" alt="${country.name.common} flag" width="30" height="20" />
            <p>${country.name.official}</p>
         </li>`),
    ''
  );
  refs.countries.innerHTML = markup;
}

function createSingleCountry(data) {
  const markup = data.reduce(
    (acum, country) =>
      (acum += `
    <img src="${country.flags.svg}" alt="${
        country.name.common
      } flag" width="40" height="30">
    <p>${country.name.official}</p>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Language: ${Object.values(country.languages)}</p>`),
    ''
  );
  refs.country.innerHTML = markup;
}

function clearPage() {
  refs.country.innerHTML = '';
  refs.countries.innerHTML = '';
}

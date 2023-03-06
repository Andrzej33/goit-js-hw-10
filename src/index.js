import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const f =
    fetch("https://restcountries.com/v3.1/all")
        .then(response => {
           
            return response.json();
        })
        .then(country => {
            console.log(country)
        })
        .catch(error => {
            console.log(error)
        })

// console.log(f)



// fetchCountries(name)
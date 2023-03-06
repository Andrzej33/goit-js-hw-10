import './css/styles.css';
import API from './fecthCountries';

const DEBOUNCE_DELAY = 300;



const refs = {
    input: document.getElementById('search-box')
}

refs.input.addEventListener('input', onCountryElected)

function onCountryElected(evt) {
    evt.preventDefault();
    API.fetchCountries(refs.input.value)
        .then(countries =>  
            console.log(countries)
        )
        .catch(catchError)
        // .finally(()=> {refs.input.value ='' })
}

// console.log(refs.input)

function catchError(error) {
console.log(error)
            alert('choose more specyfic country')
}




// console.log(f)



// fetchCountries(name)
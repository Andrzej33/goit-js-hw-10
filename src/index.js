import './css/styles.css';
// import { fetchCountries } from './fecthCountries';

const DEBOUNCE_DELAY = 300;



const refs = {
    input: document.getElementById('search-box')
}

refs.input.addEventListener('input', onCountryElected)

function onCountryElected(_evt) {
    // evt.preventDefault();
    const name = refs.input.value
    fetchCountries(name)
        .then(countries =>  
            console.log(countries))
            // // API.fetchCountries()
    //         // console.log(refs.input.value)
    //     )
    //     .catch(catchError)
    //     // .finally(()=> {refs.input.value ='' })
 }

// console.log(refs.input)

// function catchError(error) {
// console.log(error)
//             alert('choose more specyfic country')
// }




// console.log(f)



// fetchCountries(name)
function fetchCountries(name)  {
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => response.json())
       
}

// fetchCountries()
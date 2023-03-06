
export default { fetchCountries };


function fetchCountries(name) { 
   return fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages",)
       .then(response => 
           response.json())     
}

// export default { fetchCountries };


// export const fetchCountries = name => {
//     return fetch("https://restcountries.com/v2/name/${name}")
//         .then(response => {
//             if (!response.ok) {
//                 if (response.status === 404) {
//                     return [];
//                 }
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
// }

// ?fields=name,capital,population,flags,languages
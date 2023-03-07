const n={input:document.getElementById("search-box")};n.input.addEventListener("input",(function(t){(function(n){return fetch(`https://restcountries.com/v3.1/name/${n}`).then((n=>n.json()))})(n.input.value).then((n=>console.log(n)))}));
//# sourceMappingURL=index.929bc9d9.js.map

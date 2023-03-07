!function(){var n={input:document.getElementById("search-box")};n.input.addEventListener("input",(function(t){(function(n){return fetch("https://restcountries.com/v3.1/name/".concat(n)).then((function(n){return n.json()}))})(n.input.value).then((function(n){return console.log(n)}))}))}();
//# sourceMappingURL=index.8fdb94e8.js.map

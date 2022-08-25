const demo = document.querySelector(".demo");
const pokeApi = "https://pokeapi.co/api/v2/pokemon";

fetch(pokeApi)
  .then((response) => response.json())
  .then((json) => {
    const array = json.results;
    const count = document.querySelector(".count");
    const data = json.count;

    console.log(data);
    count.innerHTML = `Count: ${data}`;
    array.forEach((element) => {
      let name = element.name;
      let detail = element.url;
      console.log(name);
      demo.innerHTML += `
     <div class="card">
     <h3>${name}</h3>
     <a href="${detail}">Detail</a>
     </div>
     `;
    });
  });

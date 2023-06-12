const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "ayiCMcAoh67ChfmnoZ+H+g==HeozGflS1Mzbjp01";

const options ={
    method: "GET",
    headers:{
        "X-Api-Key":apiKey
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    // console.log("Clicked");
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    jokeEl.innerText = data[0].joke;
    console.log(data[0]);
}

btnEl.addEventListener("click", getJoke)
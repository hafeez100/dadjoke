const btnEl =document.getElementById("btn");
const jokeEl=document.getElementById("joke");

const apikey="i35x1kKHjmgn64OMNeQl8g==RC4mCnaottDGuBAx";

const options={
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    },
};

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
    jokeEl.innerText="Updating....";
    btnEl.disabled=true;
    btnEl.innerText="Loading....";
    const response=await fetch(apiURL,options);
    const data=await response.json();
    console.log(data[0].joke);
    btnEl.disabled=false;
    btnEl.innerText="Tell me a joke";
    jokeEl.innerText=data[0].joke;

}

btnEl.addEventListener("click",getJoke)
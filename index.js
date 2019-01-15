//Index.js

const Http = new XMLHttpRequest();
const url="http://dnd5eapi.co/api/spells/";
var results;

Http.onreadystatechange = (error)=>{
    results = Http.response;
    document.getElementById("data").innerHTML = results;
    console.log(Http.responseText)
}

Http.open("GET", url);
Http.send();
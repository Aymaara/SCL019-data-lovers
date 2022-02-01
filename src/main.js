import { filterdatadirector} from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = data.films;
let films= movies;
const container = document.getElementById("films.anime");
const images = (movies) =>{
  return `
  <section class = "containerCard" id="${movies.id}">
    <section class = "containerPoster">
      <img src= "${movies.poster}" class= "poster" >
      </section>
  </section>
  `
};
const boxImage = (films)=>{
  container.innerHTML = " ";
 films.forEach((newmovies)=>{
    container.innerHTML += images(newmovies);
  })
};
boxImage(films);


//filtro director-->
const filterdirector= document.getElementById("selectdirector");
const filterordenAZ= document.getElementById("selectordenAZ");
filterdirector.addEventListener("change", () => {
  let selectedDirect = filterdatadirector(movies, filterdirector.value,filterordenAZ.value);
  boxImage(selectedDirect);
 console.log(selectedDirect)
});

//filtro orden alfabetico
filterordenAZ.addEventListener("change", () => {
  let selectorden = filterdatadirector(movies,filterdirector.value,filterordenAZ.value);
  boxImage(selectorden);
 console.log(selectorden)
});

//filtro años

//peliculas

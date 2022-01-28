import { filterdatadirector} from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = data.films;
let films= movies;
const container = document.getElementById("films.anime");
//const  boxModal = document.getElementsByClassName("modal");
//const filterFilms = document.getElementById("selectFilm");

//const filterordenAZ=document.getElementById("selectordenAZ");
//const filteryear=document.getElementById("selectYear");



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
filterdirector.addEventListener("change", (event) => {
  let selectedDirect = filterdatadirector(movies, event.target.value);
  films = selectedDirect;
  boxImage(selectedDirect);
  addEvents();
});

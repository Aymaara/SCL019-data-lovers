import { filterdatadirector, sortData} from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = data.films;
let films= movies;
const container = document.getElementById("films.anime");
//const  boxModal = document.getElementsByClassName("modal");
//const filterFilms = document.getElementById("selectFilm");

const filterordenAZ=document.getElementById("selectordenAZ");
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
const filterordenAZ= document.getElementById("selectordenAZ");
filterdirector.addEventListener("change", (event) => {
  let selectedDirect = filterdatadirector(movies, event.target.value,filterordenAZ.value);
  films = selectedDirect;
  boxImage(selectedDirect);
  addEvents();
});

filterordenAZ.addEventListener("change", (event) => {
  let selectorden = filterdatadirector(movies, event.target.value,filterordenAZ.value);
  films = selectorden;
  boxImage(selectorden);
  addEvents();
});



/*//filtro orden
const arraymovies  = [sortData];
arraymovies.sort((a,b) => {a = a.toLowercase().title;
  
  b = b.toLowercase().title;
  if (a > b){ 
    return 0;
  }
  if (a < b){
    return -1;
  }
  console.log(arraymovies);
})
 
*/
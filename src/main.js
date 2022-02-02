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

//filtro peliculas y extracción de información(?)
for (let i = 0; i < movies.length; i++) {
  let arrayMovies = movies[i];
  filterFilms[filterFilms.length] = new Option(arrayMovies.title, arrayMovies.id);
  console.log(filterFilms);
};



//filtro director-->
const filterdirector= document.getElementById("selectdirector");
const filterordenAZ= document.getElementById("selectordenAZ");
//const filterYear = document.getElementById ("release_date")
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
//filterYear.addEventListener("change",() => {
    //let selectYear = filterdatadirector(movies,filterdirector.value,filterordenAZ.value,filterYear.value);
   //boxImage(selectYear);
  //console.log(selectorYear)
//});
//});



//filtro peliculas y extracción de información(?)
/*for (let i = 0; i < movies.length; i++) {
  let arrayMovies = movies[i];
  filterFilms[filterFilms.length] = new Option(arrayMovies.title, arrayMovies.id);
   console.log(filterFilms);
 };
 
filterFilms.addEventListener('change', function () {
  let valueFilm = filterFilms.options[filterFilms.selectedIndex].value;
  let filmSelected= filterdata (movies,valueFilm)

  for (let i = 0; i < filmSelected.length; ++i) {
    let filmArray = filmSelected[i],
      titleFilm = filmArray.title,
      descriptionFilm = filmArray.description,
      directorFilm = filmArray.director,
      posterFilm = filmArray.poster,
      dateFilm = filmArray.release_date,
      rtScoreFilm = filmArray.rt_score;

    document.getElementById("TarjetaFilmP").innerHTML = ("Título: " + titleFilm + "<br>" + "Descripción: " + descriptionFilm + "<br>" + "Director: " + directorFilm + "<br>" + "Año: " + dateFilm + "<br>" + rtScoreFilm);*/

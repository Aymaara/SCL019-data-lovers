import { filterdata} from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = data.films;
const container = document.getElementById("boxfilms");
const filterFilms = document.getElementById("selectFilm");
//const  boxModal = document.getElementsByClassName("modal");
const filterdirector= document.getElementById("selectdirector");
//const filterordenAZ=document.getElementById("selectordenAZ");
//const filteryear=document.getElementById("selectYear");



//filtro peliculas//
for (let i = 0; i < movies.length; i++) {
 let arrayMovies = movies[i];
 filterFilms[filterFilms.length] = new Option(arrayMovies.title, arrayMovies.id);
  console.log(filterFilms);
};
//filtro director
for (let i = 0; i < movies.length; i++) {
  let arrayMovies = movies[i];
  filterdirector[filterdirector.length] = new Option(arrayMovies.director, arrayMovies.id);
};
  
//filtro peliculas y extracción de información(?)
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

    document.getElementById("TarjetaFilmP").innerHTML = ("Título: " + titleFilm + "<br>" + "Descripción: " + descriptionFilm + "<br>" + "Director: " + directorFilm + "<br>" + "Año: " + dateFilm + "<br>" + rtScoreFilm);
    document.getElementById("TarjetaFilmPoster").src = posterFilm;
    //boxModal.style.display = "flex"
  }
});


// peliculas en pantalla 

const img = (filterFilms, i) => {
  return `<div>
    <img src="${filterFilms.poster}" id="${i}" class= "listPoster"/>
</div> `;
};
for (let i = 0; i < movies.length; i++) {
  container.innerHTML += img(movies[i], i);
}

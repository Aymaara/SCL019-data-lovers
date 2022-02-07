import { filterdatadirector, filterYear, sortBy} from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = data.films;
let films= movies;

let container = document.getElementById("films.anime");
const images = (movies) =>{
  return `
  <section class = "containerCard" id=""containerCard1"
  
      <section class= "filmsid" id="${movies.id}">
    <section class = "containerPoster">
      <img src= "${movies.poster}" id="myImg" class= "poster" >
      <p1>${movies.title}<br> (${movies.release_date})</p1>
      </section>
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
boxImage(movies);



//Extracción de selectores para filtros 

const filterdirector= document.getElementById("selectdirector");
const filterordenAZ= document.getElementById("selectordenAZ");
const filterxYear = document.getElementById('selectYear');
const sortYear = document.getElementById("selectorordenyears");

//Modal peliculas
const modalDataSheet = document.querySelector(".sheetmodal");

const modalInfoFilms = (movies) =>{
  return `

 <section class="modal">
 <span class="close">&times</span>
 <section class= "data_sheet">
  <div class= "dataSheet"
    <div>
    <img src= ${movies.poster} ${movies.id} class= "modal-content">
   <ul>
     <li> <p1> Película : ${movies.title}</p1> </li><br>
     <li> <p1> Director : ${movies.director}</p1> </li><br>
     <li> <p1> Productor : ${movies.producer}</p1> </li><br>
     <li> <p1> Año : ${movies.release_date}</p1> </li><br>
     <li> <p1> Reseña : ${movies.description}</p1> </li><br>
    </ul></div>
 </div>

   <h><p1> PERSONAJES </p1></h> 
   <div class = "dataPersonajes">
    ${movies.people.map((x) => `<div class="marginPerso"><img src= "${x.img}"  class= "imgPersonajes"/>
    <p1> Nombre: ${x.name}<br> Edad: ${x.age}<br> Género: ${x.gender} <br> Especie: ${x.space} </p1></div>`)};
    </div> 
    <h><p1> UBICACIONES </p1></h>
    <div class = "dataUbicaciones">
     ${movies.locations.map((x) => `<div class="marginUbic"><img src= "${x.img}"  class= "imgUbicacion"/>
     <p1> Nombre: ${x.name} <br> Clima: ${x.climate} <br> Terrain: ${x.terrain}</p1></div>`)};
     </div>   
  </section>
 </section>
 `  };
//

const modalFilms= ()=> { 
  
  document.querySelectorAll(".containerCard").forEach((element, index)=> {
    element.addEventListener("click", () => {
      const modalCard = modalInfoFilms(films[index]);
  
      modalDataSheet.innerHTML = " ";
      modalDataSheet.innerHTML=modalCard;
      document.querySelector(".modal").style.display = 'block';
      const close = document.getElementsByClassName("close")[0];
      close.addEventListener("click", () => {
          document.querySelector(".modal").style.display = 'none';
      })
  })
});
}
modalFilms();
 
//filtro director
filterdirector.addEventListener("change", () => {
  let selectedDirect = filterdatadirector(movies, filterdirector.value,filterordenAZ.value);  
  boxImage(selectedDirect);
  films=selectedDirect;
  modalFilms(); 
  if(filterdirector.value=== "todas"){
  location.reload();
} 
});

//filtro orden alfabetico
filterordenAZ.addEventListener("change", () => {
  let selectorden = filterdatadirector(movies,filterdirector.value,filterordenAZ.value);
   films=selectorden;
  boxImage(selectorden); 
  modalFilms();
 // if(filterdirector.value=== "todas"){
    //filterordenAZ.reload();}

  
});


///filtro años
filterxYear.addEventListener("change", () => {
  let selectorYears = filterYear(movies, filterxYear.value);
  films=selectorYears;
  boxImage(selectorYears);
  
  modalFilms();
  
});

sortYear.addEventListener("change", () => {
  let selectordenYear = sortBy(movies, sortYear.value);
   boxImage(selectordenYear);
   films=selectordenYear;
  modalFilms();
 // if(selectordenYear.value=== "Orden por Año"){
   // modalFilms();}  
});

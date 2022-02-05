import { filterdatadirector, filterYEar} from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = data.films;
let films= movies;
const container = document.getElementById("films.anime");
//let pushCard= document.getElementsByClassName("poster");
const images = (movies) =>{
  return `
  <section class = "containerCard" id="${movies.id}">
    <section class = "containerPoster">
      <img src= "${movies.poster}" class= "poster" >
      <p1>${movies.title}<br> ${movies.release_date}</p1>

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
const filterxYear = document.getElementById('selectYear');

    
//Filtro director

filterdirector.addEventListener("change", () => {
  let selectedDirect = filterdatadirector(movies, filterdirector.value,filterordenAZ.value);
  boxImage(selectedDirect);
  if(filterdirector.value=== "todas"){
    boxImage(movies);
  }

});

//filtro orden alfabetico
filterordenAZ.addEventListener("change", () => {
  let selectorden = filterdatadirector(movies,filterdirector.value,filterordenAZ.value);
  boxImage(selectorden);
 
});

//filtro años
filterxYear.addEventListener("change", () => {
  let selectorYears = filterYEar(movies, filterxYear.value);
  boxImage(selectorYears);
 console.log(selectorYears);
});

const modalInfoFilms = (movies) =>{
  return `
 <div class= "modal-content">
   <div>
    <img src= "${movies.poster}" class= "poster">
    </div>
  <div class= "dataSheet"
   <ul class= "data_sheet">
     <li> <em> Película : ${movies.title}</em> </li>
     <li> <em> Director : ${movies.director}</em> </li>
     <li> <em> Productor : ${movies.producer}</em> </li>
     <li> <em> Año : ${movies.release_date}</em> </li>
     <li> <em> Reseña : ${movies.description}</em> </li>
    </ul>
 </div>
 </div>
   
   <div class = "dataPersonajes">
    ${movies.people.map((x) => `<img src= "${x.img}" class= "imgPersonajes"/>
    <p1> Nombre: ${x.name}<br> Edad: ${x.age}<br> Género: ${x.gender}<br> Especie: ${x.space} </p1>`)};
    </div> 
    <h><em> UBICACIONES: </em></h>
    <div class = "dataUbicaciones">
     ${movies.locations.map((x) => `<img src= "${x.img}" class= "imgUbicacion"/>
     <p1> Nombre: ${x.name}`)};
     </div>
    
`  
};
   
const modalDataSheet = document.getElementById("modal");
const modalinfo = (films)=>{
   modalDataSheet.innerHTML = " ";
 films.forEach((newmovies)=>{
  modalDataSheet.innerHTML += modalInfoFilms(newmovies);
  })
};
modalinfo(films);


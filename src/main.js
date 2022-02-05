import { filterdatadirector, filterYEar} from './data.js';
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
      <p1>${movies.title}<br> ${movies.release_date}</p1>
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



//filtro director-->

const filterdirector= document.getElementById("selectdirector");
const filterordenAZ= document.getElementById("selectordenAZ");
const filterxYear = document.getElementById('selectYear');

    
//Filtro director

//filtro orden alfabetico
filterordenAZ.addEventListener("change", () => {
  let selectorden = filterdatadirector(movies,filterdirector.value,filterordenAZ.value);
  boxImage(selectorden);
 
});


 
//Modal peliculas
const modalDataSheet = document.querySelector(".sheetmodal");

const modalInfoFilms = (movies) =>{
  return `

 <section class="modal">
 <span class="close">&times;

   <div>
    <img src= ${movies.poster} ${movies.id} class="modal-content">
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

   <h><em> PERSONAJES: </em></h> 
   <div class = "dataPersonajes">
    ${movies.people.map((x) => `<img src= "${x.img}" class= "imgPersonajes"/>
    <p1> Nombre: ${x.name}<br> Edad: ${x.age}<br> Género: ${x.gender}<br> Especie: ${x.space} </p1>`)};
    </div> 
    <h><em> UBICACIONES: </em></h>
    <div class = "dataUbicaciones">
     ${movies.locations.map((x) => `<img src= "${x.img}" class= "imgUbicacion"/>
     <p1> Nombre: ${x.name}`)};
     </div>   
 </span>
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
  
filterdirector.addEventListener("change", () => {
  let selectedDirect = filterdatadirector(movies, filterdirector.value,filterordenAZ.value);  
 
  if(filterdirector.value=== "todas"){
  boxImage(movies);  
} 
 boxImage(selectedDirect);
films=selectedDirect;
  modalFilms();
  
})
///filtro años
filterxYear.addEventListener("change", () => {
  let selectorYears = filterYEar(movies, filterxYear.value);
  films=selectorYears;
  boxImage(selectorYears);
  
  modalFilms();
  
});
//
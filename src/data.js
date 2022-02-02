//crear funcion filtrar 
export const filterdatadirector = (movies, filterdirector, ordenAZ) => {

  let directorGhibli = movies.filter(movies => movies.director === filterdirector)
    .sort((a, b) => {
      if (ordenAZ === "todos") {
        return true;
      }
      if (ordenAZ === "A-Z") {
        (a.title.toLowerCase() < b.title.toLowerCase())
        return 1, -1;
      }
      else {
        (a.title.toLowerCase() > b.title.toLowerCase())
        return -1, 1;
      }
    });
 return directorGhibli;
  }

export const filterYEar = (movies, filterxYear) => {
   let ordenYear = movies.filter(movies => movies.release_date === filterxYear)     
  return ordenYear;
 }
  

 
//export const ordenYear = movies.sort(function (a, b) {
 // return a.release_date.localeCompare(b.release_date);

 //}  
  //let ordenYear =  movies.sort(movies.release_date === filterxYear(a, b) => {
    //return a.release_date - b.release_date;
    // ); }



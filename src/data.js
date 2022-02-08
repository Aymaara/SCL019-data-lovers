//crear funcion filtrar 
export const filterdatadirector = (movies, filterdirector, ordenAZ) => {

  let directorGhibli = movies.filter(movies => movies.director === filterdirector)
    .sort((a, b) => {
      if (ordenAZ === "todos") {
        return true;
      }
      if (ordenAZ === "A-Z") {
       if (a.title.toLowerCase() < b.title.toLowerCase())
        return -1;
      else {
        return  1;
      }}
      if (ordenAZ === "Z-A") {
       if (a.title.toLowerCase() > b.title.toLowerCase())
        return -1;
      else {
        return  1;
      }}
    });
    
 return directorGhibli;
  }

export const filterYear = (movies, filterxYear) => {
   let ordenYear = movies.filter(movies => movies.release_date === filterxYear)     
  return ordenYear;
 }
  

 export const sortBy = (movies,sortYear)=>{
  let sortYears = movies.sort((a,b) => {
    if (sortYear === "Orden por Año") {
      return true;
    }
  if(sortYear === "Ascendente") {
   (a.release_date < b.release_date)
return 1, -1;
  } 
  else{
    (a.release_date > b.release_date)
    return -1, 1;
  }

  }); 
  return sortYears;
}


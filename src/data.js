//crear funcion filtrar 
 export const  filterdatadirector = (movies, filterdirector,ordenAZ)=> {
  let directorGhibli = movies.filter(movies => {
    if (movies.director === filterdirector)sort((a,b) => {
  if (ordenAZ === "A-Z") { 
    if (a.title.toLowerCase() < b.title.toLowerCase() ){
      return 1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase() ){
      return -1;
    } }
    else {
      if (a.title.toLowerCase() > b.title.toLowerCase() ){
        return 1;
      }
      if (a.title.toLowerCase() < b.title.toLowerCase() ){
        return -1;
      } 
    }
  });
  return directorGhibli;
});
}



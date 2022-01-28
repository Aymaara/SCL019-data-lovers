//crear funcion filtrar 
 export const  filterdatadirector = (movies, filterdirector )=> {
  let directorGhibli = movies.filter(movies => movies.director === filterdirector);
  return directorGhibli;
};



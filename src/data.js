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



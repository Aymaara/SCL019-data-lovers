export const  filterdata= (movies,valueFilm)=> {
  let filmSelected = movies.filter(element => element.id == valueFilm);
  return filmSelected;
};

//export const filterdata = (selectdirector,)=> {
  //let selectdirector = movies.filter(element => element.id == );
  //return selectdirector;
//};


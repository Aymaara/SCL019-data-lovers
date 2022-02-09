import { filterdatadirector, filterYear } from '../src/data.js';

const datatest = [{
  "director": "Hayao Miyazaki",
  "title": "Castle in the Sky",
  "release_date": "1986",
}
,
{ "director": "Isao Takahata",
  "title": "Pom Poko",
  "release_date": "1994",
},
{"director": "Hayao Miyazaki",
  "title" : "My Neighbor Totoro",
  "release_date": "1988",
},
{  "director": "Isao Takahata",
  "title": "Only Yesterday",
  "release_date": "1991",
}]  



describe('filterdatadirector', () => {
  it('is a function', () => {
    expect(typeof filterdatadirector).toBe('function');
  });

 it('deberia dar como resultado las peliculas de hayao miyazaki', () => {
   let resultado=filterdatadirector(datatest, "Hayao Miyazaki", "ordenAZ A-Z")
  
    expect(resultado[0].title ).toBe('Castle in the Sky');
    expect(resultado[1].title).toBe("My Neighbor Totoro");
  });
  it ("deberia dar como resultado las peliculas de Isao Takahata",() => {
    let resultado=filterdatadirector(datatest, "Isao Takahata", "ordenAZ A-Z")

    expect(resultado[0].title ).toBe('Pom Poko');
    expect(resultado[1].title ).toBe('Only Yesterday');
  })
});


describe('filterYear', () => {
  it('is a function', () => {
    expect(typeof filterYear).toBe('function');
  });

  it('deberia dar el resultado de el año', () => {
    let resultado=filterYear (datatest,"1986")
    expect(resultado[0].title).toBe('Castle in the Sky');
    expect(resultado[0].release_date).toBe('1986');
  });
  it('deberia dar el resultado de el año', () => {
    let resultado=filterYear (datatest,"1994")
    expect(resultado[0].title).toBe('Pom Poko');
    expect(resultado[0].release_date).toBe('1994');
  });
});

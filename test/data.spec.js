import data from './data/ghibli/ghibli.js';
import { filterdatadirector, filterYear } from '../src/data.js';


const datatest = data.films;
describe('filterdatadirector', () => {
  it('is a function', () => {
    expect(typeof filterdatadirector).toBe('function');
  });

 it('deberia return true cuando el usuario seleccione todos', () => {
    expect(filterdatadirector(datatest, "Hayao Miyazaki", "ordenAZ A-Z")).toBe(' 1, -1');
  });
});

const años = datatest.relase_data;
describe('filterYear', () => {
  it('is a function', () => {
    expect(typeof filterYear).toBe('function');
  });

  it('deberia return ordenYear cuando el usurio seleccione 2013 ', () => {
    expect(filterYear(datatest, "2013",)).toBe('ordenYear');
  });
});

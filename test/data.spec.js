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


describe('filterYear', () => {
  it('is a function', () => {
    expect(typeof filterYear).toBe('function');
  });

 /* it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });*/
});

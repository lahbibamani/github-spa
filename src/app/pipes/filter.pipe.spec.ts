import { TypeHelper } from '../helper/type.helper';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  const items: any[] = [{ name: 'toto titi', age: 25 }, { name: 'tata', age: 30 }, { name: 'tata tota', age: 27 }];

  beforeAll(() => {
    pipe = new FilterPipe(new TypeHelper());
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('#transform should return 2 elements in the array', () => {
    const result: any[] = pipe.transform(items, 'name', 'tot');
    expect(result).toEqual([{ name: 'toto titi', age: 25 }, { name: 'tata tota', age: 27 }]);
  });

  it('searched text is empty => #transform should return all the items of array', () => {
    const result: any[] = pipe.transform(items, 'name', '');
    expect(result).toEqual(items);
  });

  it('searched text is undefined => #transform should return all the items of array', () => {
    const result: any[] = pipe.transform(items, 'name', undefined);
    expect(result).toEqual(items);
  });

  it('items array is undefined => #transform should return an empty array', () => {
    const result: any[] = pipe.transform(null, 'name', 'tot');
    expect(result).toEqual([]);
  });

  it('items array is empty => #transform should return an empty array', () => {
    const result: any[] = pipe.transform([], 'name', 'tot');
    expect(result).toEqual([]);
  });

  it('property undefined => #transform should return an empty array', () => {
    const result: any[] = pipe.transform(items, '', 'toto');
    expect(result).toEqual([]);
  });

  it('property does not exist in the object => #transform should return an empty array', () => {
    const result: any[] = pipe.transform(items, 'property', 'toto');
    expect(result).toEqual([]);
  });

  it('age is a number => #transform should return an empty array', () => {
    const result: any[] = pipe.transform(items, 'age', 'toto');
    expect(result).toEqual([]);
  });
});

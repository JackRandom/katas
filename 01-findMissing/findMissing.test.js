const findMissing = require('../01-findMissing/findMissing.js');

describe('findMissing', () => {
   test('tests to see if findMissing function can find the missing number 7', () => {

    const testArray = [1,2,3,4,5,6,8,9,10];
    const result = findMissing(testArray);

    expect(result).toBe(7);

   });

   test('tests to see if findMissing function can find the missing number 2', () => {

      const testArray = [1,3,4,5,6,7,8,9,10];
      const result = findMissing(testArray);
  
      expect(result).toBe(2);
  
     });

     test('tests to see if findMissing function can find the missing number 1', () => {

      const testArray = [2,3,4,5,6,7,8,9,10];
      const result = findMissing(testArray);
  
      expect(result).toBe(1);
  
     });

     test('tests to see if findMissing function can find the missing number 10', () => {

      const testArray = [1,2,3,4,5,6,7,8,9];
      const result = findMissing(testArray);
  
      expect(result).toBe(10);
  
     });


     
});
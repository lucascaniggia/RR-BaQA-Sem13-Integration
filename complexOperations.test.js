import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('first test for checkEmail', () => {
      expect(complexOperations.checkEmail('narellacalvente@gmail.com')).toStrictEqual('The email is valid');
    });

    it('second test for checkEmail', () => {
      expect(complexOperations.checkEmail(23)).toStrictEqual('The email should be an string');
    });

    it('third test for checkEmail', () => {
      expect(complexOperations.checkEmail('Lucas Caniggia')).toStrictEqual('The email is invalid');
    });

    it('fourth -undefined- test for checkEmail', () => {
      expect(complexOperations.checkEmail(undefined)).toStrictEqual('The email should be an string');
    });
  });

  describe('calculateArea', () => {
    it('square test for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 2, 3)).toBe(6);
    });

    it('rectangle test for calculateArea', () => {
      expect(complexOperations.calculateArea('rectangle', 2, 4)).toBe(8);
    });

    it('triangle test for calculateArea', () => {
      expect(complexOperations.calculateArea('triangle', 2, 4)).toBe(4);
    });

    it('circle test for calculateArea', () => {
      expect(complexOperations.calculateArea('circle', 8)).toBeCloseTo(201.06);
    });
  });

  describe('sumGratherThan', () => {
    it('first test for sumGratherThan - letters', () => {
      expect(complexOperations.sumGratherThan('a,b,c,d')).toBe('The params should be numbers')
    });

    it('second test - number1=undefined, plus number2 and number3', () => {
      expect(complexOperations.sumGratherThan('undefined', 4, 5)).toBe('The params should be numbers')
    });

    it('third test - number1 plus number2 = 50, and greater than number3 ', () => {
      expect(complexOperations.sumGratherThan(25, 25, 15)).toBe('50 is grather than 15')
    });

    it('fourth test - number1 plus number2 = 50, and lower than number3 ', () => {
      expect(complexOperations.sumGratherThan(25, 25, 60)).toBe('50 is less than 60')
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('First item is not an array', () => {
      expect(complexOperations.intersectionBetweenArrays("string", ["something1", "something2"])).toBe('The params should be arrays');
    });

    test('Second item is not an array', () => {
      expect(complexOperations.intersectionBetweenArrays(["something1", "something2"], "string")).toBe('The params should be arrays');
    });

    test('No arrays matching', () => {
      expect(complexOperations.intersectionBetweenArrays([1, 2], [3, 4])).toBe('There are not matching elements');
    });

    test('Array match found', () => {
      expect(complexOperations.intersectionBetweenArrays([1, 2, 3, 4], [4, 5, 6, 7])).toEqual([4]);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('First argument not an array', () => {
      expect(complexOperations.sortArrayOfObjectsByKey("John,Lucy,Susan", "name")).toEqual("The first param should be an array");
    });

    test('Second argument is not a string', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(["John", "Lucy", "Susan"], 5)).toEqual("The second param should be an string");
    });

    test('Missing age property', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ name: "Lucy", age: 23 }, { name: "Susan" }, { name: "John", age: 30 }], "age")).toEqual("Some elements in the array does not have the age property");
    });

    test('Correct parameters', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ name: "Lucy", age: 23 }, { name: "Susan", age: 20 }, { name: "John", age: 30 }], "age")).toEqual([{ "age": 20, "name": "Susan" }, { "age": 23, "name": "Lucy" }, { "age": 30, "name": "John" }]);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('8839')).toBe('The param should be an array')
    });

    it('The array should only contain numbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(['a,b,c,d'])).toBe('The array should have only numbers')
    });

    it('Odd numbers array', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 3, 5, 7, 9])).toEqual({ even: 0, odd: 5 });
    });

    it('Odd and Even numbers array', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([2, 3, 4, 5, 6, 7])).toEqual({ even: 3, odd: 3 });
    });

  });
});
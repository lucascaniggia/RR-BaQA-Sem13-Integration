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
      expect(complexOperations.checkEmail(undefined)).toStrictEqual('The email is invalid');
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
    it('first test for sumGratherThan', () => {

    });
  });

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {

    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {

    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {

    });
  });
});
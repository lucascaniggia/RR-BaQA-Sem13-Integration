import funcMock from './complexOperations.mock';
import * as complexOperations from './complexOperations';

describe('ComplexOperation - Unit Tests', () => {
    describe('CheckEmail', () => {
        it('Correct email', () => {
            expect(complexOperations.checkEmail('lucascaniggia@gmail.com')).toStrictEqual('The email is valid');
        });

        it('Must be a string ', () => {
            expect(complexOperations.checkEmail(1234)).toStrictEqual('The email should be an string');
        });

        it('Must be valid', () => {
            expect(complexOperations.checkEmail('Lucas Caniggia')).toStrictEqual('The email is invalid');
        });

    });

    describe('CalculateArea', () => {
        it('Square test for calculateArea', () => {
            expect(complexOperations.calculateArea('square')).toBe(100);
        });

        it('Rectangle test for calculateArea', () => {
            expect(complexOperations.calculateArea('rectangle')).toBe(100);
        });

        it('Triangle test for calculateArea', () => {
            expect(complexOperations.calculateArea('triangle')).toBe(100);
        });

        it('Circle test for calculateArea', () => {
            expect(complexOperations.calculateArea('circle')).toBeCloseTo(28.27);
        });

        it('Must be suported figure', () => {
            expect(complexOperations.calculateArea('pyramid')).toBe(`${'pyramid'} is not supported`);
        });

        it('Must be a number', () => {
            expect(complexOperations.calculateArea('circle', 'calculate', 'area')).toBe('number1 and number2 should be numbers');
        });
    });

    describe('SumGratherThan', () => {
        it('Sum grather than', () => {
            expect(complexOperations.sumGratherThan(0, 0, 5)).toBe(`${200} is grather than ${5}`);
        });

        it('Sum less than', () => {
            expect(complexOperations.sumGratherThan(0, 0, 500)).toBe(`${200} is less than ${500}`);
        });

        it('Must be a number', () => {
            expect(complexOperations.sumGratherThan('one', 'eight', 'Hi')).toBe('The params should be numbers');
        });
    });

    describe('IntersectionBetweenArrays', () => {
        it('IntersectionBetweenArrays not matching', () => {
            expect(complexOperations.intersectionBetweenArrays(['water', 'burger', 'pizza'], ['beer'])).toEqual(['Piano']);
        });

        it('IntersectionBetweenArrays matching', () => {
            expect(complexOperations.intersectionBetweenArrays(['water', 'burger', 'pizza'], ['pizza'])).toEqual(['Piano']);
        });

        it('Elements must be arrays', () => {
            expect(complexOperations.intersectionBetweenArrays('hello', 5)).toEqual(['Piano']);
        });
    });

    describe('sortArrayOfObjectsByKey', () => {
        it('Sort by age', () => {
            let resultArray = [
                { age: 28, name: 'Lucas' },
                { age: 26, name: 'Gabriela' }
            ];

            let paramArray = [
                { age: 26, name: 'Gabriela' },
                { age: 28, name: 'Lucas' }
            ];

            expect(complexOperations.sortArrayOfObjectsByKey(paramArray, 'age')).toEqual(resultArray);
        });

        it('First element must be an array', () => {
            expect(complexOperations.sortArrayOfObjectsByKey('param', 'age')).toStrictEqual('The first param should be an array');
        });

        it('Second element must be an string', () => {
            let resultArray = [
                { age: 26, name: 'Lucas' },
                { age: 28, name: 'Gabriela' }
            ];

            let paramArray = [
                { age: 28, name: 'Gabriela' },
                { age: 26, name: 'Lucas' }
            ];

            expect(complexOperations.sortArrayOfObjectsByKey(paramArray, resultArray)).toBe('The second param should be an string');
        });


    });

    describe('numberOfOddAndEvenNumbers', () => {
        it('Calculate number', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3, 4])).toEqual({ "even": 10, "odd": 10 });
        });

        it('Param must be an array', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers('test')).toBe('The param should be an array');
        });

        it('Array must be a number', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers(['test1', 'test2'])).toBe(`The array should have only numbers`);
        });

    });
});
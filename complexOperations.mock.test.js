import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('Mocked complexOperation', () => {
    describe('checkEmail', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('valid email', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
            expect(complexOperations.checkEmail('lucascaniggia@gmail.com')).toBe('The email is valid');
            expect(complexOperations.checkEmail('undefined')).toBe('The email is valid');
        });

        it('invalid email', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
            expect(complexOperations.checkEmail('lucascaniggia@gmail.com')).toBe('The email is invalid');
        });

        it('not providing a string for email', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail(2, 4, 'L')).toStrictEqual('The email should be a string');
            expect(complexOperations.checkEmail()).toStrictEqual('The email should be a string');
            expect('isString').toBeCalled;
            expect('validateEmail').toBeCalled;
        });

        it('providing an empty string as input', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail()).toStrictEqual('The email should be a string');
        });

        it('giving a mocked up string (valid) and an invalid email', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
            expect(complexOperations.checkEmail('lucascaniggia')).toBe('The email is valid');
        });
    });

    describe('calculateArea', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('mocked-up input values for number1 and number2', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(40);
            jest.spyOn(basicOperations, 'division').mockReturnValue(2);
            jest.spyOn(basicOperations, 'exponent').mockReturnValue(4);
            expect(complexOperations.calculateArea('square', 7, 7)).toEqual(40)
            expect(complexOperations.calculateArea('rectangle', 7, 5)).toEqual(40)
            expect(complexOperations.calculateArea('triangle', 7, 3)).toBe(2)
            expect(complexOperations.calculateArea('circle', 9)).toBeCloseTo(12.566)
            expect('isSupportedFigure').toBeCalled;
            expect('isNumber').toBeCalled;
        });

        it('invalid imputs for number1 and number2', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.calculateArea('rectangle', '', 'undefined')).toBe('number1 and number2 should be numbers')
            expect(complexOperations.calculateArea('rectangle', 'eight', 'nine')).toBe('number1 and number2 should be numbers')
        });

        it('testing a non-supported figure', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
            expect(complexOperations.calculateArea('prism')).toBe('${figure} is not supported'),
                expect(complexOperations.calculateArea('prism', 2, 3)).toBe('${figure} is not supported'),
                expect(complexOperations.calculateArea('', 5, 3)).toBe('${figure} is not supported'),
                expect(complexOperations.calculateArea('undefined')).toBe('${figure} is not supported'),
                expect(complexOperations.calculateArea('${figure}', 2, 3)).toBe('${figure} is not supported')
        });
    });

    describe('sumGreaterThan', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('Letters for params', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.sumGreaterThan('a,b,c')).toBe('The params should be numbers')
            expect('isNumber').toBeCalled;
        });

        it('undefined value for number1 + number2 and number3', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.sumGreaterThan('undefined', 2, 4)).toBe('The params should be numbers')
            expect('isNumber').toBeCalled;
        });

        it('number1 + number2 should be equal to 75 and greater than number3, mocked-up to 100 ', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(100);
            expect(complexOperations.sumGreaterThan(50, 25, 20)).toBe('100 is greater than 20')
            expect('isNumber').toBeCalled;
        });

        it('number1 + number2 should be equal to 75 and lower than number3, mocked-up to 100 ', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(100);
            expect(complexOperations.sumGreaterThan(50, 25, 200)).toBe('100 is less than 200')
            expect('isNumber').toBeCalled;
        });
    });

    describe('intersectionBetweenArrays', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('giving a valid instersection array, mocked-up to return 15', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(15);
            expect(complexOperations.intersectionBetweenArrays([1, 2, 4], [2, 3, 5, 6])).toEqual(15)
            expect('isArray').toBeCalled;
        });

        it('not providing a valid param as an array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.intersectionBetweenArrays('15, Radium')).toBe('The params should be arrays')
            expect('isArray').toBeCalled;
        });

        it('providing an empty intersection array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(false);
            expect(complexOperations.intersectionBetweenArrays([], [])).toStrictEqual(false)
            expect('isArray').toBeCalled;
        });

        it('undefined values', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue('There are not matching elements');
            expect(complexOperations.intersectionBetweenArrays(['Integration'], [undefined])).toBe('There are not matching elements')
            expect('isArray').toBeCalled;
        });
    });

    describe('sortArrayOfObjectsByKey', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('first param should be an array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey('1', 'LucasCaniggia')).toBe('The first param should be an array')
            expect('isArray').toBeCalled;
        });

        it('second param is not a string', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey([1, 3, 5, 7], (222))).toBe('The second param should be an string')
            expect('isArray').toBeCalled;
            expect('isString').toBeCalled;
        });

        it('sorting by name', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            let name = ['Lucas', 'Conrado', 'Martina'];
            let age = 'they are in their twenties';
            expect(complexOperations.sortArrayOfObjectsByKey([name], age)).toBe('The first param should be an array')
        });

        it('sorting by age', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue([{ name: 'Lucas', age: '32' }]);
            expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Martina', age: '23' }, { name: 'Lucas', age: '32' }], 'age')).toEqual([{ name: 'Lucas', age: '32' }])
        });

        it('sorting by age mocked-up to false, when true', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey([{ name: 'Martina', age: '23' }], 'age')).toEqual('The first param should be an array')
        });

        it('elements with no key property', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey([{ nationality: 'Argentinian' }, { nationality: 'Brazilian' }, { nationality: '' }], 'age')).toBe('Some elements in the array does not have the ${key} property')
        });
    });

    describe('numberOfOddAndEvenNumbers', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        })
        it('not a array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers('8839')).toBe('The param should be an array')
        });

        it('the array should only contain numbers', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers(['a,b,c,d'])).toBe('The array should have only numbers')
        });

        it('the array should only contain numbers', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers(['a,b,c,d'])).toStrictEqual('The array should have only numbers')
        });

        it('even numbers array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            expect(complexOperations.numberOfOddAndEvenNumbers([2, 4, 8, 10])).toEqual({ even: 4, odd: 0 });
        });

        it('odd numbers array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            expect(complexOperations.numberOfOddAndEvenNumbers([1, 3, 5, 7, 9])).toEqual({ even: 0, odd: 5 });
        });

        it('odd and even numbers array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            expect(complexOperations.numberOfOddAndEvenNumbers([2, 4, 6, 7])).toEqual({ even: 3, odd: 1 });
        });

        it('odd numbers array mocked-up to return false', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers([1, 3, 5, 7, 9])).toEqual('The param should be an array');
        });

        it('odd numbers array fully mocked-up', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1, 3]);
            jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([2, 4]);
            expect(complexOperations.numberOfOddAndEvenNumbers([1, 3, 5, 7, 9])).toEqual({ even: 2, odd: 2 });
        });
    });
});

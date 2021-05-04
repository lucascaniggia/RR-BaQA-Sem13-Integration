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
});

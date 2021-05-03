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
});

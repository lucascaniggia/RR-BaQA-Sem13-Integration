import 'jest';

let isNumber = jest.fn().mockReturnValue(true);
let isArray = jest.fn().mockReturnValue(true);
let isString = jest.fn().mockReturnValue(true);
let validateEmail = jest.fn().mockReturnValue(true);
let sum = jest.fn().mockReturnValue(100);
let multip = jest.fn().mockReturnValue(60);
let division = jest.fn().mockReturnValue(60);
let exponent = jest.fn().mockReturnValue(9);
let isSupportedFigure = jest.fn().mockReturnValue(true);
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue(true);
let arrayIntersection = jest.fn().mockReturnValue(['Music']);
let getEvenNumbersFromArray = jest.fn().mockReturnValue('[2, 6, 10]');
let getOddNumbersFromArray = jest.fn().mockReturnValue('[3, 7, 11]');

const funcMock = jest.mock('./basicOperations.js', () => {
    return {
        isNumber,
        isArray,
        isString,
        validateEmail,
        sum,
        multip,
        division,
        exponent,
        isSupportedFigure,
        arrayElementsAreObjectWithKey,
        arrayIntersection,
        getEvenNumbersFromArray,
        getOddNumbersFromArray
    }
});

export default funcMock;
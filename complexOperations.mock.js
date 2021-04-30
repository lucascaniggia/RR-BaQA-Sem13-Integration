import 'jest';

let sum = jest.fn().mockReturnValue(10);

const funcMock = jest.mock('./basicOperations', () => {
    return {
        sum,
    };
});

export default funcMock;
process.argv=['node path','script path', '--count']
const processArgument = require('./app')

describe('App, processArgument', () => {
    test('should return an array with count command and undefined value', () => {
        expect(processArgument()).toStrictEqual(['count'])
    })
})
process.argv=['node path','script path', '--filter=ry']
const processArgument = require('./app')

describe('App, processArgument', () => {
    test('should return an array with filter command and ry value', () => {
        expect(processArgument()).toStrictEqual(['filter', 'ry'])
    })
})
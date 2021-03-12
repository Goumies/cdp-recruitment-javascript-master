const COUNT_COMMAND = 'count';
process.argv=['node path','script path', `--${COUNT_COMMAND}`]
const processArgument = require('./app')

describe('App, processArgument', () => {
    test(`should return an array with ${COUNT_COMMAND} command`, () => {
        expect(processArgument()).toStrictEqual([COUNT_COMMAND])
    })
})
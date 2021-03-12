const FILTER_COMMAND = 'filter';
const PATTERN_COMMAND = 'ry';
process.argv=['node path','script path', `--${FILTER_COMMAND}=${PATTERN_COMMAND}`]
const processArgument = require('./app')

describe('App, processArgument', () => {
    test(`should return an array with ${FILTER_COMMAND} command and ${PATTERN_COMMAND} pattern`, () => {
        expect(processArgument()).toStrictEqual([`${FILTER_COMMAND}`, `${PATTERN_COMMAND}`])
    })
})
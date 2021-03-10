const count = require('./count')

describe('count', () => {
    test('should return Count!', () => {
        expect(count()).toBe('Count!')
    })
})
const filter = require("./filter");

describe('Filter', () => {
    test('should return Uzuzozne and Satanwi countries, given the ry pattern', () => {
        const COUNTRIES_WITH_ANIMALS_WITH_GIVEN_PATTERN = [
            {
                name: 'Uzuzozne',
                people: [
                    {
                        name: 'Lillie Abbott',
                        animals: [
                            {
                                name: 'John Dory'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Satanwi',
                people: [
                    {
                        name: 'Anthony Bruno',
                        animals: [
                            {
                                name: 'Oryx'
                            }
                        ]
                    }
                ]
            }
        ];

        filter('ry')
            .on('data', (data) =>{
                expect(data).toStrictEqual(COUNTRIES_WITH_ANIMALS_WITH_GIVEN_PATTERN)
            })
    })
})
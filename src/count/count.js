const { Readable } = require('stream')
const { data } = require('../../data')

let out = []

function count(){
    const inCountStream = new Readable({
        read(size) {
            for (const country of data) {
                const { people } = country

                out.push({name : `${country.name} [${people.length}]`, people: []});

                for (const person of people) {
                    const { animals } = person

                    const lastElementIndex = out.length-1;
                    const lastStoredCountry = out[lastElementIndex];

                    lastStoredCountry.people = [
                        ...lastStoredCountry.people, {name: `${person.name} [${animals.length}]`, animals}
                    ]
                }
            }
            console.dir(out, {
                depth: null,
            })
        }
    })
    inCountStream.read()
    return inCountStream
}

module.exports = count
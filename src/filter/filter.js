const { Readable } = require('stream')
const { data } = require('../../data')

let pattern = ''
const out = []

function filter(receivedPattern){
    pattern = receivedPattern
    const inFilterStream = new Readable({
        read(size) {
            for (const country of data) {
                const { people } = country

                for (const person of people) {
                    const { animals } = person

                    animals
                        .filter(animal => animal.name.includes(pattern))
                        .forEach(result =>
                            result && out.push(
                                {name : country.name, people: [{name: person.name, animals: [result]}]}
                            )
                        );

                }
            }
            console.dir(out, {
                depth: null,
            })
        }
    })
    inFilterStream.read()
    return inFilterStream
}
module.exports = filter
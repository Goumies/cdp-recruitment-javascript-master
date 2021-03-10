const FLAG_INDEX = 2;
const ARGUMENT= process.argv[FLAG_INDEX]

function processArgument(){
    const FLAG_LESS_ARGUMENT = ARGUMENT.substr(FLAG_INDEX)
    return FLAG_LESS_ARGUMENT.split('=')
}

const [COMMAND, PATTERN] = processArgument()
const [FILTER, COUNT] = ['filter', 'count']

switch (COMMAND) {
    case FILTER:
        require('./src/filter/filter')(PATTERN)
        break;
    case COUNT:
        require('./src/count/count')()
        break;
}

module.exports = processArgument
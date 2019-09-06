module.exports = inputValidation

function inputValidation ({ input, type, message, options, optional = false }) {

    // throwError utility function
    function throwError(optionList) {
        console.log(`\n`)

        if (optionList) {
            message += `\n\nValid options: ${optionList.join(', ')}`
        }
        throw Error(message)
    }

    // If parameter is optional and input is undefined, no need to validate
    if (optional && input === undefined) {
        return
    }

    // Do not check for !input or you are saying that you won't accepet falsy values such as empty '' or id = 0
    if (input === undefined) {
        throwError()
    }
    if (typeof input !== type) {
        throwError()
    }
    // If options is provided, check that input is included
    if (options && !options.includes(input)) {
        throwError(options)
    }
}


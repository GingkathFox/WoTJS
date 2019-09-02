module.exports = request

let axios = require('axios')
let { application_id } = require('../../secret.json')

    function request({subURL, post = false, body, query}) {
        let request
        let fullURL = `https://api.worldoftanks.com/wot/${subURL}/?application_id=${application_id}`
        
        if (query) {
            // Cicle each query entry and add to the full url in the form '&key=value'
            Object.keys(query).forEach(queryKey => {
                // query params undefined or empty, or array of length 0
                if (!query[queryKey] === undefined || query[queryKey] === '') {
                    return
                }
                if (query[queryKey].length && query[queryKey].length === 0) {
                    return
                }

                fullURL += `&${queryKey}=${query[queryKey]}`
            })
        }

        // If post, make it a post request, make it a get otherwise
        if (post) {
            request = axios.post(fullURL, body) 
        } else {
            request = axios.get(fullURL) 
        }

        // Return the promise request, pre set the 'then' and 'catch' clauses
        return request
                .then(response => {
                    let data = response.data
                    
                    if (data.error) {
                        throw Error(`\nCall to '${subURL}' failed with error ${data.error.code}: \n${data.error.message}\nValue was: '${data.error.value}'`)
                    }
                    return data
                    
                }).catch((error) => {
                    console.error(`Call to '${subURL}' failed with error:`, error)
                    throw Error(wotError)
                })
    }
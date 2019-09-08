let request = require('./Utility/request')
let paramValidation = require('./Utility/paramValidation')

module.exports = {

    /**
     * Returns general information and the battle statistics of clans in the Stronghold mode. 
     * Please note that information about the number of battles fought 
     * as well as the number of defeats and victories is updated once every 24 hours.
     * @async
     * @param {[number]} clan_id
     * @param {[string]} fields 
     * @returns {JSON}
     */
    clanInfo(clan_id = [], fields = []) {
        
        paramValidation({
            input: clan_id, 
            type: 'object', 
            message: `The function 'strongholds.clanInfo' requires a array of clan IDs.`
        })
        if (clan_id.length > 10) {
            throw Error(`The WoT API can only handle 10 clan IDs at a time from this endpoint. Please split your requests.`)
        }
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' of the function 'strongholds.clanInfo' must be a array of strings.`,
            optional: true
        })

        return request({
            subURL: `stronghold/claninfo`,
            query: {
                clan_id,
                fields
            }
        })
    },
    
    /**
     * Returns information about available Reserves and their current status.
     * @async
     * @param {[number]} clan_id 
     * @param {[string]} fields 
     * @returns {JSON}
     */
    clanReserves(clan_id = [], fields = []) {

        paramValidation({
            input: clan_id,
            type: 'object',
            message: `The function 'strongholds.clanReserves' requires a array of clan IDs.`
        })
        if (clan_id.length > 10) {
            throw Error(`The WoT API can only handle 10 clan IDs at a time from this endpoint. Please split your requests.`)
        }
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' of the function 'strongholds.clanReserves' must be a array of strings.`,
            optional: true
        })

        return request({
            subURL: `stronghold/clanreserves`,
            query: {
                clan_id,
                fields
            }
        })
    },

    /**
     * This function activates an available clan Reserve. 
     * A clan Reserve can be activated only by a clan member with the required permission.
     * @async
     * @param {string} access_token 
     * @param {number} reserve_level 
     * @param {string} reserve_type 
     * @param {[string]} fields 
     * @returns {JSON}
     */
    activateClanReserve(access_token, reserve_level, reserve_type, fields = []) {

        paramValidation({
            input: access_token,
            type: 'string',
            message: `The function 'strongholds.activateClanReserve' requires a valid access token.`
        })
        paramValidation({
            input: reserve_level,
            type: 'number',
            message: `The parameter 'reserve_level' in the function 'strongholds.activateClanReserve' must be a number.`
        })
        paramValidation({
            input: reserve_type,
            type: 'string',
            message: `The parameter 'reserve_type' in the function 'strongholds.activateClanReserve' must be a string.`
        })
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' of the function 'strongholds.activateClanReserves' must be a array of strings.`,
            optional: true
        })

        return request({
            subURL: `stronghold/activateclanreserve`,
            query: {
                access_token,
                reserve_level,
                reserve_type,
                fields
            },
            post: true
        })
    }
}
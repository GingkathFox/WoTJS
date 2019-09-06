let request = require('./Utility/request')
let paramValidation = require('./Utility/paramValidation')

module.exports = {

    /**
     * Returns information about the Global Map Fronts.
     * @async
     * @param {[string]} fields 
     * @param {[string]} front_id 
     * @param {number} limit 
     * @param {number} page_no 
     * @returns {JSON}
     */
    fronts(fields = [], front_id = [], limit, page_no = 1) {

        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' in the function 'globalMap.fronts' must be a array of strings.`,
            optional: true
        })
        paramValidation({
            input: front_id,
            type: 'object',
            message: `The parameter 'front_id' in the function 'globalMap.fronts' must be a array of strings.`,
            optional: true
        })
        paramValidation({
            input: limit,
            type: 'number',
            message: `The parameter 'limit' in the function 'globalMap.fronts' must be a number.`,
            optional: true
        })
        paramValidation({
            input: page_no,
            type: 'number',
            message: `The parameter page_no' in the function 'globalMap.fronts' must be a number.`,
            optional: true
        })

        return request({
            subURL: 'globalmap/fronts',
            query: {
                fields,
                front_id,
                limit,
                page_no
            }
        })
    },

    /**
     * Returns information about the Global Map provinces.
     * @async
     * @param {number} front_id
     * @param {string} arena_id
     * @param {number} daily_revenue_gte Search for provinces with daily income equal to or more than the value.
     * @param {number} daily_revenue_lte Search for provinces with daily income equal to or less than the value
     * @param {[string]} fields 
     * @param {string} landing_type Search for provinces by landing type. Valid values:
     * 
     * "null" — auctions disabled
     * 
     * "auction" — auction
     * 
     * "tournament" — landing tournament
     * @param {number} limit 
     * @param {string} order_by Sorting. Valid values:
     * 
     * "province_id" — by province name
     * 
     * "-province_id" — by province name in reverse order
     * 
     * "daily_revenue" — by province income
     * 
     * "-daily_revenue" — by province income in reverse order
     * 
     * "prime_hour" — by Prime Time
     * 
     * "-prime_hour" — by Prime Time in reverse order
     * @param {number} page_no 
     * @param {number} prime_hour Search for provinces with the value of Prime Time start hour. 
     * Values available: from 0 to 23. Maximum value: 23.
     * @param {string} province_id 
     * @returns {JSON}
     */
    provinces(front_id, arena_id, daily_revenue_gte, daily_revenue_lte, fields = [], 
        landing_type, limit, order_by, page_no, prime_hour, province_id = []) {
        
            function verify() {
                paramValidation({
                    input: front_id,
                    type: 'string',
                    message: `The function 'globalMap.provinces' requires a front ID.`,
                })
                paramValidation({
                    input: arena_id,
                    type: 'string',
                    message: `The parameter 'arena_id' of the function 'globalMap.provinces' must be a string.`,
                    optional: true
                })
                paramValidation({
                    input: daily_revenue_gte,
                    type: 'number',
                    message: `The parameter 'daily_revenue_gte' of the function 'globalMap.provinces' must be a number.`,
                    optional: true
                })
                paramValidation({
                    input: daily_revenue_lte,
                    type: 'number',
                    message: `The parameter 'daily_revenue_lte' of the function 'globalMap.provinces' must be a number.`,
                    optional: true
                })
                paramValidation({
                    input: fields,
                    type: 'object',
                    message: `The parameter 'fields' in the function 'globalMap.provinces' must be a array of strings.`,
                    optional: true
                })
                paramValidation({
                    input: landing_type,
                    type: 'string',
                    message: `The parameter 'landing_type' of the function 'globalMap.provinces' must be a string.`,
                    optional: true
                })
                paramValidation({
                    input: limit,
                    type: 'number',
                    message: `The parameter 'limit' in the function 'globalMap.provinces' must be a number.`,
                    optional: true
                })
                paramValidation({
                    input: order_by,
                    type: 'string',
                    message: `The parameter 'order_by' of the function 'globalMap.provinces' must be a string.`,
                    optional: true
                })
                paramValidation({
                    input: page_no,
                    type: 'number',
                    message: `The parameter page_no' in the function 'globalMap.provinces' must be a number.`,
                    optional: true
                })
                paramValidation({
                    input: prime_hour,
                    type: 'number',
                    message: `The parameter 'prime_hour' of the function 'globalMap.provinces' must be a number.`,
                    optional: true
                })
                paramValidation({
                    input: province_id,
                    type: 'object',
                    message: `The parameter 'province_id' in the function 'globalMap.provinces' must be a array of strings.`,
                    optional: true
                })
            }
            verify()

            return request({
                subURL: `globalmap/provinces`,
                query: {
                    front_id,
                    arena_id,
                    daily_revenue_gte,
                    daily_revenue_lte,
                    fields,
                    landing_type,
                    limit,
                    order_by,
                    page_no,
                    prime_hour,
                    province_id
                }
            })
    },

    /**
     * Returns clan data on the Global Map.
     * @async
     * @param {[number]} clan_id 
     * @param {string} access_token 
     * @param {[string]} fields 
     * @returns {JSON}
     */
    clanInfo(clan_id = [], access_token, fields = []) {

        paramValidation({ 
            input: clan_id, 
            type: 'object', 
            message: `The function 'globalMap.clanInfo' requires a array of strings consisting of one or more clan IDs.`
        })
        paramValidation({
            input: access_token,
            type: 'string',
            message: `The parameter 'access_token' of the function 'globalMap.clanInfo' must be a string.`,
            optional: true
        })
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' of the function 'globalMap.clanInfo' must be a array of strings.`,
            optional: true
        })

        return request({
            subURL: `globalmap/claninfo`,
            query: {
                clan_id,
                access_token,
                fields
            }
        })
    },

    /**
     * Returns lists of clans provinces.
     * @async
     * @param {[number]} clan_id 
     * @param {string} access_token 
     * @param {[string]} fields 
     * @returns {JSON}
     */
    clanProvinces(clan_id = [], access_token, fields = []) {
        
        paramValidation({
            input: clan_id,
            type: 'object',
            message: `The function 'globalMap.clanProvinces' requires a array of one or more clan IDs.`
        })
        paramValidation({
            input: access_token,
            type: 'string',
            message:`The parameter 'access_token' in the function 'globalMap.clanProvinces' must be a string.`,
            optional: true
        })
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'access_token' in the function 'globalMap.clanProvinces' must be a array of one or more fields.`,
            optional: true
        })

        return request({
            subURL: `globalmap/clanprovinces`,
            query: {
                clan_id,
                access_token,
                fields
            }
        })
    },

    /**
     * 
     * @async
     * @param {[number]} clan_id 
     * @param {string} access_token 
     * @param {[string]} fields 
     * @param {number} limit 
     * @param {number} page_no 
     * @returns {JSON}
     */
    clanBattles(clan_id = [], access_token, fields = [], limit, page_no = 1) {
        
        paramValidation({
            input: clan_id,
            type: 'object',
            message: `The function 'globalMap.clanBattles' requires a array of one or more clan IDs.`
        })
        paramValidation({
            input: access_token,
            type: 'string',
            message:`The parameter 'access_token' in the function 'globalMap.clanBattles' must be a string.`,
            optional: true
        })
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' in the function 'globalMap.clanBattles' must be a array of one or more fields.`,
            optional: true
        })
        paramValidation({
            input: limit,
            type: 'number',
            message: `The parameter 'limit' in the function 'globalMap.clanBattles' must be a number.`,
            optional: true
        })
        paramValidation({
            input: page_no,
            type: 'number',
            message: `The parameter 'page_no' in the function 'globalMap.clanBattles' must be a number.`,
            optional: true
        })

        return request({
            subURL: `globalmap/clanbattles`,
            query: {
                clan_id,
                access_token,
                fields,
                limit,
                page_no
            }
        })
    },

    /**
     * Returns information about seasons.
     * @async
     * @param {string} season_id 
     * @param {[string]} fields 
     * @param {number} limit 
     * @param {number} page_no 
     * @param {string} status 
     * @returns {JSON}
     */
    seasons(season_id, fields = [], limit, page_no = 1, status) {

        statusOptions = [
            'PLANNED',
            'ACTIVE',
            'FINISHED'
        ]

        paramValidation({
            input: season_id,
            type: 'string',
            message: `The function 'globalMap.seasons' requires a season ID.`
        })
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' in the function 'globalMap.seasons' must be a array of one or more fields.`,
            optional: true
        })
        paramValidation({
            input: limit,
            type: 'number',
            message: `The parameter 'limit' in the function 'globalMap.seasons' must be a number.`,
            optional: true
        })
        paramValidation({
            input: page_no,
            type: 'number',
            message: `The parameter 'page_no' in the function 'globalMap.seasons' must be a number.`,
            optional: true
        })
        paramValidation({
            input: status,
            type: 'string',
            message: `The parameter 'status' of the function 'globalMap.seasons' must be a string.`,
            options: statusOptions,
            optional: true
        })

        return request({
            subURL: `globalmap/seasons`,
            query: {
                season_id,
                fields,
                limit,
                page_no,
                status
            }
        })
    },

    /**
     * Returns clan's statistics for a specific season.
     * @async
     * @param {[number]} clan_id 
     * @param {string} season_id 
     * @param {[string]} vehicle_level 
     * @param {[string]} fields 
     * @returns {JSON}
     */
    seasonClanInfo(clan_id = [], season_id, vehicle_level = [], fields = []) {

        let vehicleLvlOptions = [
            '6',
            '8',
            '10'
        ]

        paramValidation({
            input: clan_id,
            type: 'object',
            message: `The function 'globalMap.seasonClanInfo' requires a array of one or more clan IDs.`
        })
        paramValidation({
            input: season_id,
            type: 'string',
            message: `The parameter 'season_id' in the function 'globalMap.seasonClanInfo' must be a string.`,
            optional: true
        })
        paramValidation({
            input: vehicle_level,
            type: 'object',
            message: `The parameter 'vehicle_level' of the function 'globalMap.seasonClanInfo' must be a array of one or more strings.`,
            options: vehicleLvlOptions,
            optional: true
        })
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' of the function 'globalMap.seasonClanInfo' must be a array of one or more strings.`,
            optional: true
        })
        
        return request({
            subURL: `globalmap/seasonclaninfo`,
            query: {
                clan_id,
                season_id,
                vehicle_level,
                fields
            }
        })
    },


    seasonAccountData(account_id, season_id, vehicle_level, fields = []) {
        
        paramValidation({
            input: account_id,
            type: 'number',
            message: `The function 'globalMap.seasonAcccountData' requires a account ID.`
        })
        paramValidation({
            input: season_id,
            type: 'string',
            message: `The function 'globalMap.seasonAccountData' requires a season ID.`
        })
        paramValidation({
            input: vehicle_level,
            type: 'string',
            message: `The function 'globalMap.seasonAccountData' requires a vehicle level.`
        })
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' of the function 'globalMap.seasonAccountData' must be a array of one or more strings.`,
            optional: true
        })

        return request({
            subURL: `globalmap/seasonaccountdata`,
            query: {
                account_id,
                season_id,
                vehicle_level,
                fields
            }
        })
    },
}
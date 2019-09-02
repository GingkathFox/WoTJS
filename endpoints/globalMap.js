let request = require('./Utility/request')
let paramVerification = require('./Utility/paramVerification')

module.exports = {

    /**
     * Returns information about the Global Map Fronts.
     * @param {[string]} fields 
     * @param {[string]} front_id 
     * @param {number} limit 
     * @param {number} page_no 
     */
    fronts(fields = [], front_id = [], limit, page_no = 1) {

        paramVerification({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' in the function 'globalMap.fronts' must be a array of strings.`,
            optional: true
        })
        paramVerification({
            input: front_id,
            type: 'object',
            message: `The parameter 'front_id' in the function 'globalMap.fronts' must be a array of strings.`,
            optional: true
        })
        paramVerification({
            input: limit,
            type: 'number',
            message: `The parameter 'limit' in the function 'globalMap.fronts' must be a number.`,
            optional: true
        })
        paramVerification({
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
     */
    provinces(front_id, arena_id, daily_revenue_gte, daily_revenue_lte, fields = [], 
        landing_type, limit, order_by, page_no, prime_hour, province_id = []) {
        
            function verify() {
                paramVerification({
                    input: front_id,
                    type: 'string',
                    message: `The function 'globalMap.provinces' requires a front ID.`,
                })
                paramVerification({
                    input: arena_id,
                    type: 'string',
                    message: `The parameter 'arena_id' of the function 'globalMap.provinces' must be a string.`,
                    optional: true
                })
                paramVerification({
                    input: daily_revenue_gte,
                    type: 'number',
                    message: `The parameter 'daily_revenue_gte' of the function 'globalMap.provinces' must be a number.`,
                    optional: true
                })
                paramVerification({
                    input: daily_revenue_lte,
                    type: 'number',
                    message: `The parameter 'daily_revenue_lte' of the function 'globalMap.provinces' must be a number.`,
                    optional: true
                })
                paramVerification({
                    input: fields,
                    type: 'object',
                    message: `The parameter 'fields' in the function 'globalMap.provinces' must be a array of strings.`,
                    optional: true
                })
                paramVerification({
                    input: landing_type,
                    type: 'string',
                    message: `The parameter 'landing_type' of the function 'globalMap.provinces' must be a string.`,
                    optional: true
                })
                paramVerification({
                    input: limit,
                    type: 'number',
                    message: `The parameter 'limit' in the function 'globalMap.provinces' must be a number.`,
                    optional: true
                })
                paramVerification({
                    input: order_by,
                    type: 'string',
                    message: `The parameter 'order_by' of the function 'globalMap.provinces' must be a string.`,
                    optional: true
                })
                paramVerification({
                    input: page_no,
                    type: 'number',
                    message: `The parameter page_no' in the function 'globalMap.provinces' must be a number.`,
                    optional: true
                })
                paramVerification({
                    input: prime_hour,
                    type: 'number',
                    message: `The parameter 'prime_hour' of the function 'globalMap.provinces' must be a number.`,
                    optional: true
                })
                paramVerification({
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
     * @param {[number]} clan_id 
     * @param {string} access_token 
     * @param {[string]} fields 
     */
    clanInfo(clan_id = [], access_token, fields = []) {

        paramVerification({ 
            input: clan_id, 
            type: 'object', 
            message: `The function 'globalMap.clanInfo' requires a array of strings consisting of one or more clan IDs.`
        })
        paramVerification({
            input: access_token,
            type: 'string',
            message: `The parameter 'access_token' of the function 'globalMap.clanInfo' must be a string.`,
            optional: true
        })
        paramVerification({
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
    }
}
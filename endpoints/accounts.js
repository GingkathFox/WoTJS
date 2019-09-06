let request = require('./Utility/request')
let paramValidation = require('./Utility/paramValidation')

module.exports = {
    
    /**
     * Returns partial list of players. The list is filtered by initial characters of user name and sorted alphabetically.
     * @async
     * @param {[string]} playerName 
     * @param {string} type 
     * @param {[string]} fields 
     * @param {number} limit 
     * @returns {JSON}
     */
    players(playerName = [], type = 'startswith', fields = [], limit) {

            paramValidation({ 
                input: playerName, 
                type: 'object', 
                message: `The function 'account.players' requires a array of strings consisting of one or more player names.`
            })
            paramValidation({ 
                input: type, 
                type: 'string', 
                message: `The parameter 'type' of 'account.players' must be either 'startswith' or 'exact'.`
            })
            paramValidation({
                input: fields,
                type: 'object',
                message: `The parameter 'fields' of the function 'accounts.players' must be a array of strings.`,
                optional: true
            })
            paramValidation({
                input: limit,
                type: 'number',
                message: `The parameter 'number' of the function 'accounts.players' must be a array of strings.`,
                optional: true
            })
        
        return request({
            subURL: `account/list`,
            query: {
                search: playerName,
                type
            }
        })
    },
    
    /**
     * Returns player details.
     * @async
     * @param {[number]} account_id 
     * @param {[string]} extra 
     * @param {[string]} fields 
     * @param {string} access_token 
     * @returns {JSON}
     */
    playerPersonalData(account_id = [], extra = [], fields = [], access_token = '') {

        let extraOptions = [
            "private.boosters",
            "private.garage",
            "private.grouped_contacts",
            "private.personal_missions",
            "private.rented",
            "statistics.epic",
            "statistics.fallout",
            "statistics.globalmap_absolute",
            "statistics.globalmap_champion",
            "statistics.globalmap_middle",
            "statistics.random",
            "statistics.ranked_battles",
            "statistics.ranked_battles_current",
            "statistics.ranked_battles_previous"
        ]

        paramValidation({
            input: account_id, 
            type: 'object', 
            message: `The function 'accounts.playerPersonalData' requires a array of one or more player IDs.`
        })
        paramValidation({
            input: extra,
            type: 'object',
            message: `The parameter 'extra' of the function 'accounts.playerPersonalData' must be a array of strings consisting of one or more of the options below.`,
            options: extraOptions,
            optional: true
        })
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' of the function 'accounts.playerPersonalData' must be a array of strings.`,
            optional: true
        })
        paramValidation({
            input: access_token,
            type: 'string',
            message: `The parameter 'access_token' of the function 'accounts.playerPersonalData' must be a string.`,
            optional: true
        })

        return request({
            subURL: `account/info`,
            query: {
                account_id,
                extra,
                fields,
                access_token
            }
        })

    },

    /**
     * Returns details on player's vehicles.
     * @async
     * @param {[number]} account_id 
     * @param {[string]} fields 
     * @param {string} access_token 
     * @returns {JSON}
     */
    playerVehicles(account_id = [], fields = [], access_token = '') {

        paramValidation({
            input: account_id, 
            type: 'object', 
            message: `The function 'accounts.playerVehicles' requires a array of one or more player IDs.`
        })
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' of the function 'accounts.playerVehicles' must be a array of strings.`,
            optional: true
        })
        paramValidation({
            input: access_token,
            type: 'string',
            message: `The parameter 'access_token' of the function 'accounts.playerVehicles' must be a string.`,
            optional: true
        })

        return request({
            subURL: `accounts/tanks`,
            query: {
                account_id,
                fields,
                access_token
            }
        })
    },

    /**
     * Returns players' achievement details.
     * 
     * Achievement properties define the achievements field values:
     * - 1-4 for Mastery Badges and Stage Achievements (type: "class");
     * - maximum value of Achievement series (type: "series");
     * - number of achievements earned from sections: Battle Hero, Epic Achievements, Group Achievements, Special Achievements, etc. (type: "repeatable, single, custom").
     * @async
     * @param {[number]} account_id 
     * @param {[string]} fields 
     * @returns {JSON}
     */
    playerAchievements(account_id = [], fields = []) {

        paramValidation({
            input: account_id, 
            type: 'object', 
            message: `The function 'accounts.playerAchievements' requires a array of one or more player IDs.`
        })
        paramValidation({
            input: fields,
            type: 'object',
            message: `The parameter 'fields' of the function 'accounts.playerAchievements' must be a array of strings.`,
            optional: true
        })

        return request({
            subURL: `accounts/achievements`,
            query: {
                account_id,
                fields,
            }
        })

    }

}
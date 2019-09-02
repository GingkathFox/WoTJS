# WoTJS
 
WoTJS is a NodeJS module to make getting info from the WoT API much easier. Endpoints are divided into groups based on where they are in the API reference.

# USAGE

```js
let wotJS = require('wotjs')

let data = await wotJS.<group>.function()
                .catch(function(e) {
                    // Whatever you want to do with errors
                })
// or...

let moreData;
try {
    moreData = await wotJS.<group>.function()
} catch(e) {
    // Error? What error?
}
```

The WoT API requires a application ID to access the endpoints. For WoTJS to find your ID, rename the `secret.json.example` to `secret.json` and replace the text `APP_ID` with your application ID.

# FUNCTIONS

```js
// Accounts
wotJS.accounts.players(playerNames, type, fields, limit)
wotJS.accounts.playerPersonalData(PlayerIDs, extra, fields, access_token)
wotJS.accounts.playerVehicles(PlayerIDs, fields, access_token)
wotJS.accounts.playerAchievements(PlayerIDs, fields)

// Strongholds

wotJS.strongholds.clanInfo(clanIDs, fields)
wotJS.strongholds.clanReserves(clanIDs, fields)
wotJS.strongholds.activateClanReserve(access_token, reserve_level, reserve_type, fields)
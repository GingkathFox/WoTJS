# WoTJS
 
WoTJS is a NodeJS module to make getting info from the WoT API much easier. Endpoints are divided into groups based on where they are in the API reference.

# USAGE

```js
let wotJS = require('wotjs')

let data = wotJS.<group>.function()
                .catch(function(e) { // .catch() is used when you dont `await` a function
                    // Whatever you want to do with errors
                })
// or...

let moreData;
try { 
    moreData = await wotJS.<group>.function()
} catch(e) { // try/catch is used when you do `await` a function
    // Error? What error?
}
```

The WoT API requires a application ID to access the endpoints. For WoTJS to find your ID, rename the `secret.json.example` to `secret.json` and replace the text `APP_ID` with your application ID.

# FUNCTIONS

Arguments with a asterick (*) by their name are required. 
If you need to skip a argument, add this line to the top of your code:

`let _ = undefined`

Then use it like so:

`wotJS.<group>.function(arg1, _, _, arg2)`

```js
// Accounts
wotJS.accounts.players(*playerNames, type, fields, limit)
wotJS.accounts.playerPersonalData(*PlayerIDs, extra, fields, access_token)
wotJS.accounts.playerVehicles(*PlayerIDs, fields, access_token)
wotJS.accounts.playerAchievements(*PlayerIDs, fields)

// Strongholds

wotJS.strongholds.clanInfo(*clanIDs, fields)
wotJS.strongholds.clanReserves(*clanIDs, fields)
wotJS.strongholds.activateClanReserve(*access_token, *reserve_level, *reserve_type, fields)

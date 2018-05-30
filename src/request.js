let url = `https://api.mysportsfeeds.com/v1.2/pull/nba/2016-2017-regular/cumulative_player_stats.json?player=`;

function b64EncodeUnicode(str) { // encode user id to base64
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
}

const getPlayerObject = data => {
    let rawPlayerObj = data.cumulativeplayerstats.playerstatsentry[0];
    let rawPlayerInfo = rawPlayerObj.player;
    let rawPlayerStats = rawPlayerObj.stats;
    let rawPlayerTeam = rawPlayerObj.team;
    let fName = rawPlayerInfo.FirstName;
    let lName = rawPlayerInfo.LastName;
    let jersey = rawPlayerInfo.JerseyNumber;
    let city = rawPlayerTeam.City;
    let team = rawPlayerTeam.Name;
    let position = rawPlayerInfo.Position;
    let apg = rawPlayerStats.AstPerGame["#text"];
    let ppg = rawPlayerStats.PtsPerGame["#text"];
    let rpg = rawPlayerStats.RebPerGame["#text"];
    
    let playerObject = {
            name : `${fName} ${lName}`,
            team : team,
            city : city,
            position : position,
            stats : {
                season : '16-17',
                ppg : ppg,
                apg : apg,
                rpg : rpg	
            }
            }
    
    return playerObject;
}

let headers = new Headers();
headers.append('Authorization', 'Basic ' + b64EncodeUnicode("Cooperrun:CYPhaipisButsE7"));

const request = (player) => { 
    url += player;
    return fetch(url, {method:'GET',
    headers: headers,
    })
    .then(response => response.json())
    .then(json => getPlayerObject(json))
};

// let obj = [];



// request('lillard').then(data => {
//     obj.push(data);
//     return obj;
// })

export default request;




function b64EncodeUnicode(str) { // encode user id to base64
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
}

const getPlayerObject = data => {
    let playerObjects = [];
    data.cumulativeplayerstats.playerstatsentry.map(player => {
        let rawPlayerObj = player;
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
        let assists = rawPlayerStats.Ast["#text"];
        let points = rawPlayerStats.Pts["#text"];
        let blocks = rawPlayerStats.Blk["#text"];
        let rebounds = rawPlayerStats.Reb["#text"];
        let threepct = rawPlayerStats.Fg3PtPct["#text"];

        let playerObject = {
                name : `${fName} ${lName}`,
                team : team,
                city : city,
                jersey : jersey,
                position : position,
                stats : {
                    season : '16-17',
                    ppg : ppg,
                    apg : apg,
                    rpg : rpg,
                    assists : assists,
                    points : points, 
                    blocks : blocks,
                    rebounds : rebounds,
                    threepct : threepct	
                }
            }
        playerObjects.push(playerObject);
        })
        return playerObjects;
}

let headers = new Headers();
headers.append('Authorization', 'Basic ' + b64EncodeUnicode("Cooperrun:CYPhaipisButsE7"));

const request = (player) => { 
    let url = `https://api.mysportsfeeds.com/v1.2/pull/nba/2016-2017-regular/cumulative_player_stats.json?player=${player}`;
    console.log(url);
    return fetch(url, {method:'GET',
    headers: headers,
    })
    .then(response => response.json())
    .then(json => getPlayerObject(json))
};

export default request;

// if (response.ok){}else{alert("NAH BRAH")}   
// }
var axios = require('axios');

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
    getPlayersInfo: function(players) {
        return axios.all(players.map(function(player) {
            return getUserInfo(player)
        })).then(function(info) {
            return info.map(function(user) {
                return user.data
            })
        }).catch(function(err) {
            console.warn('Error in getPlayersInfo:', err);
        })
    }
};

module.exports = helpers;
var axios = require('axios');

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username)
}

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos')
}

function getTotalStars(repos) {
    return repos.data.reduce(function(prev, current) {
        return prev + current.stargazers_count
    }, 0)
}

function getPlayersData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function(totalStars) {
            return {
                followers: player.followers,
                totalStars: totalStars
            }
        })
}

function calculateResults(players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ]
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
    },

    battle: function(players) {
        var playerOneData = getPlayersData(players[0]);
        var playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])
            .then(calculateResults)
            .catch(function(err) {
                console.warn('Error at', err);
            })
    }
};

module.exports = helpers;
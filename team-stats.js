team = {
    _players: [
        { firstName: 'Luis', lastName: 'Suarez', age: 34 },
        { firstName: 'Neymar', lastName: 'da Silva Santos', age: 29 },
        { firstName: 'Lionel', lastName: 'Messi', age: 33 },
    ],
    _games: [
        { opponent: 'Real Madrid', teamPoints: 27, opponentPoints: 3 },
        { opponent: 'PSG', teamPoints: 37, opponentPoints: 39 },
        { opponent: 'Bayern Munchen', teamPoints: 18, opponentPoints: 7 },
    ],
    get firstName() {
        return this._players.firstName;
    },
    get lastName() {
        return this._players.lastName;
    },
    get age() {
        return this._players.age;
    },
    get opponent() {
        return this._games.opponent;
    },
    get teamPoints() {
        return this._games.teamPoints;
    },
    get opponentPoints() {
        return this._games.opponentPoints;
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        };
        return this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        };
        return this._games.push(game);
    },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players);

team.addGame('Juventus', 48, 48);
team.addGame('Manchester City', 7, 18);
team.addGame('Inter Milan', 35, 30);

console.log(team._games);

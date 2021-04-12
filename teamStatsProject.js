

const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
        }
      ],
    _games: [ 
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
     let player = {
       firstName: firstName,
       lastName: lastName,
       age: age
     };
     this.players.push(player);
    },
    addGame(opponent, myPts, oppPts) {
      const game = {
        opponent: opponent,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this.games.push(game);
    }
  }
  
  team.addPlayer('Steph', 'Cury', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  
  team.addGame('Larry', 28, 20);
  console.log(team.games)
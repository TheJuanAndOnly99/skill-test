import { Game } from './domain/game';
import { Team } from './domain/team';
import { Player } from './domain/player';

// Team A
const teamA = new Team('Team A');

const playerA1 = new Player('John');
teamA.addPlayer(playerA1);

const playerA2 = new Player('Paul');
teamA.addPlayer(playerA2);

const playerA3 = new Player('George');
teamA.addPlayer(playerA3);

const playerA4 = new Player('Ringo');
teamA.addPlayer(playerA4);

// Team B
const teamB = new Team('Team B');

const playerB1 = new Player('Mick');
teamB.addPlayer(playerB1);

const playerB2 = new Player('Keith');
teamB.addPlayer(playerB2);

const playerB3 = new Player('Charlie');
teamB.addPlayer(playerB3);

const playerB4 = new Player('Ronnie');
teamB.addPlayer(playerB4);

// Play game
const game = new Game(teamA, teamB);

(async () => {
	const finalScore = await game.play();

	const winner = game.getWinner();

	console.log(`The winner is ${winner}, Final Score: Team A - ${finalScore} - Team B.`);
})();

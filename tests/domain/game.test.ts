import { Game } from '../../src/domain/game';
import { Team } from '../../src/domain/team';

describe('Game class', () => {
	describe('constructor function', () => {
		test('it should create a new game', () => {
			const teamA = new Team('Team A');
			const teamB = new Team('Team B');
			const game = new Game(teamA, teamB);
			const expectedResult = {
				scoreKeeper: {
					scoreTeamA: 0,
					scoreTeamB: 0
				},
				teamA: {
					name: 'Team A',
					players: []
				},
				teamB: {
					name: 'Team B',
					players: []
				}
			};

			expect(game).toEqual(expectedResult);
		});
	});

	describe('play function', () => {
		test('it should return the final score', async () => {
			const teamA = new Team('Team A');
			const teamB = new Team('Team B');
			const game = new Game(teamA, teamB);
			const finalScore = await game.play();
			const expectedResult = '000:000';

			expect(finalScore).toEqual(expectedResult);
		});
	});
});

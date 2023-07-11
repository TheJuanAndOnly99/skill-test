import { Team } from '../../src/domain/team';
import { Player } from '../../src/domain/player';

describe('Team class', () => {
	describe('constructor function', () => {
		test('it should create a new team', () => {
			const team = new Team('Red');
			const expectedResult = {
				name: 'Red',
				players: []
			};

			expect(team).toEqual(expectedResult);
		});
	});

	describe('getPlayers function', () => {
		test('it should return the players of the team', () => {
			const team = new Team('Red');
			const result = team.getPlayers();
			const expectedResult: any[] = [];

			expect(result).toEqual(expectedResult);
		});
	});

	describe('addPlayer function', () => {
		test('it should add a player to the team', () => {
			const team = new Team('Red');
			const player = new Player('John');
			team.addPlayer(player);
			const result = team.getPlayers();
			const expectedResult = [ player ];

			expect(result).toEqual(expectedResult);
		});
	});
});

import { Player } from '../../src/domain/player';

describe('Player class', () => {
	describe('constructor function', () => {
		test('it should create a new player', () => {
			const player = new Player('John');
			const expectedResult = {
				name: 'John'
			};

			expect(player).toEqual(expectedResult);
		});
	});

	describe('getName function', () => {
		test('it should return the name of the player', () => {
			const player = new Player('John');
			const result = player.getName();
			const expectedResult = 'John';

			expect(result).toEqual(expectedResult);
		});
	});
});

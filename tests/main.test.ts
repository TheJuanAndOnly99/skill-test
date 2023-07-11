import { getName } from '../src/main';

describe('getName function', () => {
	test('it should return the name of the player', () => {
		const result = getName('John');
		const expectedResult = 'John';

		expect(result).toEqual(expectedResult);
	});
});

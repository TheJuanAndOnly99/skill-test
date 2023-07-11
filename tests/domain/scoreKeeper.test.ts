import { ScoreKeeper } from '../../src/domain/scoreKeeper';

describe('ScoreKeeper class', () => {
	describe('constructor function', () => {
		test('it should create a new score keeper', () => {
			const scoreKeeper = new ScoreKeeper();
			const expectedResult = {
				scoreTeamA: 0,
				scoreTeamB: 0
			};

			expect(scoreKeeper).toEqual(expectedResult);
		});
	});

	describe('scoreTeamA1 function', () => {
		test('it should add 1 point to team A', () => {
			const scoreKeeper = new ScoreKeeper();
			scoreKeeper.scoreTeamA1();
			const result = scoreKeeper.getScore();
			const expectedResult = '001:000';

			expect(result).toEqual(expectedResult);
		});
	});

	describe('scoreTeamA2 function', () => {
		test('it should add 2 points to team A', () => {
			const scoreKeeper = new ScoreKeeper();
			scoreKeeper.scoreTeamA2();
			const result = scoreKeeper.getScore();
			const expectedResult = '002:000';

			expect(result).toEqual(expectedResult);
		});
	});

	describe('scoreTeamA3 function', () => {
		test('it should add 3 points to team A', () => {
			const scoreKeeper = new ScoreKeeper();
			scoreKeeper.scoreTeamA3();
			const result = scoreKeeper.getScore();
			const expectedResult = '003:000';

			expect(result).toEqual(expectedResult);
		});
	});

	describe('scoreTeamB1 function', () => {
		test('it should add 1 point to team B', () => {
			const scoreKeeper = new ScoreKeeper();
			scoreKeeper.scoreTeamB1();
			const result = scoreKeeper.getScore();
			const expectedResult = '000:001';

			expect(result).toEqual(expectedResult);
		});
	});

	describe('scoreTeamB2 function', () => {
		test('it should add 2 points to team B', () => {
			const scoreKeeper = new ScoreKeeper();
			scoreKeeper.scoreTeamB2();
			const result = scoreKeeper.getScore();
			const expectedResult = '000:002';

			expect(result).toEqual(expectedResult);
		});
	});

	describe('scoreTeamB3 function', () => {
		test('it should add 3 points to team B', () => {
			const scoreKeeper = new ScoreKeeper();
			scoreKeeper.scoreTeamB3();
			const result = scoreKeeper.getScore();
			const expectedResult = '000:003';

			expect(result).toEqual(expectedResult);
		});
	});
});

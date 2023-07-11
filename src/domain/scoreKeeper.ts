export class ScoreKeeper {
	public scoreTeamA: number;
	public scoreTeamB: number;

	constructor() {
		this.scoreTeamA = 0;
		this.scoreTeamB = 0;
	}

	scoreTeamA1() {
		this.scoreTeamA += 1;
	}

	scoreTeamA2() {
		this.scoreTeamA += 2;
	}

	scoreTeamA3() {
		this.scoreTeamA += 3;
	}

	scoreTeamB1() {
		this.scoreTeamB += 1;
	}

	scoreTeamB2() {
		this.scoreTeamB += 2;
	}

	scoreTeamB3() {
		this.scoreTeamB += 3;
	}

	// Get the current score in the format "000:000"
	getScore() {
		const formattedScoreA = this.formatScore(this.scoreTeamA);
		const formattedScoreB = this.formatScore(this.scoreTeamB);
		return `${formattedScoreA}:${formattedScoreB}`;
	}

	// Helper function to format the score with leading zeros
	private formatScore(score: number) {
		return score.toString().padStart(3, '0');
	}
}

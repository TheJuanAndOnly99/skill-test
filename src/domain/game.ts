import { Team } from './team';
import { ScoreKeeper } from './scoreKeeper';
import { Player } from './player';

export class Game {
	private teamA: Team;
	private teamB: Team;
	private scoreKeeper: ScoreKeeper;

	constructor(teamA: Team, teamB: Team) {
		this.teamA = teamA;
		this.teamB = teamB;
		this.scoreKeeper = new ScoreKeeper();
	}

	private getShot(): Promise<number> {
		return new Promise((resolve) => {
			setTimeout(() => {
				const randomTeam = Math.random() < 0.5 ? this.teamA : this.teamB;
				const randomPoints = Math.floor(Math.random() * 3) + 1;

				if (randomTeam === this.teamA) {
					switch (randomPoints) {
						case 1:
							this.scoreKeeper.scoreTeamA1();
							break;
						case 2:
							this.scoreKeeper.scoreTeamA2();
							break;
						case 3:
							this.scoreKeeper.scoreTeamA3();
							break;
						default:
							break;
					}
				}
				else {
					switch (randomPoints) {
						case 1:
							this.scoreKeeper.scoreTeamB1();
							break;
						case 2:
							this.scoreKeeper.scoreTeamB2();
							break;
						case 3:
							this.scoreKeeper.scoreTeamB3();
							break;
						default:
							break;
					}
				}

				let randomPlayer: Player | undefined;
				if (randomTeam === this.teamA) {
					const teamAPlayers = randomTeam.getPlayers();
					randomPlayer = teamAPlayers[Math.floor(Math.random() * teamAPlayers.length)];
				}
				else {
					const teamBPlayers = randomTeam.getPlayers();
					randomPlayer = teamBPlayers[Math.floor(Math.random() * teamBPlayers.length)];
				}

				if (randomPlayer) {
					console.log(
						`Player ${randomPlayer.getName()} from ${randomTeam.getTeamName()} scored ${randomPoints} point(s).`
					);
				}

				resolve(randomPoints);
			}, 2000);
		});
	}

	async play(): Promise<string> {
		for (let i = 0; i < 10; i++) {
			await this.getShot();
			console.log(this.scoreKeeper.getScore());
		}

		return this.scoreKeeper.getScore();
	}
}

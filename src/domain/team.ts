import { Player } from './player';

export class Team {
	private players: Player[];

	constructor(public name: string) {
		this.players = [];
	}

	getPlayers() {
		return this.players;
	}

	getTeamName() {
		return this.name;
	}

	addPlayer(player: Player) {
		this.players.push(player);
	}

	removePlayer(player: Player) {
		const index = this.players.indexOf(player);
		if (index !== -1) {
			this.players.splice(index, 1);
		}
	}
}

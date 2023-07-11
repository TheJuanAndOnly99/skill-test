export class Player {
	constructor(public name: string, public points: number = 0) {}

	getName() {
		return this.name;
	}
}

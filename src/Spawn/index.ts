import Game from "../Game";
import {Npc} from "../Tanks";


export default class Spawn {
	lastInterval: number
	spawnInterval: number
	constructor(
		public npcs: Npc[]
	) {
		this.npcs = npcs
		this.spawnInterval = 3000
		this.lastInterval = Date.now()
	}
	spawnEnemy(
		Game: Game,
		timeNow: number){
		if(this.lastInterval + this.spawnInterval < timeNow){
			const X = Math.floor(Math.random() * Game.canvas.width - 50) + 25
			const Y = 5
			this.npcs.push(new Npc(Game, X, Y))
			this.spawnInterval = 2000 + 1000 * this.npcs.length
			this.lastInterval = timeNow
		}
	}
}

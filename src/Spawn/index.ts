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
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement,
		timeNow: number){
		if(this.lastInterval + this.spawnInterval < timeNow){
			const X = Math.floor(Math.random() * canvas.width-50) +25
			const Y = 10
			this.npcs.push(new Npc(ctx, canvas, X, Y))
			this.spawnInterval = 2000 + 1000 * this.npcs.length
			this.lastInterval = timeNow
		}
	}
}

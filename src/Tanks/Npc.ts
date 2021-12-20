import {DIRECTION} from "."
import Tank from "./Tank"

export default class Npc extends Tank {
	interval: number
	lastInterval: number
	constructor(
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement,
		public posX: number,
		public posY: number) {
		super(ctx, canvas, posX, posY)
		this.interval = 500
		this.lastInterval = Date.now()
	}
	draw() {
		const timeNow = Date.now()
		if(this.lastInterval + this.interval < timeNow){
			this.changeMovement()
			this.lastInterval = timeNow
		}
		this.move()
		this.ctx.beginPath()
		this.ctx.strokeStyle = 'blue'
		this.ctx.rect(this.posX, this.posY, this.size, this.size)
		this.ctx.stroke()
	}
	changeMovement(){
		this.isMoving = Math.random() > 0.25 ? true : false
		let dir = Math.random()
		if(dir >= 0.75) this.direction = DIRECTION.UP
		else if(dir >= 0.50) this.direction = DIRECTION.DOWN
		else if(dir >= 0.25) this.direction = DIRECTION.LEFT
		else this.direction = DIRECTION.RIGHT
	}

}

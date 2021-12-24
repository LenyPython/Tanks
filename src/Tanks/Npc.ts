import {DIRECTION} from "."
import Tank from "./Tank"

export default class Npc extends Tank {
	interval: number
	lastInterval: number
	constructor(
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement,
		posX: number,
		posY: number,
		public direction = DIRECTION.DOWN,
		src = require('../imgs/Enemy.png')) {
		super(ctx, canvas, posX, posY, direction, src)
		this.interval = 500
		this.lastInterval = Date.now()
	}
	draw(timeNow: number) {
		if(this.lastInterval + this.interval < timeNow){
			this.changeMovement()
			this.lastInterval = timeNow
		}
		this.move()
		this.drawMovable()
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

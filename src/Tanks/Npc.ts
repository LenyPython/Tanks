import {DIRECTION} from "."
import Tank from "./Tank"

export default class Npc extends Tank {
	interval: number
	lastInterval: number
	constructor(
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement,
		posX: number,
		posY: number) {
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
		this.sprite.move()
		this.drawSprite()
	}
	changeMovement(){
		this.sprite.isMoving = Math.random() > 0.25 ? true : false
		let dir = Math.random()
		if(dir >= 0.75) this.sprite.direction = DIRECTION.UP
		else if(dir >= 0.50) this.sprite.direction = DIRECTION.DOWN
		else if(dir >= 0.25) this.sprite.direction = DIRECTION.LEFT
		else this.sprite.direction = DIRECTION.RIGHT
	}

}

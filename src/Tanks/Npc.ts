import {DIRECTION} from "."
import Bullet from "../Bullet"
import Tank from "./Tank"

export default class Npc extends Tank {
	moveInterval: number
	shootInterval: number
	lastMoveInterval: number
	lastShootInterval: number
	bullets: Bullet[]
	constructor(
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement,
		posX: number,
		posY: number,
		public direction = DIRECTION.DOWN,
		src = require('../imgs/Enemy.png')) {
		super(ctx, canvas, posX, posY, direction, src)
		this.moveInterval = 500
		this.shootInterval = 1500
		this.lastMoveInterval = Date.now()
		this.lastShootInterval = Date.now()
		this.bullets = []
	}
	drawNPC(timeNow: number) {
		if(this.lastMoveInterval + this.moveInterval < timeNow){
			this.changeMovement()
			this.lastMoveInterval = timeNow
		}
		if(this.lastShootInterval + this.shootInterval < timeNow){
			this.fireBullet()
			this.lastShootInterval = timeNow
		}
		this.drawTank()
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

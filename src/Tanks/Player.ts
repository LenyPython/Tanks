import Tank from './Tank'
import {DIRECTION} from './index'
import {keyInterface} from '../constants'

export default class Player extends Tank {
	constructor(
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement,
		public keySet: keyInterface,
		public posX: number,
		public posY: number) {
		super(ctx, canvas, posX, posY)
		this.isMoving = false
		this.keySet = keySet
		this.direction = DIRECTION.UP
	}
	draw() {
		this.move()
		this.ctx.beginPath()
		this.ctx.strokeStyle = 'blue'
		this.ctx.rect(this.posX, this.posY, this.size, this.size)
		this.ctx.stroke()
	}
}

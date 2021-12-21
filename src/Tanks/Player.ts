import Tank from './Tank'
import {DIRECTION} from './index'
import {keyInterface} from '../constants'

export default class Player extends Tank {
	constructor(
		public keySet: keyInterface,
		ctx: CanvasRenderingContext2D,
		canvas: HTMLCanvasElement,
		src: string) {
		super(ctx, canvas, canvas.width/2 - 100, canvas.height - 60)
		this.sprite.isMoving = false
		this.keySet = keySet
		this.sprite.img.src = src
		this.sprite.direction = DIRECTION.UP
	}
	draw() {
		this.sprite.move()
		this.drawSprite()
	}
}

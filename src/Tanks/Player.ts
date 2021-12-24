import Tank from './Tank'
import {DIRECTION} from './index'
import {keyInterface} from '../constants'

export default class Player extends Tank {
	constructor(
		public keySet: keyInterface,
		protected ctx: CanvasRenderingContext2D, 
		canvas: HTMLCanvasElement, 
		public posX: number,
		public posY: number,
		public direction: DIRECTION,
		public src: string,
		) {
		super(ctx, canvas, posX, posY, DIRECTION.UP, src)
		this.keySet = keySet
		this.isMoving = false
		this.sprite.img.src = src
		this.direction = DIRECTION.UP
	}
	draw() {
		this.move()
		this.drawMovable()
	}
}

import {DIRECTION} from './index'

export default class Tank {
	isMoving: boolean
	direction: DIRECTION
	size: number
	constructor(
		protected ctx: CanvasRenderingContext2D, 
		public posX: number, 
		public posY: number, 
		public health = 1) {
		this.ctx = ctx
		this.posX = posX
		this.posY = posY
		this.isMoving = false
		this.size = 50
		this.direction = DIRECTION.DOWN
		this.health = health
	}
}

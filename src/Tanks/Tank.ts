import {DIRECTION} from './index'

export default class Tank {
	isMoving: boolean
	direction: DIRECTION
	size: number
	speed: number
	constructor(
		protected ctx: CanvasRenderingContext2D, 
		protected canvas: HTMLCanvasElement, 
		public posX: number, 
		public posY: number, 
		public health = 1) {
		this.ctx = ctx
		this.canvas = canvas
		this.posX = posX
		this.posY = posY
		this.direction = DIRECTION.DOWN
		this.health = health
		this.isMoving = false
		this.size = 64
		this.speed = 10
	}
}

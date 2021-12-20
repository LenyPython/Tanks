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
		this.isMoving = true
		this.size = 64
		this.speed = 10
	}
	move(){
		if(!this.isMoving) return
			switch(this.direction){
				case DIRECTION.UP:
					this.posY -= this.speed
					if(this.posY < 0) this.posY = 0
					break
				case DIRECTION.DOWN:
					this.posY += this.speed
					if(this.posY + this.size > this.canvas.height) this.posY = this.canvas.width - this.size
					break
				case DIRECTION.LEFT:
					this.posX -= this.speed
					if(this.posX < 0) this.posX = 0
					break
				case DIRECTION.RIGHT:
					this.posX += this.speed
					if(this.posX + this.size > this.canvas.width) this.posX = this.canvas.width - this.size
					break
			}
	}


}

import {DIRECTION} from '../Tanks'

export default class Sprite{
	size: number
	isMoving: boolean
	direction: DIRECTION
	speed: number
	img: HTMLImageElement
	frame: number
	constructor (
		public posX: number, 
		public posY: number, 
		public canvas: HTMLCanvasElement,
		public src: string,
		public health = 1
	){
		this.posX = posX
		this.posY = posY
		this.frame = 0
		this.img = new Image()
		this.img.src = src
		this.size = 45
		this.direction = DIRECTION.DOWN
		this.health = health
		this.isMoving = true
		this.speed = 5
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
				if(this.posY + this.size > this.canvas.height){
				 this.posY = this.canvas.width - this.size
				}
					break
				case DIRECTION.LEFT:
					this.posX -= this.speed
					if(this.posX < 0) this.posX = 0
					break
				case DIRECTION.RIGHT:
					this.posX += this.speed
				if(this.posX + this.size > this.canvas.width){
					 this.posX = this.canvas.width - this.size
				}
					break
			}
	}
}

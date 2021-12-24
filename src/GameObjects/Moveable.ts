import GameObject from "./GameObject"
import {DIRECTION} from '../Tanks'


export default class Movable extends GameObject {
	isMoving: boolean
	constructor(
		protected ctx: CanvasRenderingContext2D, 
		public canvas: HTMLCanvasElement,
		public posX: number, 
		public posY: number, 
		public size = 45,
		public speed = 5,
		public direction = DIRECTION.DOWN,
		protected src: string,

	){
		super(ctx, posX, posY, canvas, size, src)
		this.direction = direction
		this.isMoving = true
		this.speed = speed

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
	drawMovable(){
		if(this.isMoving) this.sprite.frame++
		if(this.sprite.frame > this.maxFrame) this.sprite.frame = 0
		let rotation = 0
		switch(this.direction){
			case DIRECTION.DOWN:
				rotation = 1 * this.size
				break
			case DIRECTION.RIGHT:
				rotation = 2 * this.size
				break
			case DIRECTION.LEFT:
				rotation = 3 * this.size
				break
		}
		this.ctx.drawImage(
			this.sprite.img, 
			//how to crop image x px on each frame, y px always 0
			this.sprite.frame * this.size,
			rotation,
			//size of croped img
			this.size,
			this.size,
			//start position of drawing
			this.posX,
			this.posY,
			//size of drawing
			this.size,
			this.size,
			)
}
}

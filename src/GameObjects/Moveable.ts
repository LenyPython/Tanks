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
}

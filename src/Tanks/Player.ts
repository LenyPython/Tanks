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

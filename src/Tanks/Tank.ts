import {DIRECTION} from '.'
import Movable from '../GameObjects/Moveable'

const enemySprite = require('../imgs/Enemy.png')


export default class Tank extends Movable {
	maxFrame: number
	constructor(
		protected ctx: CanvasRenderingContext2D, 
		canvas: HTMLCanvasElement, 
		public posX: number,
		public posY: number,
		public direction: DIRECTION,
		public src = enemySprite,
		public size = 45,
		public speed = 5
		) {
		super(ctx, canvas, posX, posY, size, speed, direction, src)
		this.ctx = ctx
		this.maxFrame = 2
	}
	drawTank(){
		this.move()
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

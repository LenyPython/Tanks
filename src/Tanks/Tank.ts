import {DIRECTION} from '.'
import Sprite from '../Sprite'

const enemySprite = require('../imgs/Enemy.png')


export default class Tank {
	sprite: Sprite
	maxFrame: number
	constructor(
		protected ctx: CanvasRenderingContext2D, 
		canvas: HTMLCanvasElement, 
		x = 0,
		y = 0
		) {
		this.ctx = ctx
		this.maxFrame = 2
		this.sprite = new Sprite(x, y, canvas, enemySprite)
	}
	drawSprite(){
		if(this.sprite.isMoving) this.sprite.frame++
		if(this.sprite.frame > this.maxFrame) this.sprite.frame = 0
		let rotation = 0
		switch(this.sprite.direction){
			case DIRECTION.DOWN:
				rotation = 1 * this.sprite.size
				break
			case DIRECTION.RIGHT:
				rotation = 2 * this.sprite.size
				break
			case DIRECTION.LEFT:
				rotation = 3 * this.sprite.size
				break

		}

		this.ctx.drawImage(
			this.sprite.img, 
			//how to crop image x px on each frame, y px always 0
			this.sprite.frame * this.sprite.size,
			rotation,
			//size of croped img
			this.sprite.size,
			this.sprite.size,
			//start position of drawing
			this.sprite.posX,
			this.sprite.posY,
			//size of drawing
			this.sprite.size,
			this.sprite.size,
			)
	}


}

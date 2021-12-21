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

		this.ctx.drawImage(
			this.sprite.img, 
			//how to crop image x px on each frame, y px always 0
			this.sprite.frame * this.sprite.size, 0,
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

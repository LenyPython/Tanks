import Sprite from '../Sprite'

const enemySprite = require('../imgs/Enemy.png')


export default class Tank {
	sprite: Sprite
	constructor(
		protected ctx: CanvasRenderingContext2D, 
		canvas: HTMLCanvasElement, 
		x = 0,
		y = 0
		) {
		this.ctx = ctx
		this.sprite = new Sprite(x, y, canvas, enemySprite)
	}
	drawSprite(){
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

import Movable from "../GameObjects/Moveable";
import {DIRECTION} from "../Tanks";

const bulletSprite = require('../imgs/Bullet.png')

export default class Bullet extends Movable{
	constructor(
		public ctx: CanvasRenderingContext2D,
		public canvas: HTMLCanvasElement,
		public posX: number, 
		public posY: number, 
		public direction: DIRECTION,
		public size = 8,
		public speed = 15,
		src = bulletSprite
	){
		super(ctx, canvas, posX, posY, direction, src, size, speed)
	}
	drawBullet(){
		this.move()
		let rotation = 0
		switch(this.direction){
			case DIRECTION.DOWN:
				rotation = this.size
				break
			case DIRECTION.RIGHT:
				rotation = this.size
				break
			case DIRECTION.LEFT:
				rotation = this.size
				break
		}
		this.ctx.drawImage(
			this.sprite.img, 
			//how to crop image x px on each frame, y px always 0
			0,
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

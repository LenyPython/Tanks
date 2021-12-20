import Tank from './Tank'
import {DIRECTION} from './index'

export default class Player extends Tank {
	constructor(
		ctx: CanvasRenderingContext2D,
		public posX: number,
		public posY: number) {
		super(ctx, posX, posY)
		this.direction = DIRECTION.UP
	}
	draw(getRandom: ()=>number) {
		this.ctx.beginPath()
		this.ctx.strokeStyle = 'blue'
		this.ctx.rect(getRandom(), getRandom(), getRandom(), getRandom(),)
		this.ctx.stroke()
	}

}

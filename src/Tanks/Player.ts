import Tank from './Tank'
import {DIRECTION} from './index'

export default class Player extends Tank {
	constructor(ctx, x, y) {
		super(ctx, x, y)
		this.direction = DIRECTION.UP
	}
	draw(getRandom) {
		ctx.beginPath()
		ctx.strokeStyle = 'blue'
		ctx.rect(getRandom(), getRandom(), getRandom(), getRandom(),)
		ctx.stroke()
	}

}

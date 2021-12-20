import {DIRECTION} from './index'

export default class Tank {
	constructor(ctx, x, y, health = 1) {
		this.ctx = ctx
		this.x = x
		this.y = y
		this.isMoving = false
		this.size = 50
		this.direction = DIRECTION.DOWN
		this.health = health
	}
}

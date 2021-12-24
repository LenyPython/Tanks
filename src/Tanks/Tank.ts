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

}

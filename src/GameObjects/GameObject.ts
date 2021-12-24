import Sprite from '../Sprite'
import {DIRECTION} from '../Tanks'


export default class GameObject {
	sprite: Sprite
	maxFrame: number
	constructor(
		protected ctx: CanvasRenderingContext2D, 
		public posX: number, 
		public posY: number, 
		public canvas: HTMLCanvasElement,
		public size = 45,
		protected src: string,
		) {
		this.ctx = ctx
		this.maxFrame = 2
		this.sprite = new Sprite(src)
	}

	}

import Sprite from '../Sprite'


export default class GameObject {
	sprite: Sprite
	constructor(
		protected ctx: CanvasRenderingContext2D, 
		public posX: number, 
		public posY: number, 
		public canvas: HTMLCanvasElement,
		public size: number,
		protected src: string,
		) {
		this.size = size
		this.ctx = ctx
		this.sprite = new Sprite(src)
	}

	}

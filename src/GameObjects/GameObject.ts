import Game from '../Game'
import Sprite from '../Sprite'


export default class GameObject {
	sprite: Sprite
	constructor(
		protected game: Game,
		public posX: number, 
		public posY: number, 
		public size: number,
		protected src: string,
		) {
		this.size = size
		this.game = game
		this.sprite = new Sprite(src)
	}

	}

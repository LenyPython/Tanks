import Sprite from "../Sprite";
import {DIRECTION} from "../Tanks";

const bulletSprite = require('../imgs/Bullet.png')

export default class Bullet{
	sprite: Sprite
	constructor(
		public posX: number, 
		public posY: number, 
		public canvas: HTMLCanvasElement,
		public src: string,
		public direction: DIRECTION,
		public size = 9,
		public speed = 9
	){
		this.sprite = new Sprite(
				posX,
				posY,
				canvas,
				bulletSprite,
				size,
				speed,
				direction
		)
	}
}

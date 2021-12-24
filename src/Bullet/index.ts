import Movable from "../GameObjects/Moveable";
import {DIRECTION} from "../Tanks";

const bulletSprite = require('../imgs/Bullet.png')

export default class Bullet extends Movable{
	constructor(
		public ctx: CanvasRenderingContext2D,
		public posX: number, 
		public posY: number, 
		public canvas: HTMLCanvasElement,
		public direction: DIRECTION,
		public size = 5,
		public speed = 9,
		src = bulletSprite
	){
		super(ctx, canvas, posX, posY, size, speed, direction, src)
	}
}

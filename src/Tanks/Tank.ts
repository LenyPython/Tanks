import Bullet from '../Bullet'
import Movable from '../GameObjects/Moveable'
import {DIRECTION} from '.'
import GameObject from '../GameObjects/GameObject'

const enemySprite = require('../imgs/Enemy.png')


export default class Tank extends Movable {
	bullets: Bullet[]
	maxBullets: number
	maxFrame: number
	constructor(
		protected ctx: CanvasRenderingContext2D, 
		canvas: HTMLCanvasElement, 
		public posX: number,
		public posY: number,
		public direction: DIRECTION,
		public src = enemySprite,
		public size = 45,
		) {
		super(ctx, canvas, posX, posY, direction, src, size)
		this.ctx = ctx
		this.maxFrame = 2
		this.maxBullets = 3
		this.bullets = []
	}
	drawTank(){
		this.move()
		if(this.isMoving) this.sprite.frame++
		if(this.sprite.frame > this.maxFrame) this.sprite.frame = 0
		let rotation = 0
		switch(this.direction){
			case DIRECTION.DOWN:
				rotation = 1 * this.size
				break
			case DIRECTION.RIGHT:
				rotation = 2 * this.size
				break
			case DIRECTION.LEFT:
				rotation = 3 * this.size
				break
		}
		this.ctx.drawImage(
			this.sprite.img, 
			//how to crop image x px on each frame, y px always 0
			this.sprite.frame * this.size,
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
	fireBullet() {
			if(this.bullets.length >= this.maxBullets) return
			let X = 0, Y = 0
			if(this.direction === DIRECTION.UP) {
				X = this.posX + this.size / 2 - 3
				Y = this.posY
			}
			if(this.direction === DIRECTION.DOWN) {
				X = this.posX + this.size / 2 - 3
				Y = this.posY + this.size
			}
			if(this.direction === DIRECTION.LEFT) {
				X = this.posX
				Y = this.posY + this.size / 2 - 3
			}
			if(this.direction === DIRECTION.RIGHT) {
				X = this.posX + this.size
				Y = this.posY + this.size / 2 - 3
			}
			this.bullets.push(
				new Bullet(
					this.ctx,
					this.canvas,
					X,
					Y,
					this.direction,
					)
											 )
	}
	manageBullets(tanks: Tank[]) {
		let hits = 0
		for(let i = 0; i < this.bullets.length; i++){
			const bullet = this.bullets[i]
			bullet.drawBullet()
			//check collision for all tanks
			for(let j = 0; j < tanks.length; j++){
				const tank = tanks[j]
				//check collision for all oposing tanks bullets
				for(let b = 0; b < tank.bullets.length; b++){
					const tankBullet = tank.bullets[b]
					if(this.checkCollision(bullet, tankBullet)){
						this.bullets.splice(i,1)
						tank.bullets.splice(b,1)
						i--
						break
					}
				}
				if(this.checkCollision(bullet, tank)){
					hits += 5
					this.bullets.splice(i,1)
					tanks.splice(j,1)
					i--
					j--
				}
			}
		if(this.checkIsInBounds(bullet)) this.bullets.splice(i,1)
		}
		return hits
	}
	checkIsInBounds(bullet: Bullet){
		return (
				bullet.posX <= 0 || 
				bullet.posX >= this.canvas.width - bullet.size ||
				bullet.posY <= 0 ||
				bullet.posY >= this.canvas.height - bullet.size
			)

	}
	checkCollision(obj1: GameObject, obj2: GameObject){
		const objectsCollide = (obj1.posX > obj2.posX + obj2.size ||
														obj2.posX > obj1.posX + obj1.size ||
														obj1.posY > obj2.posY + obj2.size ||
														obj2.posY > obj1.posY + obj1.size)
		return !objectsCollide

	}
}

import Tank from './Tank'
import Bullet from '../Bullet'
import {DIRECTION} from './index'
import {keyInterface} from '../constants'

export default class Player extends Tank {
	keyPressed: Set<string>
	maxBullets: number
	bullets: Bullet[]
	constructor(
		public keySet: keyInterface,
		protected ctx: CanvasRenderingContext2D, 
		canvas: HTMLCanvasElement, 
		public posX: number,
		public posY: number,
		public direction: DIRECTION,
		public src: string,
		) {
		super(ctx, canvas, posX, posY, DIRECTION.UP, src)
		this.keySet = keySet
		this.isMoving = false
		this.sprite.img.src = src
		this.direction = DIRECTION.UP
		this.maxBullets = 1
		this.bullets = []
		this.keyPressed = new Set()
	}
	checkKeyPress(key: string){
		const { UP, DOWN, LEFT, RIGHT, FIRE } = this.keySet
		const hasAmmo = this.bullets.length < this.maxBullets
		if(key === FIRE && hasAmmo) this.fireBullet()
			switch(key.toLowerCase()){
				case UP:
					this.isMoving = true
					this.direction = DIRECTION.UP
					this.keyPressed.add(UP)
					break
				case DOWN:
					this.isMoving = true
					this.direction = DIRECTION.DOWN
					this.keyPressed.add(DOWN)
					break
				case LEFT:
					this.isMoving = true
					this.direction = DIRECTION.LEFT
					this.keyPressed.add(LEFT)
					break
				case RIGHT:
					this.isMoving = true
					this.direction = DIRECTION.RIGHT
					this.keyPressed.add(RIGHT)
					break
			}
	}
	fireBullet() {
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
			this.bullets.push( new Bullet(
				this.ctx,
				this.canvas,
				X,
				Y,
				this.direction,
		)
									 )
	}
	manageBullets() {
		for(let i = 0; i < this.bullets.length; i++){
			const bullet = this.bullets[i]
			bullet.drawBullet()
			const isBulletOutOfBounds = (
				bullet.posX <= 0 || 
				bullet.posX >= this.canvas.width - bullet.size ||
				bullet.posY <= 0 ||
				bullet.posY >= this.canvas.height - bullet.size
			)
			if(isBulletOutOfBounds) this.bullets.splice(i,1)

		}

	}
	stopPlayer(key: string){
		this.keyPressed.delete(key.toLowerCase())
		if(this.keyPressed.size === 0) this.isMoving = false
	}
}

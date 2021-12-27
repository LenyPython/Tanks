import Game from '../Game'
import Tank from './Tank'
import Bullet from '../Bullet'
import {DIRECTION} from './index'
import {keyInterface} from '../constants'

export default class Player extends Tank {
	score: number
	keyPressed: Set<string>
	maxBullets: number
	bullets: Bullet[]
	constructor(
		public keySet: keyInterface,
		protected game: Game, 
		public posX: number,
		public posY: number,
		public direction: DIRECTION,
		public src: string,
		) {
		super(game, posX, posY, DIRECTION.UP, src)
		this.score = 0
		this.keySet = keySet
		this.isMoving = false
		this.sprite.img.src = src
		this.direction = DIRECTION.UP
		this.maxBullets = 2
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
	stopPlayer(key: string){
		this.keyPressed.delete(key.toLowerCase())
		if(this.keyPressed.size === 0) this.isMoving = false
	}
}

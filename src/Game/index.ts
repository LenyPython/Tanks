import {Npc, Player, DIRECTION} from "../Tanks"
import {keySet1, keySet2} from '../constants'
const sprite1 = require('../imgs/Player1.png')
const sprite2 = require('../imgs/Player2.png')

export default class Game {
	players: Player[]
	enemies: Npc[]
	lastFrame: number
	FPS: number
	constructor(
		public ctx: CanvasRenderingContext2D,
		public canvas: HTMLCanvasElement,
		multiplayer: boolean
	){
		this.lastFrame = Date.now()
		this.FPS = 20
		this.ctx = ctx
		this.canvas = canvas
		this.players = [new Player(keySet1, ctx, canvas, sprite1)]
		if(multiplayer) this.players.push(new Player(keySet2, ctx, canvas, sprite2))
		this.enemies = [new Npc(ctx, canvas, 0, 0)]
		window.addEventListener('keydown', (e: KeyboardEvent)=>{
			for(let player of this.players)	this.checkPlayerMovement(e.key, player)
		})
		window.addEventListener('keyup', (e: KeyboardEvent)=>{
			for(let player of this.players) this.stopPlayer(e.key, player)
		})

	}
	animate() {
		let timeNow = Date.now()
		if(timeNow - this.lastFrame >= this.FPS){
			this.lastFrame = timeNow
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
			for(let player of this.players) player.draw()
			for(let enemy of this.enemies) enemy.draw(timeNow)
		}
		requestAnimationFrame(()=>this.animate())
	}
	checkPlayerMovement(key: string, player: Player){
			const { UP, DOWN, LEFT, RIGHT } = player.keySet
			switch(key){
				case UP:
					player.sprite.isMoving = true
					player.sprite.direction = DIRECTION.UP
					break
				case DOWN:
					player.sprite.isMoving = true
					player.sprite.direction = DIRECTION.DOWN
					break
				case LEFT:
					player.sprite.isMoving = true
					player.sprite.direction = DIRECTION.LEFT
					break
				case RIGHT:
					player.sprite.isMoving = true
					player.sprite.direction = DIRECTION.RIGHT
					break
			}
	}
	stopPlayer(key: string, player: Player){
		const KEYS = Object.values(player.keySet)
		if(KEYS.includes(key)) player.sprite.isMoving = false
	}
}

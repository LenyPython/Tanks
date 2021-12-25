import {Npc, Player, DIRECTION} from "../Tanks"
import {keySet1, keySet2} from '../constants'
import Bullet from "../Bullet"
import Spawn from "../Spawn"
const sprite1 = require('../imgs/Player1.png')
const sprite2 = require('../imgs/Player2.png')

export default class Game {
	score: number
	players: Player[]
	enemies: Npc[]
	lastFrame: number
	FPS: number
	spawner: Spawn
	playersBullets: Bullet[]
	enemiesBullets: Bullet[]
	constructor(
		public ctx: CanvasRenderingContext2D,
		public canvas: HTMLCanvasElement,
		public scoreDisplay: HTMLSpanElement,
		multiplayer: boolean
	){
		this.lastFrame = Date.now()
		this.score = 0
		this.FPS = 20
		this.ctx = ctx
		this.canvas = canvas
		this.players = []
		this.enemies = []
		this.spawner = new Spawn(this.enemies)
		this.playersBullets = []
		this.enemiesBullets = []
		this.createGame(multiplayer)
	}
	animate() {
		let timeNow = Date.now()
		if(timeNow - this.lastFrame >= this.FPS){
			if(this.enemies.length < this.players.length + 3)	this.spawner.spawnEnemy(this.ctx, this.canvas, timeNow)
			this.lastFrame = timeNow
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
			for(let i = 0; i < this.players.length; i++) {
				const player = this.players[i]
				player.drawTank()
				this.score += player.manageBullets(this.enemies)
			}
			for(let enemy of this.enemies) {
				enemy.drawNPC(timeNow)
				enemy.manageBullets(this.players)
			}
			this.scoreDisplay.innerText = this.score.toString()
		}
		requestAnimationFrame(()=>this.animate())
	}
createGame(multiplayer: boolean){
		this.players.push(new Player(
			keySet1,
		this.ctx,
		this.canvas,
		this.canvas.width/2 - 100,
		this.canvas.height - 100,
		DIRECTION.UP,
		sprite1		
		))
		if(multiplayer) this.players.push(new Player(
		keySet2,
		this.ctx,
		this.canvas,
		this.canvas.width/2 + 100,
		this.canvas.height - 100,
		DIRECTION.UP,
		sprite2
		))
		window.addEventListener('keydown', (e: KeyboardEvent)=>{
			for(let player of this.players)	player.checkKeyPress(e.key)
		})
		window.addEventListener('keyup', (e: KeyboardEvent)=>{
			for(let player of this.players) player.stopPlayer(e.key)
		})

}
}

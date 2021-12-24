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
		this.players = []
		this.enemies = []
		this.createGame(multiplayer)
	}
	animate() {
		let timeNow = Date.now()
		if(timeNow - this.lastFrame >= this.FPS){
			this.lastFrame = timeNow
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
			for(let player of this.players) {
				player.drawTank()
				player.manageBullets()
			}
			for(let enemy of this.enemies) {
				enemy.drawNPC(timeNow)
				enemy.manageBullets()
			}
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
		this.enemies.push(new Npc(
			this.ctx,
			this.canvas, 0, 0))
		window.addEventListener('keydown', (e: KeyboardEvent)=>{
			for(let player of this.players)	player.checkKeyPress(e.key)
		})
		window.addEventListener('keyup', (e: KeyboardEvent)=>{
			for(let player of this.players) player.stopPlayer(e.key)
		})

}
}

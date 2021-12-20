import {Npc, Player, DIRECTION} from "../Tanks"
import {keySet1, keySet2} from '../constants'

export default class Game {
	players: Player[]
	enemies: Npc[]
	constructor(
		public ctx: CanvasRenderingContext2D,
		public canvas: HTMLCanvasElement,
		multiplayer: boolean
	){
		this.ctx = ctx
		this.canvas = canvas
		this.players = [new Player(ctx, canvas, keySet1, 250, 500)]
		if(multiplayer) this.players.push(new Player(ctx, canvas, keySet2, 350, 500))
		this.enemies = [new Npc(ctx, canvas, 0, 0)]
		window.addEventListener('keydown', (e: KeyboardEvent)=>{
			for(let player of this.players)	this.checkPlayerMovement(e.key, player)
		})
		window.addEventListener('keyup', (e: KeyboardEvent)=>{
			for(let player of this.players) this.stopPlayer(e.key, player)
		})

	}
	animate() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
	for(let player of this.players) player.draw()
	for(let enemy of this.enemies) enemy.draw()
	requestAnimationFrame(()=>this.animate())
	}
	checkPlayerMovement(key: string, player: Player){
			const { UP, DOWN, LEFT, RIGHT } = player.keySet
			switch(key){
				case UP:
					player.isMoving = true
					player.direction = DIRECTION.UP
					break
				case DOWN:
					player.isMoving = true
					player.direction = DIRECTION.DOWN
					break
				case LEFT:
					player.isMoving = true
					player.direction = DIRECTION.LEFT
					break
				case RIGHT:
					player.isMoving = true
					player.direction = DIRECTION.RIGHT
					break
			}
	}
	stopPlayer(key: string, player: Player){
		const KEYS = Object.values(player.keySet)
		if(KEYS.includes(key)) player.isMoving = false
	}
}

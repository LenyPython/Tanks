import {keySet1, keySet2} from './constants'
import {checkPlayerMovement, stopPlayer} from './Logic'
import {Player} from './Tanks'

const canvas = document.getElementById('main') as HTMLCanvasElement
canvas.width = 600
canvas.height = 600
const btn = document.querySelector('button')
const ctx = canvas.getContext('2d')
if(!ctx) throw new Error('Couldn\'t get canvas')
const player1 = new Player(ctx, canvas, 250, 500)
const player2 = new Player(ctx, canvas, 350, 500)


btn?.addEventListener('click', () => {
		animate()
})


window.addEventListener('keydown', (e: KeyboardEvent)=>{
	checkPlayerMovement(e.key, player1, keySet1)
	checkPlayerMovement(e.key, player2, keySet2)
})
window.addEventListener('keyup', (e: KeyboardEvent)=>{
	stopPlayer(e.key, player1, keySet1)
	stopPlayer(e.key, player2, keySet2)
})

const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	player1.draw()
	player2.draw()
	requestAnimationFrame(animate)
}

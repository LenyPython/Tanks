import Game from './Game'
import './imgs/logo.svg'
import './style.css'

const canvas = document.getElementById('main') as HTMLCanvasElement
const scoreDisplay = document.getElementById('score')
canvas.width = 600
canvas.height = 600
const singleBtn = document.getElementById('single')
const multiBtn = document.getElementById('multi')
const ctx = canvas.getContext('2d')
if(!ctx) throw new Error('Couldn\'t get canvas')
if(!scoreDisplay) throw new Error('Coudn\'t get scoreboard')


singleBtn?.addEventListener('click', () => {
		const GAME = new Game(ctx, canvas, scoreDisplay, false)
		GAME.animate()
})
multiBtn?.addEventListener('click', () => {
		const GAME = new Game(ctx, canvas, scoreDisplay, true)
		GAME.animate()
})



